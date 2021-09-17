/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PolkadotClaim, PolkadotClaimInterface } from "../PolkadotClaim";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "eth",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "stnd",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "idx",
        type: "uint256",
      },
    ],
    name: "Claimed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "dot",
        type: "bytes32",
      },
    ],
    name: "claim_allo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "claims",
    outputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "Address",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "claimed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "claims_idx",
    outputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "Address",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "claimed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stnd",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600380546001600160a01b03191633179055600060045561040e806100376000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806308049e611461005157806396735aa0146100b2578063974fadfd146100f7578063c6788bdd1461010c575b600080fd5b61008b61005f366004610346565b600260208190526000918252604090912080546001820154928201546003909201549092919060ff1684565b60408051948552602085019390935291830152151560608201526080015b60405180910390f35b6000546100d29073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100a9565b61010a610105366004610346565b610145565b005b61008b61011a366004610309565b6001602081905260009182526040909120805491810154600282015460039092015490919060ff1684565b604080516080810182526004805482526020820184905260005483517f70a082310000000000000000000000000000000000000000000000000000000081523392810192909252919283019173ffffffffffffffffffffffffffffffffffffffff16906370a082319060240160206040518083038186803b1580156101c957600080fd5b505afa1580156101dd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610201919061035f565b815260006020918201819052825160058181558484015160069081556040808701516007908155606090970151600880549115157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff009283161781553387526001808952838820968755845487820155895460028881019190915582546003988901805460ff9283161515908716179055600480548b529a8290529489209654875594549086015597549284019290925595549190920180549190951615159116179092558054916102d183610378565b9091555050600454604051829033907f9b01158d4bc10c112ba32b5240cda97e49e2eb86021f03f6a0f460342ac4dfda90600090a450565b60006020828403121561031b57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461033f57600080fd5b9392505050565b60006020828403121561035857600080fd5b5035919050565b60006020828403121561037157600080fd5b5051919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156103d1577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b506001019056fea26469706673582212200af352e1bdb8f06a2397e622fb2e4f876bc52381358dd9ca7913165aad30e49c64736f6c63430008070033";

export class PolkadotClaim__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PolkadotClaim> {
    return super.deploy(overrides || {}) as Promise<PolkadotClaim>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PolkadotClaim {
    return super.attach(address) as PolkadotClaim;
  }
  connect(signer: Signer): PolkadotClaim__factory {
    return super.connect(signer) as PolkadotClaim__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PolkadotClaimInterface {
    return new utils.Interface(_abi) as PolkadotClaimInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PolkadotClaim {
    return new Contract(address, _abi, signerOrProvider) as PolkadotClaim;
  }
}