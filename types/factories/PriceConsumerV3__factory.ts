/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PriceConsumerV3,
  PriceConsumerV3Interface,
} from "../PriceConsumerV3";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_aggregator",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0x6fab7d2a",
        type: "bytes32",
      },
    ],
    name: "c_0x6fab7d2a",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getThePrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000b0238038062000b028339818101604052810190620000379190620002e4565b6200006b7f21747949e230dfddb5534e019d767054ea726fc74352aee93dbd2e8befa48edf60001b6200019c60201b60201c565b6200009f7ff4a1e8964b543f940cf9fb55dfa0d0d5ba807b608d14579996b0b1c50e52730060001b6200019c60201b60201c565b620000d37fd9eec9e60d658c8dbf63b9f579c35fba8ae0b48dcab27d40e7ef86eccfe25e0460001b6200019c60201b60201c565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620001477fdd64b54359bb13f782b29f70651d8deb313116160af1a1c145b885ed2487b60f60001b6200019c60201b60201c565b6200017b7fe103418a423bca3f39bf75aa1bdc480995ccb936672e1324d93beb570110f43d60001b6200019c60201b60201c565b8060019080519060200190620001939291906200019f565b5050506200051c565b50565b828054620001ad9062000413565b90600052602060002090601f016020900481019282620001d157600085556200021d565b82601f10620001ec57805160ff19168380011785556200021d565b828001600101855582156200021d579182015b828111156200021c578251825591602001919060010190620001ff565b5b5090506200022c919062000230565b5090565b5b808211156200024b57600081600090555060010162000231565b5090565b600062000266620002608462000373565b6200034a565b905082815260208101848484011115620002855762000284620004e2565b5b62000292848285620003dd565b509392505050565b600081519050620002ab8162000502565b92915050565b600082601f830112620002c957620002c8620004dd565b5b8151620002db8482602086016200024f565b91505092915050565b60008060408385031215620002fe57620002fd620004ec565b5b60006200030e858286016200029a565b925050602083015167ffffffffffffffff811115620003325762000331620004e7565b5b6200034085828601620002b1565b9150509250929050565b60006200035662000369565b905062000364828262000449565b919050565b6000604051905090565b600067ffffffffffffffff821115620003915762000390620004ae565b5b6200039c82620004f1565b9050602081019050919050565b6000620003b682620003bd565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b83811015620003fd578082015181840152602081019050620003e0565b838111156200040d576000848401525b50505050565b600060028204905060018216806200042c57607f821691505b602082108114156200044357620004426200047f565b5b50919050565b6200045482620004f1565b810181811067ffffffffffffffff82111715620004765762000475620004ae565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b6200050d81620003a9565b81146200051957600080fd5b50565b6105d6806200052c6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806306fdde03146100465780638c3c9a5514610064578063eca25acb14610082575b600080fd5b61004e61009e565b60405161005b9190610428565b60405180910390f35b61006c61012c565b604051610079919061040d565b60405180910390f35b61009c6004803603810190610097919061031d565b6102c6565b005b600180546100ab906104cd565b80601f01602080910402602001604051908101604052809291908181526020018280546100d7906104cd565b80156101245780601f106100f957610100808354040283529160200191610124565b820191906000526020600020905b81548152906001019060200180831161010757829003601f168201915b505050505081565b600061015a7f1d538d6ad5339952d2b3f989588486cf04552dfefe9804ad520a15bf866894c160001b6102c6565b6101867fd46b5605c1c385c98a358b6e7fe21e2f1170ed0a187f6425b62e08f8f8de0ff960001b6102c6565b6101b27f428931bddf9f912150c2a1bb27a39e8ffa87426f18ae21d0230f8055e8b11f4860001b6102c6565b60008060008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b15801561022157600080fd5b505afa158015610235573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610259919061034a565b9450945094509450945061028f7fc826fba19cfed914020e04fafa40d76434aca5117d48afd8b30d3c92ab9a518960001b6102c6565b6102bb7ffbcf7b8e2f0492e1ca85cbaa65ff613b28cfcdc184b25a0b9a1d5203f141f8ad60001b6102c6565b839550505050505090565b50565b6000813590506102d881610544565b92915050565b6000815190506102ed8161055b565b92915050565b60008151905061030281610572565b92915050565b60008151905061031781610589565b92915050565b6000602082840312156103335761033261052e565b5b6000610341848285016102c9565b91505092915050565b600080600080600060a086880312156103665761036561052e565b5b600061037488828901610308565b9550506020610385888289016102de565b9450506040610396888289016102f3565b93505060606103a7888289016102f3565b92505060806103b888828901610308565b9150509295509295909350565b6103ce81610470565b82525050565b60006103df8261044a565b6103e98185610455565b93506103f981856020860161049a565b61040281610533565b840191505092915050565b600060208201905061042260008301846103c5565b92915050565b6000602082019050818103600083015261044281846103d4565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050919050565b6000819050919050565b6000819050919050565b600069ffffffffffffffffffff82169050919050565b60005b838110156104b857808201518184015260208101905061049d565b838111156104c7576000848401525b50505050565b600060028204905060018216806104e557607f821691505b602082108114156104f9576104f86104ff565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b6000601f19601f8301169050919050565b61054d81610466565b811461055857600080fd5b50565b61056481610470565b811461056f57600080fd5b50565b61057b8161047a565b811461058657600080fd5b50565b61059281610484565b811461059d57600080fd5b5056fea26469706673582212202f9dd8b2d6c3d4dd4e9201d99987c779d1506eacc115b327e3ab390e5999ece464736f6c63430008070033";

export class PriceConsumerV3__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _aggregator: string,
    _name: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PriceConsumerV3> {
    return super.deploy(
      _aggregator,
      _name,
      overrides || {}
    ) as Promise<PriceConsumerV3>;
  }
  getDeployTransaction(
    _aggregator: string,
    _name: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_aggregator, _name, overrides || {});
  }
  attach(address: string): PriceConsumerV3 {
    return super.attach(address) as PriceConsumerV3;
  }
  connect(signer: Signer): PriceConsumerV3__factory {
    return super.connect(signer) as PriceConsumerV3__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PriceConsumerV3Interface {
    return new utils.Interface(_abi) as PriceConsumerV3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PriceConsumerV3 {
    return new Contract(address, _abi, signerOrProvider) as PriceConsumerV3;
  }
}
