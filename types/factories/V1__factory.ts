/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { V1, V1Interface } from "../V1";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "manager_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "BURNER_ROLE",
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
    name: "MINTER_ROLE",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "vaultId_",
        type: "uint256",
      },
    ],
    name: "burnFromVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
    ],
    name: "exists",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "manager_",
        type: "address",
      },
    ],
    name: "setManager",
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
  {
    inputs: [],
    name: "symbol",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
  {
    inputs: [
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002c1738038062002c1783398101604081905262000034916200029a565b604080518082018252600a8152694d54525661756c74563160b01b6020808301918252835180850190945260058452644d5452563160d81b9084015281519192916200008391600091620001f4565b50805162000099906001906020840190620001f4565b50620000ab9150600090503362000140565b620000c660008051602062002bf78339815191523362000140565b600754620000ee9060008051602062002bf7833981519152906001600160a01b031662000140565b6200011a7f3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a8483362000140565b600780546001600160a01b0319166001600160a01b039290921691909117905562000309565b6200014c828262000150565b5050565b60008281526006602090815260408083206001600160a01b038516845290915290205460ff166200014c5760008281526006602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620001b03390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b8280546200020290620002cc565b90600052602060002090601f01602090048101928262000226576000855562000271565b82601f106200024157805160ff191683800117855562000271565b8280016001018555821562000271579182015b828111156200027157825182559160200191906001019062000254565b506200027f92915062000283565b5090565b5b808211156200027f576000815560010162000284565b600060208284031215620002ad57600080fd5b81516001600160a01b0381168114620002c557600080fd5b9392505050565b600181811c90821680620002e157607f821691505b602082108114156200030357634e487b7160e01b600052602260045260246000fd5b50919050565b6128de80620003196000396000f3fe608060405234801561001057600080fd5b50600436106101ae5760003560e01c80636352211e116100ee578063a9c6325811610097578063d0ebdbe711610071578063d0ebdbe7146103e2578063d5391393146103f5578063d547741f1461041c578063e985e9c51461042f57600080fd5b8063a9c63258146103a9578063b88d4fde146103bc578063c87b56dd146103cf57600080fd5b806395d89b41116100c857806395d89b4114610386578063a217fddf1461038e578063a22cb4651461039657600080fd5b80636352211e1461031a57806370a082311461032d57806391d148541461034057600080fd5b8063282c51f31161015b57806340c10f191161013557806340c10f19146102ce57806342842e0e146102e157806342966c68146102f45780634f558e791461030757600080fd5b8063282c51f3146102815780632f2ff15d146102a857806336568abe146102bb57600080fd5b8063095ea7b31161018c578063095ea7b31461022857806323b872dd1461023d578063248a9ca31461025057600080fd5b806301ffc9a7146101b357806306fdde03146101db578063081812fc146101f0575b600080fd5b6101c66101c136600461248a565b610478565b60405190151581526020015b60405180910390f35b6101e3610489565b6040516101d29190612607565b6102036101fe36600461244c565b61051b565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101d2565b61023b610236366004612420565b6105fa565b005b61023b61024b3660046122ae565b610787565b61027361025e36600461244c565b60009081526006602052604090206001015490565b6040519081526020016101d2565b6102737f3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a84881565b61023b6102b6366004612465565b610828565b61023b6102c9366004612465565b61084e565b61023b6102dc366004612420565b610901565b61023b6102ef3660046122ae565b6109a3565b61023b61030236600461244c565b6109be565b6101c661031536600461244c565b610a7f565b61020361032836600461244c565b610aab565b61027361033b36600461223b565b610b5d565b6101c661034e366004612465565b600091825260066020908152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205460ff1690565b6101e3610c2b565b610273600081565b61023b6103a43660046123ed565b610c3a565b61023b6103b736600461244c565b610d51565b61023b6103ca3660046122ef565b610e75565b6101e36103dd36600461244c565b610f1d565b61023b6103f036600461223b565b61103a565b6102737f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61023b61042a366004612465565b61113e565b6101c661043d366004612275565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260056020908152604080832093909416825291909152205460ff1690565b600061048382611164565b92915050565b606060008054610498906126fb565b80601f01602080910402602001604051908101604052809291908181526020018280546104c4906126fb565b80156105115780601f106104e657610100808354040283529160200191610511565b820191906000526020600020905b8154815290600101906020018083116104f457829003601f168201915b5050505050905090565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff166105d1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084015b60405180910390fd5b5060009081526004602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b600061060582610aab565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156106c3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084016105c8565b3373ffffffffffffffffffffffffffffffffffffffff821614806106ec57506106ec813361043d565b610778576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016105c8565b61078283836111ba565b505050565b610791338261125a565b61081d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016105c8565b6107828383836113ca565b6000828152600660205260409020600101546108448133611631565b6107828383611703565b73ffffffffffffffffffffffffffffffffffffffff811633146108f3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084016105c8565b6108fd82826117f7565b5050565b3360009081527f3195c024b2ddd6d9b8f6c836aa52f67fe69376c8903d009b80229b3ce4425f51602052604090205460ff16610999576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f4d545256313a2043616c6c6572206973206e6f742061206d696e74657200000060448201526064016105c8565b6108fd82826118b2565b61078283838360405180602001604052806000815250610e75565b6109e87f3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a8483361034e565b610a73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4d545256313a206d7573742068617665206275726e657220726f6c6520746f2060448201527f6275726e0000000000000000000000000000000000000000000000000000000060648201526084016105c8565b610a7c81611a74565b50565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff161515610483565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff1680610483576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e000000000000000000000000000000000000000000000060648201526084016105c8565b600073ffffffffffffffffffffffffffffffffffffffff8216610c02576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f20616464726573730000000000000000000000000000000000000000000060648201526084016105c8565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b606060018054610498906126fb565b73ffffffffffffffffffffffffffffffffffffffff8216331415610cba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016105c8565b33600081815260056020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b336007546040517f9403b6340000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff9283169290911690639403b6349060240160206040518083038186803b158015610dc057600080fd5b505afa158015610dd4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df89190612258565b73ffffffffffffffffffffffffffffffffffffffff1614610a73576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f4d545256313a2043616c6c6572206973206e6f74207661756c7400000000000060448201526064016105c8565b610e7f338361125a565b610f0b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016105c8565b610f1784848484611b41565b50505050565b60008181526002602052604090205460609073ffffffffffffffffffffffffffffffffffffffff16610fd1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e000000000000000000000000000000000060648201526084016105c8565b6000610fe860408051602081019091526000815290565b905060008151116110085760405180602001604052806000815250611033565b8061101284611be4565b60405160200161102392919061250e565b6040516020818303038152906040525b9392505050565b3360009081527f54cdd369e4e8a8515e52ca72ec816c2101831ad1f18bf44102ed171459c9b4f8602052604090205460ff166110f7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4d545256313a2043616c6c6572206973206e6f7420612064656661756c74206160448201527f646d696e0000000000000000000000000000000000000000000000000000000060648201526084016105c8565b600780547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60008281526006602052604090206001015461115a8133611631565b61078283836117f7565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b000000000000000000000000000000000000000000000000000000001480610483575061048382611d16565b600081815260046020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8416908117909155819061121482610aab565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff1661130b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084016105c8565b600061131683610aab565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061138557508373ffffffffffffffffffffffffffffffffffffffff1661136d8461051b565b73ffffffffffffffffffffffffffffffffffffffff16145b806113c2575073ffffffffffffffffffffffffffffffffffffffff80821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b8273ffffffffffffffffffffffffffffffffffffffff166113ea82610aab565b73ffffffffffffffffffffffffffffffffffffffff161461148d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201527f73206e6f74206f776e000000000000000000000000000000000000000000000060648201526084016105c8565b73ffffffffffffffffffffffffffffffffffffffff821661152f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016105c8565b61153a6000826111ba565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600360205260408120805460019290611570908490612683565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526003602052604081208054600192906115ab90849061261a565b909155505060008181526002602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff86811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600082815260066020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff166108fd576116898173ffffffffffffffffffffffffffffffffffffffff166014611df9565b611694836020611df9565b6040516020016116a592919061253d565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f08c379a00000000000000000000000000000000000000000000000000000000082526105c891600401612607565b600082815260066020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff166108fd57600082815260066020908152604080832073ffffffffffffffffffffffffffffffffffffffff85168452909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556117993390565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600082815260066020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16156108fd57600082815260066020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b73ffffffffffffffffffffffffffffffffffffffff821661192f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016105c8565b60008181526002602052604090205473ffffffffffffffffffffffffffffffffffffffff16156119bb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016105c8565b73ffffffffffffffffffffffffffffffffffffffff821660009081526003602052604081208054600192906119f190849061261a565b909155505060008181526002602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000611a7f82610aab565b9050611a8c6000836111ba565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600360205260408120805460019290611ac2908490612683565b909155505060008281526002602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690555183919073ffffffffffffffffffffffffffffffffffffffff8416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b611b4c8484846113ca565b611b588484848461203c565b610f17576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016105c8565b606081611c2457505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115611c4e5780611c388161274f565b9150611c479050600a83612632565b9150611c28565b60008167ffffffffffffffff811115611c6957611c69612829565b6040519080825280601f01601f191660200182016040528015611c93576020820181803683370190505b5090505b84156113c257611ca8600183612683565b9150611cb5600a86612788565b611cc090603061261a565b60f81b818381518110611cd557611cd56127fa565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611d0f600a86612632565b9450611c97565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd000000000000000000000000000000000000000000000000000000001480611da957507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061048357507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610483565b60606000611e08836002612646565b611e1390600261261a565b67ffffffffffffffff811115611e2b57611e2b612829565b6040519080825280601f01601f191660200182016040528015611e55576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110611e8c57611e8c6127fa565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110611eef57611eef6127fa565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000611f2b846002612646565b611f3690600161261a565b90505b6001811115611fd3577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110611f7757611f776127fa565b1a60f81b828281518110611f8d57611f8d6127fa565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c93611fcc816126c6565b9050611f39565b508315611033576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016105c8565b600073ffffffffffffffffffffffffffffffffffffffff84163b15612230576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063150b7a02906120b39033908990889088906004016125be565b602060405180830381600087803b1580156120cd57600080fd5b505af192505050801561211b575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252612118918101906124a7565b60015b6121e5573d808015612149576040519150601f19603f3d011682016040523d82523d6000602084013e61214e565b606091505b5080516121dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016105c8565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a02000000000000000000000000000000000000000000000000000000001490506113c2565b506001949350505050565b60006020828403121561224d57600080fd5b813561103381612858565b60006020828403121561226a57600080fd5b815161103381612858565b6000806040838503121561228857600080fd5b823561229381612858565b915060208301356122a381612858565b809150509250929050565b6000806000606084860312156122c357600080fd5b83356122ce81612858565b925060208401356122de81612858565b929592945050506040919091013590565b6000806000806080858703121561230557600080fd5b843561231081612858565b9350602085013561232081612858565b925060408501359150606085013567ffffffffffffffff8082111561234457600080fd5b818701915087601f83011261235857600080fd5b81358181111561236a5761236a612829565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156123b0576123b0612829565b816040528281528a60208487010111156123c957600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561240057600080fd5b823561240b81612858565b9150602083013580151581146122a357600080fd5b6000806040838503121561243357600080fd5b823561243e81612858565b946020939093013593505050565b60006020828403121561245e57600080fd5b5035919050565b6000806040838503121561247857600080fd5b8235915060208301356122a381612858565b60006020828403121561249c57600080fd5b81356110338161287a565b6000602082840312156124b957600080fd5b81516110338161287a565b600081518084526124dc81602086016020860161269a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000835161252081846020880161269a565b83519083019061253481836020880161269a565b01949350505050565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161257581601785016020880161269a565b7f206973206d697373696e6720726f6c652000000000000000000000000000000060179184019182015283516125b281602884016020880161269a565b01602801949350505050565b600073ffffffffffffffffffffffffffffffffffffffff8087168352808616602084015250836040830152608060608301526125fd60808301846124c4565b9695505050505050565b60208152600061103360208301846124c4565b6000821982111561262d5761262d61279c565b500190565b600082612641576126416127cb565b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561267e5761267e61279c565b500290565b6000828210156126955761269561279c565b500390565b60005b838110156126b557818101518382015260200161269d565b83811115610f175750506000910152565b6000816126d5576126d561279c565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b600181811c9082168061270f57607f821691505b60208210811415612749577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156127815761278161279c565b5060010190565b600082612797576127976127cb565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff81168114610a7c57600080fd5b7fffffffff0000000000000000000000000000000000000000000000000000000081168114610a7c57600080fdfea2646970667358221220b0aec86b4bbc8483739d9cb6eed25e7a8ed370b7bdd53f7470eb958fdfa9c9b764736f6c634300080700339f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";

export class V1__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    manager_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<V1> {
    return super.deploy(manager_, overrides || {}) as Promise<V1>;
  }
  getDeployTransaction(
    manager_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(manager_, overrides || {});
  }
  attach(address: string): V1 {
    return super.attach(address) as V1;
  }
  connect(signer: Signer): V1__factory {
    return super.connect(signer) as V1__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): V1Interface {
    return new utils.Interface(_abi) as V1Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): V1 {
    return new Contract(address, _abi, signerOrProvider) as V1;
  }
}
