// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.0;

import "../../oracle/OracleRegistry.sol";
import "./Vault.sol";
import "./interfaces/IVaultFactory.sol";

contract VaultManager is OracleRegistry, IVaultManager {
    
    /// Desirable supply of stablecoin 
    uint256 public override desiredSupply;
    /// Switch to on/off rebase;
    bool public override rebaseActive;
    /// Last rebase
    uint256 public override lastRebase;

    // CDP configs
    /// key: Collateral address, value: Liquidation Fee Ratio (LFR) in percent(%) with 5 decimal precision(100.00000%)
    mapping (address => uint) internal LFRConfig;
    /// key: Collateral address, value: Minimum Collateralization Ratio (MCR) in percent(%) with 5 decimal precision(100.00000%)
    mapping (address => uint) internal MCRConfig;
    /// key: Collateral address, value: Stability Fee Ratio (SFR) in percent(%) with 5 decimal precision(100.00000%)
    mapping (address => uint) internal SFRConfig;
    /// key: Collateral address, value: Expiaries of a debt for interest rate fixation
    mapping (address => uint256) internal Expiaries;  
    /// key: Collateral address, value: whether collateral is allowed to borrow
    mapping (address => bool) internal IsOpen;
    /// key: Collateral address, value: whether collateral is allowed to borrow
    mapping (address => uint8) internal cDecimals;

    // strategy configs
    mapping (bytes32 => bool) public strategies;
    
    /// Address of stablecoin oracle  standard dex
    address public override stablecoin;
    /// Address of Vault factory
    address public override factory;
    /// Address of feeTo
    address public override feeTo;
    /// Address of Standard MTR fee pool
    address public override dividend;
    /// Address of Standard Treasury
    address public override treasury;
    /// Address of liquidator
    address public override liquidator;

    constructor() {
        _setupRole(ORACLE_OPERATOR_ROLE, _msgSender());
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    }

    function initializeCDP(address collateral_, uint MCR_, uint LFR_, uint SFR_, uint256 expiary_, bool on) public {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "IA"); // Invalid Access
        LFRConfig[collateral_] = LFR_;
        MCRConfig[collateral_] = MCR_;
        SFRConfig[collateral_] = SFR_; 
        Expiaries[collateral_] = expiary_;
        IsOpen[collateral_] = on;
        cDecimals[collateral_] = IERC20Minimal(collateral_).decimals();
        emit CDPInitialized(collateral_, MCR_, LFR_, SFR_, expiary_, on);  
    }

    function setRebaseActive(bool set_) public {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "IA"); // Invalid Access
        rebaseActive = set_;
        emit RebaseActive(set_);
    }

    function setFees(address feeTo_, address dividend_, address treasury_) public {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "IA"); // Invalid Access
        feeTo = feeTo_;
        dividend = dividend_;
        treasury = treasury_;
        emit SetFees(feeTo_, dividend_, treasury_);
    }

    function setStrategies(address collateral_, address strategy_, bool value_) external {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "IA"); // Invalid Access
        strategies[keccak256(abi.encodePacked(collateral_, strategy_))] = value_;
    }
    
    function initialize(address stablecoin_, address factory_, address liquidator_) public {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "IA"); // Invalid Access
        stablecoin = stablecoin_;
        factory = factory_;
        liquidator = liquidator_;
    }

    function createCDP(address collateral_, uint cAmount_, uint dAmount_) external override returns(bool success) {
        // check if collateral is open
        require(IsOpen[collateral_], "VAULTMANAGER: NOT OPEN");
        // check position
        require(isValidCDP(collateral_, stablecoin, cAmount_, dAmount_)
        , "IP"); // Invalid Position
        // check rebased supply of stablecoin
        require(isValidSupply(dAmount_), "RB"); // Rebase limited mtr borrow
        // create vault
        (address vlt, uint256 id) = IVaultFactory(factory).createVault(collateral_, stablecoin, dAmount_, _msgSender());
        require(vlt != address(0), "VAULTMANAGER: FE"); // Factory error
        // transfer collateral to the vault, manage collateral from there
        TransferHelper.safeTransferFrom(collateral_, _msgSender(), vlt, cAmount_);
        // mint mtr to the sender
        IStablecoin(stablecoin).mint(_msgSender(), dAmount_);
        emit VaultCreated(id, collateral_, stablecoin, msg.sender, vlt, cAmount_, dAmount_);
        return true;
    }

    function createCDPNative(uint dAmount_) payable public returns(bool success) {
        address WETH = IVaultFactory(factory).WETH();
        // check if collateral is open
        require(IsOpen[WETH], "VAULTMANAGER: NOT OPEN");
        // check position
        require(isValidCDP(WETH, stablecoin, msg.value, dAmount_)
        , "IP"); // Invalid Position
        // check rebased supply of stablecoin
        require(isValidSupply(dAmount_), "RB"); // Rebase limited mtr borrow
        // create vault
        (address vlt, uint256 id) = IVaultFactory(factory).createVault(WETH, stablecoin, dAmount_, _msgSender());
        require(vlt != address(0), "VAULTMANAGER: FE"); // Factory error
        // wrap native currency
        IWETH(WETH).deposit{value: address(this).balance}();
        uint256 weth = IERC20Minimal(WETH).balanceOf(address(this));
        // then transfer collateral native currency to the vault, manage collateral from there.
        require(IWETH(WETH).transfer(vlt, weth)); 
        // mint mtr to the sender
        IStablecoin(stablecoin).mint(_msgSender(), dAmount_);
        emit VaultCreated(id, WETH, stablecoin, msg.sender, vlt, msg.value, dAmount_);
        return true;
    }
    
    function getCDPConfig(address collateral_) external view override returns (uint MCR, uint LFR, uint SFR, uint cDecimals, bool isOpen) {
        uint8 cDecimals = IERC20Minimal(collateral_).decimals();
        return (MCRConfig[collateral_], LFRConfig[collateral_], SFRConfig[collateral_], cDecimals, IsOpen[collateral_]);
    }

    function getMCR(address collateral_) public view override returns (uint) {
        return MCRConfig[collateral_];
    }

    function getLFR(address collateral_) external view override returns (uint) {
        return LFRConfig[collateral_];
    }

    function getSFR(address collateral_) public view override returns (uint) {
        return SFRConfig[collateral_];
    }

    function getExpiary(address collateral_) public view override returns (uint256) {
        return Expiaries[collateral_];
    } 

    function getOpen(address collateral_) public view override returns (bool) {
        return IsOpen[collateral_];
    } 
    
    function getCDecimal(address collateral_) public view override returns (uint) {
        return IERC20Minimal(collateral_).decimals();
    }     

    // Set desired supply for initial setting
    function setDesiredSupply(uint256 desiredSupply_) public {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "IA"); // Invalid Access
        desiredSupply = desiredSupply_;
        emit SetDesiredSupply(desiredSupply_);
    }

    // Set desirable supply of issuing stablecoin
    function rebase() public {
        require(rebaseActive, "VaultManager: RB inactive");
        require(block.timestamp - lastRebase >= 3600, "VaultManager: PY");
        uint256 totalSupply = IERC20Minimal(stablecoin).totalSupply(); 
        if ( totalSupply == 0 ) {
            return;
        }
        uint overallPrice = uint(_getPriceOf(address(0x0))); // set 0x0 oracle as overall oracle price of stablecoin in all exchanges
        // get desired supply and update 
        // solve equation where sigma{all dex pair value with MTR} / MTR total supply = 1 with decimal
        desiredSupply = totalSupply * overallPrice / 1e8; 
        lastRebase = block.timestamp;
        emit Rebase(totalSupply, desiredSupply);
    }

    function isValidCDP(address collateral_, address debt_, uint256 cAmount_, uint256 dAmount_) public view override returns (bool) {
        (uint256 collateralValueTimes100Point00000, uint256 debtValue) = _calculateValues(collateral_, debt_, cAmount_, dAmount_);
        uint mcr = getMCR(collateral_);
        // if the debt become obsolete
        // Calculation: https://www.desmos.com/calculator/cfh64zb0di
        // Valid amounts should be a point inside the boundary with mcr in percentage(%)
        return debtValue == 0 ? true : collateralValueTimes100Point00000 * 10**(18-cDecimals[collateral_]) / debtValue  >= mcr;
    }

    function isValidSupply(uint256 issueAmount_) public view override returns (bool) {
        if (rebaseActive) {
            return IERC20Minimal(stablecoin).totalSupply() + issueAmount_ <= desiredSupply;
        } else {
            return true;
        }
    }

    function _calculateValues(address collateral_, address debt_, uint256 cAmount_, uint256 dAmount_) internal view returns (uint256, uint256) {
        uint256 collateralValue = getAssetValue(collateral_, cAmount_);
        uint256 debtValue = getAssetValue(debt_, dAmount_);
        uint256 collateralValueTimes100Point00000 = collateralValue * 10000000;
        require(collateralValueTimes100Point00000 >= collateralValue, "VM: overflow"); // overflow check
        return (collateralValueTimes100Point00000, debtValue);        
    }

    function getAssetPrice(address asset_) public view override returns (uint) {
        address aggregator = PriceFeeds[asset_];
        require(
            aggregator != address(0x0),
            "VAULT: Asset not registered"
        );
        int256 result = IPrice(aggregator).getThePrice();
        return uint(result);
    }

    function getAssetValue(address asset_, uint256 amount_) public view override returns (uint256) {
        uint price = getAssetPrice(asset_);
        uint256 value = price * amount_;
        require(value >= amount_, "VM: overflow"); // overflow
        return value / 1e8;
    }

}

