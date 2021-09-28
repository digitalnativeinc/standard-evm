/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BoringOwnableData,
  BoringOwnableDataInterface,
} from "../BoringOwnableData";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0x58187e28",
        type: "bytes32",
      },
    ],
    name: "c_0x58187e28",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101dc806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80637d7d681a146100465780638da5cb5b14610062578063e30c397814610080575b600080fd5b610060600480360381019061005b9190610100565b61009e565b005b61006a6100a1565b6040516100779190610138565b60405180910390f35b6100886100c5565b6040516100959190610138565b60405180910390f35b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000813590506100fa8161018f565b92915050565b60006020828403121561011257600080fd5b6000610120848285016100eb565b91505092915050565b61013281610153565b82525050565b600060208201905061014d6000830184610129565b92915050565b600061015e8261016f565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b61019881610165565b81146101a357600080fd5b5056fea26469706673582212207d55c8217b2d159725a1f041caa8c832b858c652546126311100ecd55652576364736f6c634300060c0033";

export class BoringOwnableData__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BoringOwnableData> {
    return super.deploy(overrides || {}) as Promise<BoringOwnableData>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BoringOwnableData {
    return super.attach(address) as BoringOwnableData;
  }
  connect(signer: Signer): BoringOwnableData__factory {
    return super.connect(signer) as BoringOwnableData__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BoringOwnableDataInterface {
    return new utils.Interface(_abi) as BoringOwnableDataInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BoringOwnableData {
    return new Contract(address, _abi, signerOrProvider) as BoringOwnableData;
  }
}
