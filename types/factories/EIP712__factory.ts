/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { EIP712, EIP712Interface } from "../EIP712";

const _abi = [
  {
    inputs: [],
    name: "EIP712_DOMAIN_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60aa610024600b82828239805160001a607314601757fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063c7977be7146038575b600080fd5b603e6050565b60408051918252519081900360200190f35b7f36c25de3e541d5d970f66e4210d728721220fff5c077cc6cd008b3a0c62adab78156fea26469706673582212208767c15f60a48ea197f46fda83d92a03e89e51ac7400c8aa1acc941797afcaa664736f6c634300060c0033";

export class EIP712__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EIP712> {
    return super.deploy(overrides || {}) as Promise<EIP712>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EIP712 {
    return super.attach(address) as EIP712;
  }
  connect(signer: Signer): EIP712__factory {
    return super.connect(signer) as EIP712__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EIP712Interface {
    return new utils.Interface(_abi) as EIP712Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): EIP712 {
    return new Contract(address, _abi, signerOrProvider) as EIP712;
  }
}
