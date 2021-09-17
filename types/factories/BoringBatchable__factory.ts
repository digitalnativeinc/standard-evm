/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BoringBatchable,
  BoringBatchableInterface,
} from "../BoringBatchable";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "calls",
        type: "bytes[]",
      },
      {
        internalType: "bool",
        name: "revertOnFail",
        type: "bool",
      },
    ],
    name: "batch",
    outputs: [
      {
        internalType: "bool[]",
        name: "successes",
        type: "bool[]",
      },
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permitToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061074f806100206000396000f3fe6080604052600436106100295760003560e01c80637c516e941461002e578063d2423b5114610050575b600080fd5b34801561003a57600080fd5b5061004e6100493660046103b5565b61007a565b005b61006361005e366004610331565b610114565b60405161007192919061059d565b60405180910390f35b6040517fd505accf00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff89169063d505accf906100d8908a908a908a908a908a908a908a9060040161054f565b600060405180830381600087803b1580156100f257600080fd5b505af1158015610106573d6000803e3d6000fd5b505050505050505050505050565b6060808367ffffffffffffffff8111801561012e57600080fd5b50604051908082528060200260200182016040528015610158578160200160208202803683370190505b5091508367ffffffffffffffff8111801561017257600080fd5b506040519080825280602002602001820160405280156101a657816020015b60608152602001906001900390816101915790505b50905060005b848110156102c05760006060308888858181106101c557fe5b90506020028101906101d79190610651565b6040516101e592919061053f565b600060405180830381855af49150503d8060008114610220576040519150601f19603f3d011682016040523d82523d6000602084013e610225565b606091505b50915091508180610234575085155b61023d826102c9565b9061027e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102759190610637565b60405180910390fd5b508185848151811061028c57fe5b602002602001019015159081151581525050808484815181106102ab57fe5b602090810291909101015250506001016101ac565b50935093915050565b606060448251101561030f575060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015261032c565b60048201915081806020019051810190610329919061043c565b90505b919050565b600080600060408486031215610345578283fd5b833567ffffffffffffffff8082111561035c578485fd5b818601915086601f83011261036f578485fd5b81358181111561037d578586fd5b8760208083028501011115610390578586fd5b6020928301955093505084013580151581146103aa578182fd5b809150509250925092565b600080600080600080600080610100898b0312156103d1578384fd5b88356103dc816106f4565b975060208901356103ec816106f4565b965060408901356103fc816106f4565b9550606089013594506080890135935060a089013560ff8116811461041f578384fd5b979a969950949793969295929450505060c08201359160e0013590565b60006020828403121561044d578081fd5b815167ffffffffffffffff80821115610464578283fd5b818401915084601f830112610477578283fd5b815181811115610485578384fd5b60405160207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011682010181811084821117156104c3578586fd5b6040528181528382016020018710156104da578485fd5b6104eb8260208301602087016106c4565b9695505050505050565b6000815180845261050d8160208601602086016106c4565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000828483379101908152919050565b73ffffffffffffffffffffffffffffffffffffffff97881681529590961660208601526040850193909352606084019190915260ff16608083015260a082015260c081019190915260e00190565b604080825283519082018190526000906020906060840190828701845b828110156105d85781511515845292840192908401906001016105ba565b505050838103828501528085516105ef81846106bb565b91508192508381028201848801865b838110156106285785830385526106168383516104f5565b948701949250908601906001016105fe565b50909998505050505050505050565b60006020825261064a60208301846104f5565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112610685578283fd5b83018035915067ffffffffffffffff82111561069f578283fd5b6020019150368190038213156106b457600080fd5b9250929050565b90815260200190565b60005b838110156106df5781810151838201526020016106c7565b838111156106ee576000848401525b50505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461071657600080fd5b5056fea264697066735822122060faf25a8cb3cdc4008afc93a6f45527ae2782c605f38a079079ebb0bce2133f64736f6c634300060c0033";

export class BoringBatchable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BoringBatchable> {
    return super.deploy(overrides || {}) as Promise<BoringBatchable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BoringBatchable {
    return super.attach(address) as BoringBatchable;
  }
  connect(signer: Signer): BoringBatchable__factory {
    return super.connect(signer) as BoringBatchable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BoringBatchableInterface {
    return new utils.Interface(_abi) as BoringBatchableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BoringBatchable {
    return new Contract(address, _abi, signerOrProvider) as BoringBatchable;
  }
}
