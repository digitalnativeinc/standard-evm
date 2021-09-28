// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../../security/MonthGuard.sol";
import "../../security/BondedGuard.sol";

contract BondedStrategy is MonthGuard, BondedGuard {

    address public stnd;
    uint256 totalSupply;
    address owner;
    mapping(address => uint256) public bonded;

    event DividendClaimed(address claimer, uint256 amount);
    
    constructor(address stnd_) {
        stnd = stnd_;
    }

    function claim(address token) public onlyPerOneMonth(token) {
        require(IERC20(stnd).totalSupply() != 0, "BondedStrategy: STND has not been placed yet");
        uint256 proRataBonded = bonded[msg.sender] * IERC20(token).balanceOf(address(this)) / IERC20(stnd).totalSupply();
        require(proRataBonded >= 0, "BondedStrategy: Too small Bonded amount");
        require(IERC20(token).transfer(msg.sender, proRataBonded), "BondedStrategy: fee transfer failed");
        emit DividendClaimed(msg.sender, proRataBonded);
    }

    function bond(uint256 amount_) public {
        require(IERC20(stnd).transferFrom(msg.sender, address(this), amount_), "BondedStrategy: Not enough allowance to move with given amount");
        bonded[msg.sender] += amount_;
    }

    function unbond(uint256 amount_) public unBondingPeriod {
        require(bonded[msg.sender] >= amount_, "BondedStrategy: Not enough bonded STND");
        IERC20(stnd).transfer(msg.sender, amount_);
        bonded[msg.sender] -= amount_;
    }

    function updateSupply(uint256 supply_, bool auto_) public {
        require(msg.sender == owner, "BondedStrategy: Access Invalid");
        if (auto_) {
            totalSupply = IERC20(stnd).totalSupply();
        }
        else {
            totalSupply = supply_;
        }
    }

    // Get balance of STND bonded for snapshot integration
    function balanceOf(address account) public view returns (uint256) {
        return bonded[account];
    }

}