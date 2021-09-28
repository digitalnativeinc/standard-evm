/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BoringOwnable, BoringOwnableInterface } from "../BoringOwnable";

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
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
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
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0x92719915",
        type: "bytes32",
      },
    ],
    name: "c_0x92719915",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "direct",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "renounce",
        type: "bool",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506100437f8565146e24a7010a3f34287321c272c84e3ab422ea1c334099d5a3653f5e38f360001b6101ab60201b60201c565b6100757fdec4d7c5cefc89abadd760612553be4efee72b0d022f6b92020809e59d09e4ed60001b6101ab60201b60201c565b6100a77fa254c0d73e3b040a3b4f5c552a7ac774d36d600d682f685a59586d604f5db29060001b6101ab60201b60201c565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506101197f6ff6663f3019811be2f4fe25abec5f76be844ccbc6ce3cb2c8b2192d00f32b8560001b6101ab60201b60201c565b61014b7fa995475c8cb93342240b0c53e467d45f30931eb195dbba40977b250b3586085b60001b6101ab60201b60201c565b3373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36101ae565b50565b610e4e806101bd6000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c80638da5cb5b116100505780638da5cb5b146100b9578063d34f2bef146100d7578063e30c3978146100f357610072565b8063078dfbe7146100775780634e71e0c8146100935780637d7d681a1461009d575b600080fd5b610091600480360381019061008c9190610bb8565b610111565b005b61009b610759565b005b6100b760048036038101906100b29190610c07565b610b29565b005b6100c1610b2c565b6040516100ce9190610cff565b60405180910390f35b6100f160048036038101906100ec9190610c07565b610b50565b005b6100fb610b53565b6040516101089190610cff565b60405180910390f35b61013d7f55bf923b455c8f51e48dddd5549d8942f40de0b8106aceeea07c06164a3add6960001b610b50565b6101697fa8cea1f4833bab922c2b1996b25fee8de49f9bc086997bbe1b8113b7f56c5bb760001b610b50565b6101957fc4be6c36659b63983eada52c1d776c963f232b5ed6cddd88dca1701100e197a360001b610b50565b6101c17ff3460bc6ffe92c3095e10addacd31007d74652192f931529df8ceedc0b9b07e160001b610b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461024f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024690610d3a565b60405180910390fd5b61027b7f4a355751ebfe155b0b20d1b2facb3f1460258d3ab08c3008225dbafa94ea878660001b610b50565b6102a77f720a062738a4373360deeb0e2706eac2a1d343900f2000410d8235c5286216c960001b610b50565b6102d37f7fec047d3c0e828b9077017e57114a1249f614460273039d77c86e0cea8633bd60001b610b50565b6102ff7f0ce3ae40db104c9f2ba21053d90c2b937e9ff0fc542374c823eba6cf78ea22e660001b610b50565b61032b7fc420a6b1598568089143414b29944dc814ad4097a250290896a1019b1f20525860001b610b50565b811561068e5761035d7f69a572b684cfc2aa0497dbf36862332ac21d39229e4f9784d70cb03096017f0560001b610b50565b6103897f157f18511e54e51132cb8d1a2a0dce5cc48f6d13d7c08aef15db4341db68a64360001b610b50565b6103b57fc6e7785d793ba454b9db9384a26a7830d5e8bdceebf63ab90a04843ba8f059ea60001b610b50565b6103e17f498f5d5675ac8f51e291061a7db967a332ac7a4e67afaed6bb0d54a355ac793c60001b610b50565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158061041a5750805b610459576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045090610d1a565b60405180910390fd5b6104857f091999483efe4455d534e2a858013f1228332166f42f46054ef0aa6f78ad504360001b610b50565b6104b17fb10095a518e149c3e0c1401641f51ad9f7b12635d58ed8b92f646e195b5e34ac60001b610b50565b6104dd7f7da0686cb7e1e2115ed3515e2ac699611df2ccce15fc7db897b335210de77f5c60001b610b50565b8273ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36105837f10017a5e4d88f0ae68f8750c0687f0e8a1f48fa256376fca3feb78c24ae25dcb60001b610b50565b6105af7f1f1810f2f0a8bc79d77fe3447f7ee388516c5936fc83178da6a55553bcbf47bf60001b610b50565b826000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061061b7fa4fe3406596ed4b525ae29259f552175638c0687611b89c3ca1f931fc9b9459960001b610b50565b6106477f821ec4142f096266798f886ed07559b6474178e380c4f240f0ddbae73f7e230660001b610b50565b6000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610754565b6106ba7fdb757ff8637ae9dfa0128ee28637e3b9f1eaa63916f407c8f2a4ff744b8e024860001b610b50565b6106e67f90fae01cf97140511322b15556bb2b4ef148b26eb6296f81d86f8fc5cbef8eaa60001b610b50565b6107127f2b7666c96177ba1794d15126352dd0fc76b3059a1fbce824f0c11a5c419b833c60001b610b50565b82600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b505050565b6107857fdd9040d80c6babebecb31608c2cf76560e7bcbf13f9143d763ad085eff99410d60001b610b50565b6107b17ff3e2be4eb1f34880fb4267644112281cf161ed1ef6e24fb790789f2e86ebb02460001b610b50565b6107dd7f52657fa9a507f1108ef5223bb498220b2e8996ed0f5e8fa6d5b42f607f0c291760001b610b50565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506108307f94b0734855fb4ba968851e97964c49cab0d2e68b1cd3b5269042797bca3a0bf660001b610b50565b61085c7f77dbaf7d44754ed3b45e35f1af98bf2f7de33a6dcd5f7868e4e6d589b3f3b29060001b610b50565b6108887f3417727118a9ad24811d4e408f6656f2b04374431182ab935e45d194f63aae9760001b610b50565b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ed90610d5a565b60405180910390fd5b6109227f055d05b196a5b4d02c774d75a4aa025274b24241bb7a31f7ab7b5135eb2ced5060001b610b50565b61094e7f4f89390ac16957909af0166bced9df1b15b3d77ea3e8c8c792e91321ae668b2e60001b610b50565b61097a7fb5b034c922b36223b64457dda6ed33164d1ee909bb57b9a3a50a77c4297a1b5e60001b610b50565b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3610a207f1d5752f6a44d39a6b9c9317c1fe245b9dce20eb5d1120277449aa48213aef79260001b610b50565b610a4c7f08fce35d3b14c8dcd8b661dd54fe355a215f3345c0075beae2cc574238d47a8360001b610b50565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610ab87f45e03df2042d58989af6691ae64101b85a135db0091913ab7639de23d24964be60001b610b50565b610ae47f0522385dc240d443b3acee3eadef216ee526e1caff8828b020662d507dc4e99160001b610b50565b6000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600081359050610b8881610dd3565b92915050565b600081359050610b9d81610dea565b92915050565b600081359050610bb281610e01565b92915050565b600080600060608486031215610bcd57600080fd5b6000610bdb86828701610b79565b9350506020610bec86828701610b8e565b9250506040610bfd86828701610b8e565b9150509250925092565b600060208284031215610c1957600080fd5b6000610c2784828501610ba3565b91505092915050565b610c3981610d8b565b82525050565b6000610c4c601583610d7a565b91507f4f776e61626c653a207a65726f206164647265737300000000000000000000006000830152602082019050919050565b6000610c8c602083610d7a565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b6000610ccc602083610d7a565b91507f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726000830152602082019050919050565b6000602082019050610d146000830184610c30565b92915050565b60006020820190508181036000830152610d3381610c3f565b9050919050565b60006020820190508181036000830152610d5381610c7f565b9050919050565b60006020820190508181036000830152610d7381610cbf565b9050919050565b600082825260208201905092915050565b6000610d9682610db3565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b610ddc81610d8b565b8114610de757600080fd5b50565b610df381610d9d565b8114610dfe57600080fd5b50565b610e0a81610da9565b8114610e1557600080fd5b5056fea2646970667358221220c0e76a80fc78f29303b277d84e2fe3bca6b6aa89054b4d52b839ba9e2d7e6a1a64736f6c634300060c0033";

export class BoringOwnable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BoringOwnable> {
    return super.deploy(overrides || {}) as Promise<BoringOwnable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BoringOwnable {
    return super.attach(address) as BoringOwnable;
  }
  connect(signer: Signer): BoringOwnable__factory {
    return super.connect(signer) as BoringOwnable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BoringOwnableInterface {
    return new utils.Interface(_abi) as BoringOwnableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BoringOwnable {
    return new Contract(address, _abi, signerOrProvider) as BoringOwnable;
  }
}
