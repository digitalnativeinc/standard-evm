/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  OracleRegistry,
  OracleRegistryInterface,
} from "../OracleRegistry";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "aggregator",
        type: "address",
      },
    ],
    name: "AggregatorAdded",
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
    inputs: [],
    name: "ORACLE_OPERATOR_ROLE",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "PriceFeeds",
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
        name: "asset_",
        type: "address",
      },
      {
        internalType: "address",
        name: "aggregator_",
        type: "address",
      },
    ],
    name: "addOracle",
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
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610d2d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c806391d1485411610076578063a217fddf1161005b578063a217fddf1461020a578063d547741f14610212578063f0ca4adb1461022557600080fd5b806391d148541461016b57806398d85b97146101af57600080fd5b8063248a9ca3116100a7578063248a9ca3146101205780632f2ff15d1461014357806336568abe1461015857600080fd5b806301ffc9a7146100c357806311d11a5b146100eb575b600080fd5b6100d66100d1366004610a9c565b610238565b60405190151581526020015b60405180910390f35b6101127ff9b712ed3cd0e90cdc9d1abac8fb677bf018af115fb294c768a96b48bd6922c581565b6040519081526020016100e2565b61011261012e366004610a60565b60009081526020819052604090206001015490565b610156610151366004610a79565b6102d1565b005b610156610166366004610a79565b6102fc565b6100d6610179366004610a79565b60009182526020828152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205460ff1690565b6101e56101bd366004610a12565b60016020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100e2565b610112600081565b610156610220366004610a79565b6103b4565b610156610233366004610a2d565b6103da565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b0000000000000000000000000000000000000000000000000000000014806102cb57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6000828152602081905260409020600101546102ed8133610528565b6102f783836105f8565b505050565b73ffffffffffffffffffffffffffffffffffffffff811633146103a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b6103b082826106e8565b5050565b6000828152602081905260409020600101546103d08133610528565b6102f783836106e8565b3360009081527f3b9d37337deb4997847cf5492088ced2ca506425960b62ede7e87d5aa6391a97602052604090205460ff16610498576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f4d657465723a2043616c6c6572206973206e6f7420616e204f7261636c65204f60448201527f70657261746f7200000000000000000000000000000000000000000000000000606482015260840161039d565b73ffffffffffffffffffffffffffffffffffffffff82811660008181526001602090815260409182902080547fffffffffffffffffffffffff000000000000000000000000000000000000000016948616948517905581519283528201929092527fd0fba1bf19483034d35babed2c54b89fb8cbe1fac33ac43b2a36d81be7c91e79910160405180910390a15050565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff166103b05761057e8173ffffffffffffffffffffffffffffffffffffffff16601461079f565b61058983602061079f565b60405160200161059a929190610ade565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f08c379a000000000000000000000000000000000000000000000000000000000825261039d91600401610b5f565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff166103b05760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff85168452909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905561068a3390565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16156103b05760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b606060006107ae836002610bc8565b6107b9906002610bb0565b67ffffffffffffffff8111156107d1576107d1610cc8565b6040519080825280601f01601f1916602001820160405280156107fb576020820181803683370190505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061083257610832610c99565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061089557610895610c99565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006108d1846002610bc8565b6108dc906001610bb0565b90505b6001811115610979577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061091d5761091d610c99565b1a60f81b82828151811061093357610933610c99565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c9361097281610c35565b90506108df565b5083156109e2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161039d565b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610a0d57600080fd5b919050565b600060208284031215610a2457600080fd5b6109e2826109e9565b60008060408385031215610a4057600080fd5b610a49836109e9565b9150610a57602084016109e9565b90509250929050565b600060208284031215610a7257600080fd5b5035919050565b60008060408385031215610a8c57600080fd5b82359150610a57602084016109e9565b600060208284031215610aae57600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146109e257600080fd5b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351610b16816017850160208801610c05565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351610b53816028840160208801610c05565b01602801949350505050565b6020815260008251806020840152610b7e816040850160208701610c05565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60008219821115610bc357610bc3610c6a565b500190565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610c0057610c00610c6a565b500290565b60005b83811015610c20578181015183820152602001610c08565b83811115610c2f576000848401525b50505050565b600081610c4457610c44610c6a565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea2646970667358221220ef94c0084683731e43ce066009d4b7e7a14fc54e06ebe2c693c54b4d9ac9686864736f6c63430008070033";

export class OracleRegistry__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OracleRegistry> {
    return super.deploy(overrides || {}) as Promise<OracleRegistry>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OracleRegistry {
    return super.attach(address) as OracleRegistry;
  }
  connect(signer: Signer): OracleRegistry__factory {
    return super.connect(signer) as OracleRegistry__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OracleRegistryInterface {
    return new utils.Interface(_abi) as OracleRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OracleRegistry {
    return new Contract(address, _abi, signerOrProvider) as OracleRegistry;
  }
}