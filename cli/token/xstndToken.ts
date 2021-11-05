import { task, types } from "hardhat/config";
import { BigNumber, constants } from "ethers";
import "@nomiclabs/hardhat-etherscan";
import { executeTx, deployContract, ZERO, MINTER_ROLE, recordAddress } from "../helper";
import "@tenderly/hardhat-tenderly"
import { ConstructorFragment } from "@ethersproject/abi";


task("xstndtoken-deploy", "Deploy StandardDividend Multichain Token")
  .addParam("proxy", "Add proxy pattern to the contract for upgradability")
  .addOptionalParam("parent", "mint initial total supply of 1,000,000 for parent usage or test", false, types.boolean)
  .setAction(async ({ proxy, parent }, { ethers }) => {

    const [deployer] = await ethers.getSigners();
    console.log(await ethers.getSigners())
    // INFO: hre can only be imported inside task
    const hre = require("hardhat")

    console.log(
      `Deployer balance: ${ethers.utils.formatEther(
        await deployer.getBalance()
      )} ETH`
    );

    // Deploy  Impl
    console.log(`Deploying Standard Multichain Token Impl with the account: ${deployer.address}`);
    const TokenImpl = await ethers.getContractFactory("UChildAdministrableERC20")
    const impl = await TokenImpl.deploy()
    await deployContract(impl, "xSTNDImpl")

    if (proxy == "true") {
      // Deploy Proxy
      console.log(`Deploying Standard Multichain Token Proxy with the account: ${deployer.address}`);
      const Proxy = await ethers.getContractFactory("UChildERC20Proxy")
      const proxy = await Proxy.deploy(impl.address)
      await deployContract(proxy, "xSTNDProxy")

      // Initialize proxy with necessary info
      const tx = await TokenImpl.attach(proxy.address).initialize("StandardDividend", "xSTND", 18, "0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa");
      await executeTx(tx, "Execute initialize at")

      // Mint initial total supply if parent
      if (parent) {
        const mint = await TokenImpl.attach(proxy.address).mint(deployer.address, ethers.utils.parseUnits("100000000", 18));
        await executeTx(mint, "Execute Mint at")

        // Verify proxy
        await hre.run("verify:verify", {
          contract: "contracts/tokens/multichain/stnd_multichain_proxy.sol:UChildERC20Proxy",
          address: proxy.address,
          constructorArguments: [impl.address]
        })
      }
    } else {
      // Initialize impl with necessary info
      const tx = await TokenImpl.attach(impl.address).initialize("Standard", "STND", 18, "0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa");
      await executeTx(tx, "Execute initialize at")
      // Mint initial total supply if parent
      if (parent) {
        const mint = await TokenImpl.attach(impl.address).mint(deployer.address, ethers.utils.parseUnits("100000000", 18));
        await executeTx(mint, "Execute Mint at")
      }
    }


    console.log(
      `Deployer balance: ${ethers.utils.formatEther(
        await deployer.getBalance()
      )} ETH`
    );

    // Verify Impl
    await hre.run("verify:verify", {
      contract: "contracts/tokens/multichain/stnd_multichain_impl.sol:UChildAdministrableERC20",
      address: impl.address,
      constructorArguments: []
    })

    const contracts = [
      {
        name: "UChildAdministrableERC20",
        address: impl.address
      },
      {
        name: "UChildERC20Proxy",
        address: proxy.address
      }]

    await hre.tenderly.verify(...contracts)
  });