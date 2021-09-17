/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Vault, VaultInterface } from "../Vault";

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
        indexed: false,
        internalType: "uint256",
        name: "vaultID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Borrow",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "vault",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "closingFee",
        type: "uint256",
      },
    ],
    name: "CloseVault",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "vaultID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "DepositCollateral",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "vault",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "collateral",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Liquidated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "vaultID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "paybackFee",
        type: "uint256",
      },
    ],
    name: "PayBack",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "vaultID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WithdrawCollateral",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "closeVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "depositCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositCollateralNative",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getDebt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collateral_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "vaultId_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "cAggregator_",
        type: "address",
      },
      {
        internalType: "address",
        name: "dAggregator_",
        type: "address",
      },
      {
        internalType: "address",
        name: "v1_",
        type: "address",
      },
      {
        internalType: "address",
        name: "debt_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "v2Factory_",
        type: "address",
      },
      {
        internalType: "address",
        name: "weth_",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "payDebt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "withdrawCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "withdrawCollateralNative",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600680546001600160a01b0319163317905542600c55612e7d806100366000396000f3fe6080604052600436106100955760003560e01c8063360c32881161006957806394d6361f1161004e57806394d6361f14610140578063bad4a01f14610160578063fd6494241461018057600080fd5b8063360c3288146101005780636112fe2e1461012057600080fd5b80624702571461009a57806314a6bf0f146100a457806316fc3297146100cb57806328a07025146100eb575b600080fd5b6100a2610193565b005b3480156100b057600080fd5b506100b9610462565b60405190815260200160405180910390f35b3480156100d757600080fd5b506100a26100e6366004612bdd565b61047e565b3480156100f757600080fd5b506100a2610937565b34801561010c57600080fd5b506100a261011b366004612bdd565b6110e6565b34801561012c57600080fd5b506100a261013b366004612bdd565b6115b1565b34801561014c57600080fd5b506100a261015b366004612af8565b611ae3565b34801561016c57600080fd5b506100a261017b366004612bdd565b611c10565b6100a261018e366004612bdd565b611eb5565b600854600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9092169182179055600a546040517f6352211e000000000000000000000000000000000000000000000000000000008152339291636352211e9161021c919060040190815260200190565b60206040518083038186803b15801561023457600080fd5b505afa158015610248573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061026c9190612ad4565b73ffffffffffffffffffffffffffffffffffffffff16146102ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f5661756c743a205661756c74206973206e6f74206f776e656420627920796f7560448201526064015b60405180910390fd5b600e5460095473ffffffffffffffffffffffffffffffffffffffff90811691161461039b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f5661756c743a20636f6c6c61746572616c206973206e6f742061206e6174697660448201527f652061737365740000000000000000000000000000000000000000000000000060648201526084016102e5565b600e60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b15801561040557600080fd5b505af1158015610419573d6000803e3d6000fd5b5050600a54604080519182523460208301527f52c4e7127ec34e8fc95f09ce2d06b4f00acca12ccbcdfb246ef67ee6aefe068d94500191506104589050565b60405180910390a1565b6000600b5461046f6122a2565b6104799190612bf6565b905090565b600854600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9092169182179055600a546040517f6352211e000000000000000000000000000000000000000000000000000000008152339291636352211e91610507919060040190815260200190565b60206040518083038186803b15801561051f57600080fd5b505afa158015610533573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105579190612ad4565b73ffffffffffffffffffffffffffffffffffffffff16146105d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f5661756c743a205661756c74206973206e6f74206f776e656420627920796f7560448201526064016102e5565b60006105de6122a2565b905081610647576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f5661756c743a20616d6f756e74206973207a65726f000000000000000000000060448201526064016102e5565b6007546040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810184905273ffffffffffffffffffffffffffffffffffffffff909116906323b872dd90606401602060405180830381600087803b1580156106bf57600080fd5b505af11580156106d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f79190612ba2565b610783576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f5661756c743a204d5452207472616e736665722066726f6d2073656e6465722060448201527f746f207661756c74206661696c6564000000000000000000000000000000000060648201526084016102e5565b600754600d546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201526024810184905291169063a9059cbb90604401602060405180830381600087803b1580156107f957600080fd5b505af115801561080d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108319190612ba2565b6108bd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f5661756c743a20466565207472616e736665722066726f6d207661756c74207460448201527f6f20706f6f6c206661696c65640000000000000000000000000000000000000060648201526084016102e5565b60006108c98284612dad565b90506108d4816123f8565b80600b60008282546108e69190612dad565b9091555050600a54600b5460408051928352602083019190915281018390527f8fe5a3395e27a84684663bcefa2a3c20526a567dd3cb1f215082a9dee43f18389060600160405180910390a1505050565b600480546005546009546040517f70a082310000000000000000000000000000000000000000000000000000000081523094810194909452610a939373ffffffffffffffffffffffffffffffffffffffff9384169392831692909116906370a082319060240160206040518083038186803b1580156109b557600080fd5b505afa1580156109c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ed9190612bc4565b6007546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a082319060240160206040518083038186803b158015610a5657600080fd5b505afa158015610a6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8e9190612bc4565b612485565b15610afa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f5661756c743a20506f736974696f6e206973207374696c6c207361666500000060448201526064016102e5565b6002546009546007546040517fe6a4390500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff92831660048201529082166024820152600092919091169063e6a439059060440160206040518083038186803b158015610b7757600080fd5b505afa158015610b8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610baf9190612ad4565b73ffffffffffffffffffffffffffffffffffffffff161415610c53576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f5661756c743a204c69717569646174696e672070616972206e6f74207375707060448201527f6f7274656400000000000000000000000000000000000000000000000000000060648201526084016102e5565b600254600954600754600092610c869273ffffffffffffffffffffffffffffffffffffffff918216929082169116612633565b6009546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015291925060009173ffffffffffffffffffffffffffffffffffffffff909116906370a082319060240160206040518083038186803b158015610cf557600080fd5b505afa158015610d09573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2d9190612bc4565b6006546009546040517fc9832ced00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015292935060009291169063c9832ced9060240160206040518083038186803b158015610da057600080fd5b505afa158015610db4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd89190612bc4565b905060006064610de88484612d70565b610df29190612c0e565b6009546040517fa9059cbb0000000000000000000000000000000000000000000000000000000081523360048201526024810183905291925073ffffffffffffffffffffffffffffffffffffffff169063a9059cbb90604401602060405180830381600087803b158015610e6557600080fd5b505af1158015610e79573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e9d9190612ba2565b610f29576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603c60248201527f5661756c743a206c69717569646174696f6e20666565207472616e736665722060448201527f7769746820636f6c6c61746572616c20746f6b656e206661696c65640000000060648201526084016102e5565b60095473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85610f528487612dad565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff90921660048301526024820152604401602060405180830381600087803b158015610fbd57600080fd5b505af1158015610fd1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ff59190612ba2565b611081576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f5661756c743a206c69717569646174696f6e207769746820636f6c6c6174657260448201527f616c20746f6b656e206661696c6564000000000000000000000000000000000060648201526084016102e5565b611089612768565b6009546040805130815273ffffffffffffffffffffffffffffffffffffffff909216602083015281018490527fde0aa27286f5cb3a4ed853dc4823ead62d63e92cdf13de09d6aece56970721a4906060015b60405180910390a133ff5b600854600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9092169182179055600a546040517f6352211e000000000000000000000000000000000000000000000000000000008152339291636352211e9161116f919060040190815260200190565b60206040518083038186803b15801561118757600080fd5b505afa15801561119b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111bf9190612ad4565b73ffffffffffffffffffffffffffffffffffffffff161461123c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f5661756c743a205661756c74206973206e6f74206f776e656420627920796f7560448201526064016102e5565b60006112466122a2565b905081600b54826112579190612bf6565b146112e3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f5661756c743a206e6f7420656e6f7567682062616c616e636520746f2070617960448201527f6261636b0000000000000000000000000000000000000000000000000000000060648201526084016102e5565b6007546040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810184905273ffffffffffffffffffffffffffffffffffffffff909116906323b872dd90606401602060405180830381600087803b15801561135b57600080fd5b505af115801561136f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113939190612ba2565b61141f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f5661756c743a204d5452207472616e736665722066726f6d2073656e6465722060448201527f746f207661756c74206661696c6564000000000000000000000000000000000060648201526084016102e5565b600754600d546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201526024810184905291169063a9059cbb90604401602060405180830381600087803b15801561149557600080fd5b505af11580156114a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114cd9190612ba2565b611559576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f5661756c743a20466565207472616e736665722066726f6d207661756c74207460448201527f6f20706f6f6c206661696c65640000000000000000000000000000000000000060648201526084016102e5565b61156b6115668284612dad565b6123f8565b611573612768565b60408051308152602081018490529081018290527fe6539f994c6073a963b4cc10a9af8e049d1f22f8d81e57e730b1cc3e74694a16906060016110db565b600854600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9092169182179055600a546040517f6352211e000000000000000000000000000000000000000000000000000000008152339291636352211e9161163a919060040190815260200190565b60206040518083038186803b15801561165257600080fd5b505afa158015611666573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061168a9190612ad4565b73ffffffffffffffffffffffffffffffffffffffff1614611707576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f5661756c743a205661756c74206973206e6f74206f776e656420627920796f7560448201526064016102e5565b6009546040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152829173ffffffffffffffffffffffffffffffffffffffff16906370a082319060240160206040518083038186803b15801561177057600080fd5b505afa158015611784573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117a89190612bc4565b1015611810576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f5661756c743a204e6f7420656e6f75676820636f6c6c61746572616c0000000060448201526064016102e5565b600b541561196d57600480546005546009546040517f70a0823100000000000000000000000000000000000000000000000000000000815230948101949094526118e19373ffffffffffffffffffffffffffffffffffffffff9384169392831692869216906370a08231906024015b60206040518083038186803b15801561189757600080fd5b505afa1580156118ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118cf9190612bc4565b6118d99190612dad565b600b54612485565b61196d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603960248201527f5769746864726177616c20776f756c6420707574207661756c742062656c6f7760448201527f206d696e696d756d20636f6c6c61746572616c20726174696f0000000000000060648201526084016102e5565b6009546040517fa9059cbb0000000000000000000000000000000000000000000000000000000081523360048201526024810183905273ffffffffffffffffffffffffffffffffffffffff9091169063a9059cbb90604401602060405180830381600087803b1580156119df57600080fd5b505af11580156119f3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a179190612ba2565b611aa3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f5661756c743a205472616e7366657272696e6720636f6c6c61746572616c207760448201527f69746864726177616c206661696c65640000000000000000000000000000000060648201526084016102e5565b600a5460408051918252602082018390527f6c0ea3bea9dd66afa8f9d39d6eb93d833466190330813b42835efc650dca4cb991015b60405180910390a150565b60065473ffffffffffffffffffffffffffffffffffffffff163314611b64576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5661756c743a20464f5242494444454e0000000000000000000000000000000060448201526064016102e5565b600980547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff9b8c1617909155600a98909855600480548916978a16979097179096556005805488169589169590951790945560088054871693881693909317909255600780548616918716919091179055600b55600280548416918516919091179055600e80549092169216919091179055565b600854600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9092169182179055600a546040517f6352211e000000000000000000000000000000000000000000000000000000008152339291636352211e91611c99919060040190815260200190565b60206040518083038186803b158015611cb157600080fd5b505afa158015611cc5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ce99190612ad4565b73ffffffffffffffffffffffffffffffffffffffff1614611d66576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f5661756c743a205661756c74206973206e6f74206f776e656420627920796f7560448201526064016102e5565b6009546040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810183905273ffffffffffffffffffffffffffffffffffffffff909116906323b872dd90606401602060405180830381600087803b158015611dde57600080fd5b505af1158015611df2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e169190612ba2565b611e7c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f5661756c743a20436f6c6c61746572616c204465706f736974206661696c656460448201526064016102e5565b600a5460408051918252602082018390527f52c4e7127ec34e8fc95f09ce2d06b4f00acca12ccbcdfb246ef67ee6aefe068d9101611ad8565b600854600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9092169182179055600a546040517f6352211e000000000000000000000000000000000000000000000000000000008152339291636352211e91611f3e919060040190815260200190565b60206040518083038186803b158015611f5657600080fd5b505afa158015611f6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f8e9190612ad4565b73ffffffffffffffffffffffffffffffffffffffff161461200b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f5661756c743a205661756c74206973206e6f74206f776e656420627920796f7560448201526064016102e5565b600e5460095473ffffffffffffffffffffffffffffffffffffffff9081169116146120b8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f5661756c743a20636f6c6c61746572616c206973206e6f742061206e6174697660448201527f652061737365740000000000000000000000000000000000000000000000000060648201526084016102e5565b600b54156121b757600480546005546009546040517f70a08231000000000000000000000000000000000000000000000000000000008152309481019490945261212b9373ffffffffffffffffffffffffffffffffffffffff9384169392831692869216906370a082319060240161187f565b6121b7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603960248201527f5769746864726177616c20776f756c6420707574207661756c742062656c6f7760448201527f206d696e696d756d20636f6c6c61746572616c20726174696f0000000000000060648201526084016102e5565b600e546040517f2e1a7d4d0000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690632e1a7d4d90602401600060405180830381600087803b15801561222357600080fd5b505af1158015612237573d6000803e3d6000fd5b50506040513392504780156108fc029250906000818181858888f19350505050158015612268573d6000803e3d6000fd5b50600a5460408051918252602082018390527f6c0ea3bea9dd66afa8f9d39d6eb93d833466190330813b42835efc650dca4cb99101611ad8565b600554600b5460009182916122cd9173ffffffffffffffffffffffffffffffffffffffff16906127f7565b6006546009546040517f0597d55d00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9182166004820152929350600092911690630597d55d9060240160206040518083038186803b15801561234057600080fd5b505afa158015612354573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123789190612bc4565b905060006123868383612d70565b90506000601e6018603c80600c544261239f9190612dad565b6123a99190612c0e565b6123b39190612c0e565b6123bd9190612c0e565b6123c79190612c0e565b9050838210156123d9576123d9612dc4565b806123e5606484612c0e565b6123ef9190612d70565b94505050505090565b6007546040517f79cc67900000000000000000000000000000000000000000000000000000000081523360048201526024810183905273ffffffffffffffffffffffffffffffffffffffff909116906379cc679090604401600060405180830381600087803b15801561246a57600080fd5b505af115801561247e573d6000803e3d6000fd5b5050505050565b60008060006124968787878761283a565b6006546009546040517fd320f37a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015293955091935060009291169063d320f37a9060240160206040518083038186803b15801561250c57600080fd5b505afa158015612520573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125449190612bc4565b6006546009546040517f3ab33ec000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9182166004820152929350600092911690633ab33ec09060240160206040518083038186803b1580156125b757600080fd5b505afa1580156125cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125ef9190612bc4565b905060006125fe82600a612caa565b6126089085612c0e565b90508015612622578261261b8287612c0e565b1015612625565b60015b9a9950505050505050505050565b60008060006126428585612886565b6040517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606084811b8216602084015283901b16603482015291935091508690604801604051602081830303815290604052805190602001206040516020016127289291907fff00000000000000000000000000000000000000000000000000000000000000815260609290921b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016600183015260158201527fe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303603582015260550190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905280516020909101209695505050505050565b600854600a546040517fa9c6325800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9092169163a9c63258916127c39160040190815260200190565b600060405180830381600087803b1580156127dd57600080fd5b505af11580156127f1573d6000803e3d6000fd5b50505050565b60008061280384612a0b565b90508061281257612812612dc4565b600061281e8483612d70565b90508381101561283057612830612dc4565b9150505b92915050565b600080600061284987866127f7565b9050600061285787866127f7565b90506000612866836064612d70565b90508281101561287857612878612dc4565b509097909650945050505050565b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415612945576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f556e697377617056324c6962726172793a204944454e544943414c5f4144445260448201527f455353455300000000000000000000000000000000000000000000000000000060648201526084016102e5565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161061297f578284612982565b83835b909250905073ffffffffffffffffffffffffffffffffffffffff8216612a04576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f556e697377617056324c6962726172793a205a45524f5f41444452455353000060448201526064016102e5565b9250929050565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081178255604080517f8c3c9a550000000000000000000000000000000000000000000000000000000081529051638c3c9a5591600480820192602092909190829003018186803b158015612a9c57600080fd5b505afa158015612ab0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128349190612bc4565b600060208284031215612ae657600080fd5b8151612af181612e22565b9392505050565b60008060008060008060008060006101208a8c031215612b1757600080fd5b8935612b2281612e22565b985060208a0135975060408a0135612b3981612e22565b965060608a0135612b4981612e22565b955060808a0135612b5981612e22565b945060a08a0135612b6981612e22565b935060c08a0135925060e08a0135612b8081612e22565b91506101008a0135612b9181612e22565b809150509295985092959850929598565b600060208284031215612bb457600080fd5b81518015158114612af157600080fd5b600060208284031215612bd657600080fd5b5051919050565b600060208284031215612bef57600080fd5b5035919050565b60008219821115612c0957612c09612df3565b500190565b600082612c44577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b600181815b80851115612ca257817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115612c8857612c88612df3565b80851615612c9557918102915b93841c9390800290612c4e565b509250929050565b6000612af18383600082612cc057506001612834565b81612ccd57506000612834565b8160018114612ce35760028114612ced57612d09565b6001915050612834565b60ff841115612cfe57612cfe612df3565b50506001821b612834565b5060208310610133831016604e8410600b8410161715612d2c575081810a612834565b612d368383612c49565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115612d6857612d68612df3565b029392505050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612da857612da8612df3565b500290565b600082821015612dbf57612dbf612df3565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff81168114612e4457600080fd5b5056fea26469706673582212204bc8376b31b98ac662a4acb6dd82cd2eaf2afb16612feec04be619dfe73361dd64736f6c63430008070033";

export class Vault__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Vault> {
    return super.deploy(overrides || {}) as Promise<Vault>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Vault {
    return super.attach(address) as Vault;
  }
  connect(signer: Signer): Vault__factory {
    return super.connect(signer) as Vault__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VaultInterface {
    return new utils.Interface(_abi) as VaultInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Vault {
    return new Contract(address, _abi, signerOrProvider) as Vault;
  }
}
