pragma solidity ^0.8.0;

import '../../oracle/IPrice.sol';
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "./IVault.sol";
import "./IVaultManager.sol";
import "./IV1.sol";
import "../../uniswapv2/interfaces/IMTRMarket.sol";
import "../../tokens/IStablecoin.sol";

contract Vault is IVault {
    /// Price Feed Interface
    IPrice feed;
    /// Vault NFT interface
    IERC721 V1;
    /// Market interface 
    address market;
    /// Vault manager
    IVaultManager vltManager;
    /// Collateral Aggregator contract address to get processed price data
    address cAggregator;
    /// Debt Aggregator contract address to get processed price data
    address dAggregator;
    /// Address of a manager
    address manager;
    /// Address of debt;
    address debt;
    /// Address of vault ownership registry
    address v1;
    /// address of a collateral
    address collateral;
    /// Vault global identifier
    uint vaultId;
    /// borrowed amount 
    uint256 borrow;
    /// created block timestamp
    uint256 createdAt;
    /// address of fee Pool
    address feePool;


    constructor() public {
        manager = msg.sender;
        createdAt = block.timestamp;
    }

    modifier onlyVaultOwner {
        V1 = IERC721(v1);
        require(V1.ownerOf(vaultId) == msg.sender, "Vault: Vault is not owned by you");
        _;
    }

    // called once by the factory at time of deployment
    function initialize(address collateral_, uint vaultId_, address cAggregator_, address dAggregator_, address v1_, address debt_, uint256 amount_, address market) external {
        require(msg.sender == manager, 'Vault: FORBIDDEN'); // sufficient check
        collateral = collateral_;
        vaultId = vaultId_;
        cAggregator = cAggregator_;
        dAggregator = dAggregator_;
        v1 = v1_;
        debt = debt_;
        borrow = amount_;
    }

    /// liquidate
    function liquidate() public {
        if (collateral == address(0)) {
            require(!isValidCDP(cAggregator, dAggregator, address(this).balance, IERC20(debt).balanceOf(address(this))), "Vault: Position is still safe");
            IMTRMarket(market).liquidate(collateral, debt, IERC20(collateral).balanceOf(address(this)), 0);
        } else {
            require(!isValidCDP(cAggregator, dAggregator, IERC20(collateral).balanceOf(address(this)), IERC20(debt).balanceOf(address(this))), "Vault: Position is still safe");
            IMTRMarket(market).liquidate(collateral, debt, IERC20(collateral).balanceOf(address(this)), 0);
        }
    }
    
    /// Deposit collateral
    function depositCollateralNative() payable public onlyVaultOwner {
        require(collateral == address(0), "Vault: collateral is not a native asset"); 
        emit DepositCollateral(vaultId, msg.value);        
    }

    /// Deposit collateral
    function depositCollateral(uint256 amount_) public onlyVaultOwner {
        IERC20(collateral).transferFrom(msg.sender, address(this), amount_);
        emit DepositCollateral(vaultId, amount_);        
    }

    /// Withdraw collateral
    function withdrawCollateralNative() payable public onlyVaultOwner {
        require(collateral == address(0), "Vault: collateral is not a native asset");
        uint256 balance = address(this).balance;
        require(balance >= msg.value, "Vault: Not enough collateral");    
        if(borrow != 0) {
            require(isValidCDP(cAggregator, dAggregator, balance - msg.value, borrow), "Withdrawal would put vault below minimum collateral ratio");
        }
        payable(msg.sender).transfer(msg.value);
        emit WithdrawCollateral(vaultId, msg.value);
    }

    /// Withdraw collateral
    function withdrawCollateral(uint256 amount_) public onlyVaultOwner {
        require(address(this).balance >= amount_, "Vault: Not enough collateral");
        if(borrow != 0) {
            require(isValidCDP(cAggregator, dAggregator, IERC20(collateral).balanceOf(address(this)) - amount_, borrow), "Withdrawal would put vault below minimum collateral ratio");
        }
        IERC20(collateral).transfer(msg.sender, amount_);
        emit WithdrawCollateral(vaultId, amount_);
    }

    /// Payback MTR
    function payDebt(uint256 amount_) public onlyVaultOwner {
        // calculate debt with interest
        uint fee = _calculateFee();
        require(amount_ != 0, "Vault: amount is zero");
        // send MTR to the vault
        IERC20(debt).transferFrom(msg.sender, address(this), amount_);
        // send fee to the pool
        IERC20(debt).transfer(feePool, fee);
        // burn mtr debt
        uint256 burn = amount_ - fee;
        _burnMTRFromVault(burn);
        borrow -=  burn;
        emit PayBack(vaultId, borrow, fee);
    }

    /// Close CDP
    function closeVault(uint256 amount_) public onlyVaultOwner {
        // calculate debt with interest
        uint fee = _calculateFee();
        require(fee + borrow == amount_, "Vault: not enough balance to payback");
        // send MTR to the vault
        IERC20(debt).transferFrom(msg.sender, address(this), amount_);
        // send fee to the pool
        IERC20(debt).transfer(feePool, fee);
        // burn mtr debt with interest
        _burnMTRFromVault(amount_ - fee);
        // burn vault nft
        _burnV1FromVault();
        emit CloseVault(address(this), amount_, fee); 
        // self destruct the contract, send remaining balance if collateral is native currency
        selfdestruct(payable(msg.sender));
    }

    /// burn vault v1
    function _burnV1FromVault() internal {
        IV1(v1).burnFromVault(vaultId);
    }

    /// burn vault mtr
    function _burnMTRFromVault(uint256 amount_) internal {
        IStablecoin(debt).burnFrom(msg.sender, amount_);
    }

    function isValidCDP(address cAggregator_, address dAggregator_, uint256 cAmount_, uint256 dAmount_) private returns (bool) {
        (uint256 collateralValueTimes100, uint256 debtValue) = _calculateValues(cAggregator_, dAggregator_, cAmount_, dAmount_);

        (uint mcr, uint lfr, uint sfr, uint cDecimals) = IVaultManager(manager).getCDPConfig(collateral);

        uint256 debtValueAdjusted = debtValue / (10 ** cDecimals);

        // if the debt become obsolete
        return debtValueAdjusted == 0 ? true : collateralValueTimes100 / debtValueAdjusted >= mcr;
    }

    function _calculateValues(address cAggregator_, address dAggregator_, uint256 cAmount_, uint256 dAmount_) private returns (uint256, uint256) {
        uint256 collateralValue = _getAssetValue(cAggregator_, cAmount_);
        uint256 debtValue = _getAssetValue(dAggregator_, dAmount_);
        uint256 collateralValueTimes100 = collateralValue * 100;
        assert(collateralValueTimes100 >= collateralValue); // overflow check
        return (collateralValue, debtValue);        
    }

    /// Get collateral value in 8 decimal */USD
    function _getAssetPrice(address aggregator_) internal returns(uint) {
        feed = IPrice(aggregator_);
        return uint(feed.getThePrice());
    }

    function _getAssetValue(address aggregator, uint256 amount_) internal returns (uint256) {
        uint price = _getAssetPrice(aggregator);
        assert(price != 0);
        uint256 assetValue = price * amount_;
        assert(assetValue >= amount_); // overflow check
        return assetValue;
    }

    function _calculateFee() internal returns (uint) {
        uint256 assetValue = _getAssetValue(dAggregator, borrow);
        (uint mcr, uint lfr, uint sfr, uint cDecimals) = IVaultManager(manager).getCDPConfig(collateral);
        /// (sfr * assetValue/100) * (duration in months)
        uint256 fee = sfr * assetValue;
        assert(fee >= assetValue);
        return fee / 100;
    }

    function getDebt() public returns (uint) {
        return _calculateFee() + borrow;
    }
}