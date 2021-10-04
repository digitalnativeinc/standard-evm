/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AccessControlMixin,
  AccessControlMixinInterface,
} from "../AccessControlMixin";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610718806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806391d148541161005b57806391d1485414610155578063a217fddf14610195578063ca15c8731461019d578063d547741f146101ba57610088565b8063248a9ca31461008d5780632f2ff15d146100bc57806336568abe146100ea5780639010d07c14610116575b600080fd5b6100aa600480360360208110156100a357600080fd5b50356101e6565b60408051918252519081900360200190f35b6100e8600480360360408110156100d257600080fd5b50803590602001356001600160a01b03166101fb565b005b6100e86004803603604081101561010057600080fd5b50803590602001356001600160a01b0316610267565b6101396004803603604081101561012c57600080fd5b50803590602001356102c8565b604080516001600160a01b039092168252519081900360200190f35b6101816004803603604081101561016b57600080fd5b50803590602001356001600160a01b03166102e9565b604080519115158252519081900360200190f35b6100aa610301565b6100aa600480360360208110156101b357600080fd5b5035610306565b6100e8600480360360408110156101d057600080fd5b50803590602001356001600160a01b031661031d565b60009081526020819052604090206002015490565b60008281526020819052604090206002015461021e90610219610376565b6102e9565b6102595760405162461bcd60e51b815260040180806020018281038252602f815260200180610655602f913960400191505060405180910390fd5b610263828261037a565b5050565b61026f610376565b6001600160a01b0316816001600160a01b0316146102be5760405162461bcd60e51b815260040180806020018281038252602f8152602001806106b4602f913960400191505060405180910390fd5b61026382826103e3565b60008281526020819052604081206102e0908361044c565b90505b92915050565b60008281526020819052604081206102e09083610458565b600081565b60008181526020819052604081206102e39061046d565b60008281526020819052604090206002015461033b90610219610376565b6102be5760405162461bcd60e51b81526004018080602001828103825260308152602001806106846030913960400191505060405180910390fd5b3390565b60008281526020819052604090206103929082610478565b156102635761039f610376565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008281526020819052604090206103fb908261048d565b1561026357610408610376565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b60006102e083836104a2565b60006102e0836001600160a01b038416610506565b60006102e38261051e565b60006102e0836001600160a01b038416610522565b60006102e0836001600160a01b03841661056c565b815460009082106104e45760405162461bcd60e51b81526004018080602001828103825260228152602001806106336022913960400191505060405180910390fd5b8260000182815481106104f357fe5b9060005260206000200154905092915050565b60009081526001919091016020526040902054151590565b5490565b600061052e8383610506565b610564575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556102e3565b5060006102e3565b60008181526001830160205260408120548015610628578354600019808301919081019060009087908390811061059f57fe5b90600052602060002001549050808760000184815481106105bc57fe5b6000918252602080832090910192909255828152600189810190925260409020908401905586548790806105ec57fe5b600190038181906000526020600020016000905590558660010160008781526020019081526020016000206000905560019450505050506102e3565b60009150506102e356fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e6473416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f206772616e74416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f207265766f6b65416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c66a2646970667358221220e1273bd73a3ca177ef1734a23bb9c27b0c41fb2d0e2df94ba40e05b6af0410d464736f6c634300060c0033";

export class AccessControlMixin__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AccessControlMixin> {
    return super.deploy(overrides || {}) as Promise<AccessControlMixin>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AccessControlMixin {
    return super.attach(address) as AccessControlMixin;
  }
  connect(signer: Signer): AccessControlMixin__factory {
    return super.connect(signer) as AccessControlMixin__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccessControlMixinInterface {
    return new utils.Interface(_abi) as AccessControlMixinInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AccessControlMixin {
    return new Contract(address, _abi, signerOrProvider) as AccessControlMixin;
  }
}
