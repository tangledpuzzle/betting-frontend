/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  FareToken,
  FareTokenInterface,
} from "../../../contracts/FareToken.sol/FareToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_mintLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_burnLimit",
        type: "uint256",
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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "INITIAL_SUPPLY",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFare",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "burnLimit",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "contractUserAllowList",
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
        name: "",
        type: "address",
      },
    ],
    name: "contractWhitelist",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "_contractAddress",
        type: "address",
      },
    ],
    name: "didUserAllowContract",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mintFare",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintLimit",
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
    inputs: [
      {
        internalType: "address",
        name: "_contractAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_allow",
        type: "bool",
      },
    ],
    name: "setAllowContractMintBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_burnLimit",
        type: "uint256",
      },
    ],
    name: "setBurnLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_mintLimit",
        type: "uint256",
      },
    ],
    name: "setMintLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    name: "setWhitelistAddress",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600060055560006006553480156200001b57600080fd5b50604051620013d5380380620013d58339810160408190526200003e9162000275565b604080518082018252600d81526c11985c9948141c9bdd1bd8dbdb609a1b6020808301918252835180850190945260048452634641524560e01b9084015281519192916200008f91600391620001cf565b508051620000a5906004906020840190620001cf565b50505060058290556006819055600780546001600160a01b03191633908117909155620000df906ba18f07d736b90be550000000620000e7565b5050620002fe565b6001600160a01b038216620001425760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015691906200029a565b90915550506001600160a01b03821660009081526020819052604081208054839290620001859084906200029a565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dd90620002c1565b90600052602060002090601f0160209004810192826200020157600085556200024c565b82601f106200021c57805160ff19168380011785556200024c565b828001600101855582156200024c579182015b828111156200024c5782518255916020019190600101906200022f565b506200025a9291506200025e565b5090565b5b808211156200025a57600081556001016200025f565b600080604083850312156200028957600080fd5b505080516020909101519092909150565b60008219821115620002bc57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002d657607f821691505b60208210811415620002f857634e487b7160e01b600052602260045260246000fd5b50919050565b6110c7806200030e6000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c8063520e322b116100c3578063996517cf1161007c578063996517cf146102e45780639e6a1d7d146102ed578063a274721c14610300578063a457c2d71461032e578063a9059cbb14610341578063dd62ed3e1461035457600080fd5b8063520e322b1461025f57806357ea8b8e1461027257806370a08231146102855780637f923e60146102ae5780638da5cb5b146102c157806395d89b41146102dc57600080fd5b80632ff2e9dc116101155780632ff2e9dc146101df578063313ce567146101f257806339509351146102015780633f914aef146102145780634c999f5e1461022957806351769d291461024c57600080fd5b806306fdde031461015d578063095ea7b31461017b578063132bfe241461019e57806318160ddd146101b157806323b872dd146101c35780632a9c72c8146101d6575b600080fd5b610165610367565b6040516101729190610e59565b60405180910390f35b61018e610189366004610eca565b6103f9565b6040519015158152602001610172565b61018e6101ac366004610ef4565b610411565b6002545b604051908152602001610172565b61018e6101d1366004610f27565b610440565b6101b560065481565b6101b56ba18f07d736b90be55000000081565b60405160128152602001610172565b61018e61020f366004610eca565b610464565b610227610222366004610f63565b610486565b005b61018e610237366004610f9f565b60086020526000908152604090205460ff1681565b61022761025a366004610fc1565b6104e4565b61022761026d366004610f63565b610513565b610227610280366004610eca565b6105b1565b6101b5610293366004610f9f565b6001600160a01b031660009081526020819052604090205490565b6102276102bc366004610eca565b6106c5565b6007546040516001600160a01b039091168152602001610172565b6101656107d5565b6101b560055481565b6102276102fb366004610fc1565b6107e4565b61018e61030e366004610ef4565b600960209081526000928352604080842090915290825290205460ff1681565b61018e61033c366004610eca565b610813565b61018e61034f366004610eca565b61088e565b6101b5610362366004610ef4565b61089c565b60606003805461037690610fda565b80601f01602080910402602001604051908101604052809291908181526020018280546103a290610fda565b80156103ef5780601f106103c4576101008083540402835291602001916103ef565b820191906000526020600020905b8154815290600101906020018083116103d257829003601f168201915b5050505050905090565b6000336104078185856108c7565b5060019392505050565b6001600160a01b0380821660009081526009602090815260408083209386168352929052205460ff1692915050565b60003361044e8582856109ec565b610459858585610a66565b506001949350505050565b600033610407818585610477838361089c565b610481919061102b565b6108c7565b6007546001600160a01b031633146104b95760405162461bcd60e51b81526004016104b090611043565b60405180910390fd5b6001600160a01b03919091166000908152600860205260409020805460ff1916911515919091179055565b6007546001600160a01b0316331461050e5760405162461bcd60e51b81526004016104b090611043565b600655565b6001600160a01b03821660009081526008602052604090205460ff1661057b5760405162461bcd60e51b815260206004820152601860248201527f436f6e7472616374206e6f742077686974656c6973746564000000000000000060448201526064016104b0565b6001600160a01b039190911660009081526009602090815260408083203384529091529020805460ff1916911515919091179055565b3360009081526008602052604090205460ff166106035760405162461bcd60e51b815260206004820152601060248201526f139bdd081bdb881dda1a5d195b1a5cdd60821b60448201526064016104b0565b61060d8233610411565b6106655760405162461bcd60e51b815260206004820152602360248201527f5573657220646964206e6f7420616c6c6f7720636f6e747261637420746f206d6044820152621a5b9d60ea1b60648201526084016104b0565b6005548111156106b75760405162461bcd60e51b815260206004820152601960248201527f416d6f756e742065786365656473206d696e74206c696d69740000000000000060448201526064016104b0565b6106c18282610c34565b5050565b3360009081526008602052604090205460ff166107175760405162461bcd60e51b815260206004820152601060248201526f139bdd081bdb881dda1a5d195b1a5cdd60821b60448201526064016104b0565b6107218233610411565b6107795760405162461bcd60e51b815260206004820152602360248201527f5573657220646964206e6f7420616c6c6f7720636f6e747261637420746f20626044820152623ab93760e91b60648201526084016104b0565b6006548111156107cb5760405162461bcd60e51b815260206004820152601960248201527f416d6f756e742065786365656473206275726e206c696d69740000000000000060448201526064016104b0565b6106c18282610d13565b60606004805461037690610fda565b6007546001600160a01b0316331461080e5760405162461bcd60e51b81526004016104b090611043565b600555565b60003381610821828661089c565b9050838110156108815760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016104b0565b61045982868684036108c7565b600033610407818585610a66565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166109295760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104b0565b6001600160a01b03821661098a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104b0565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b60006109f8848461089c565b90506000198114610a605781811015610a535760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016104b0565b610a6084848484036108c7565b50505050565b6001600160a01b038316610aca5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104b0565b6001600160a01b038216610b2c5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104b0565b6001600160a01b03831660009081526020819052604090205481811015610ba45760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016104b0565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610bdb90849061102b565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c2791815260200190565b60405180910390a3610a60565b6001600160a01b038216610c8a5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104b0565b8060026000828254610c9c919061102b565b90915550506001600160a01b03821660009081526020819052604081208054839290610cc990849061102b565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610d735760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016104b0565b6001600160a01b03821660009081526020819052604090205481811015610de75760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016104b0565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610e1690849061107a565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016109df565b600060208083528351808285015260005b81811015610e8657858101830151858201604001528201610e6a565b81811115610e98576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610ec557600080fd5b919050565b60008060408385031215610edd57600080fd5b610ee683610eae565b946020939093013593505050565b60008060408385031215610f0757600080fd5b610f1083610eae565b9150610f1e60208401610eae565b90509250929050565b600080600060608486031215610f3c57600080fd5b610f4584610eae565b9250610f5360208501610eae565b9150604084013590509250925092565b60008060408385031215610f7657600080fd5b610f7f83610eae565b915060208301358015158114610f9457600080fd5b809150509250929050565b600060208284031215610fb157600080fd5b610fba82610eae565b9392505050565b600060208284031215610fd357600080fd5b5035919050565b600181811c90821680610fee57607f821691505b6020821081141561100f57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561103e5761103e611015565b500190565b60208082526017908201527f43616c6c6572206973206e6f7420746865206f776e6572000000000000000000604082015260600190565b60008282101561108c5761108c611015565b50039056fea2646970667358221220a32a928a3e865e06de6338735d968403619fbdf2419e6da6a4f143f228fc07c064736f6c63430008090033";

type FareTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FareTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FareToken__factory extends ContractFactory {
  constructor(...args: FareTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _mintLimit: PromiseOrValue<BigNumberish>,
    _burnLimit: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FareToken> {
    return super.deploy(
      _mintLimit,
      _burnLimit,
      overrides || {}
    ) as Promise<FareToken>;
  }
  override getDeployTransaction(
    _mintLimit: PromiseOrValue<BigNumberish>,
    _burnLimit: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_mintLimit, _burnLimit, overrides || {});
  }
  override attach(address: string): FareToken {
    return super.attach(address) as FareToken;
  }
  override connect(signer: Signer): FareToken__factory {
    return super.connect(signer) as FareToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FareTokenInterface {
    return new utils.Interface(_abi) as FareTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FareToken {
    return new Contract(address, _abi, signerOrProvider) as FareToken;
  }
}
