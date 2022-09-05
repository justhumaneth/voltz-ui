/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestActiveLPManagementStrategy,
  TestActiveLPManagementStrategyInterface,
} from "../TestActiveLPManagementStrategy";

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "x",
        type: "int256",
      },
    ],
    name: "PRBMathSD59x18__FromIntOverflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "x",
        type: "int256",
      },
    ],
    name: "PRBMathSD59x18__FromIntUnderflow",
    type: "error",
  },
  {
    inputs: [],
    name: "PRBMathSD59x18__MulInputTooSmall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "rAbs",
        type: "uint256",
      },
    ],
    name: "PRBMathSD59x18__MulOverflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "PRBMathUD60x18__FromUintOverflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "prod1",
        type: "uint256",
      },
    ],
    name: "PRBMath__MulDivFixedPointOverflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "prod1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "denominator",
        type: "uint256",
      },
    ],
    name: "PRBMath__MulDivOverflow",
    type: "error",
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
    inputs: [],
    name: "LEVERAGE",
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
        name: "depositAmountInUnderlyingTokens",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "marginEngine",
    outputs: [
      {
        internalType: "contract IMarginEngine",
        name: "",
        type: "address",
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
    inputs: [],
    name: "periphery",
    outputs: [
      {
        internalType: "contract IPeriphery",
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
        internalType: "int24",
        name: "_updatedTickLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "_updatedTickUpper",
        type: "int24",
      },
    ],
    name: "rebalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarginEngine",
        name: "_marginEngine",
        type: "address",
      },
      {
        internalType: "contract IPeriphery",
        name: "_periphery",
        type: "address",
      },
    ],
    name: "setMarginEngineAndVAMM",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tickLower",
    outputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tickUpper",
    outputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
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
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "underlyingToken",
    outputs: [
      {
        internalType: "contract IERC20Minimal",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vamm",
    outputs: [
      {
        internalType: "contract IVAMM",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6116f68061007e6000396000f3fe608060405234801561001057600080fd5b50600436106100ae5760003560e01c80624006e0146100b35780632495a599146100dc578063393ed075146100ef57806355b812a81461010457806359c4f9051461012b578063715018a61461013f57806373bca7cf1461014757806377aace1a1461015a5780638d01f0ba1461016d5780638da5cb5b14610183578063b6b55f251461018b578063e098372c1461019e578063f2fde38b146101b1575b600080fd5b6001546100c6906001600160a01b031681565b6040516100d391906112fb565b60405180910390f35b6003546100c6906001600160a01b031681565b6101026100fd366004611326565b6101c4565b005b60045461011890600160b81b900460020b81565b60405160029190910b81526020016100d3565b60045461011890600160a01b900460020b81565b6101026102da565b61010261015536600461136e565b6102ee565b6004546100c6906001600160a01b031681565b610175600581565b6040519081526020016100d3565b6100c66104df565b6101026101993660046113a7565b6104ee565b6002546100c6906001600160a01b031681565b6101026101bf3660046113c0565b61055d565b6101cc6105d3565b6101d4610632565b60006101de6107b8565b90506000811315610292576001546004546001600160a01b0390911690637717797f903090600160a01b8104600290810b91600160b81b9004900b610222866113f3565b6040516001600160e01b031960e087901b1681526001600160a01b039094166004850152600292830b6024850152910b60448301526064820152608401600060405180830381600087803b15801561027957600080fd5b505af115801561028d573d6000803e3d6000fd5b505050505b6004805462ffffff808616600160a01b0262ffffff60a01b19918616600160b81b029190911665ffffffffffff60a01b19909216919091171790556102d56109d1565b505050565b6102e26105d3565b6102ec6000610bc2565b565b6102f66105d3565b6001600160a01b0382166103415760405162461bcd60e51b815260206004820152600d60248201526c1b59481b5d5cdd08195e1a5cdd609a1b60448201526064015b60405180910390fd5b6001546001600160a01b03838116911614156103905760405162461bcd60e51b815260206004820152600e60248201526d1b5948185b1c9958591e481cd95d60921b6044820152606401610338565b600180546001600160a01b0319166001600160a01b038416908117909155604080516338260dcb60e21b8152905163e098372c91600480820192602092909190829003018186803b1580156103e457600080fd5b505afa1580156103f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061041c9190611410565b600280546001600160a01b0319166001600160a01b0392831617905560015460408051632495a59960e01b815290519190921691632495a599916004808301926020929190829003018186803b15801561047557600080fd5b505afa158015610489573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ad9190611410565b600380546001600160a01b039283166001600160a01b0319918216179091556004805493909216921691909117905550565b6000546001600160a01b031690565b600081116105395760405162461bcd60e51b81526020600482015260186024820152776465706f736974206d75737420626520706f73697469766560401b6044820152606401610338565b600354610551906001600160a01b0316333084610c12565b61055a81610c72565b50565b6105656105d3565b6001600160a01b0381166105ca5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610338565b61055a81610bc2565b336105dc6104df565b6001600160a01b0316146102ec5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610338565b600454600160a01b8104600290810b600160b81b909204900b13156102ec5760015460048054604051634904f4dd60e11b81526000936001600160a01b031692639209e9ba9261069b923092600160a01b8304600290810b93600160b81b9004900b910161142d565b61014060405180830381600087803b1580156106b657600080fd5b505af11580156106ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ee91906114b0565b60208101519091506001600160801b038116156107b4576002805460048054604051631f2f089360e01b81523092810192909252600160a01b8104840b6024830152600160b81b900490920b60448301526001600160801b03831660648301526001600160a01b031690631f2f0893906084015b602060405180830381600087803b15801561077c57600080fd5b505af1158015610790573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d59190611545565b5050565b600454600090600160a01b8104600290810b600160b81b909204900b13156109ce5760015460048054604051634904f4dd60e11b81526000936001600160a01b031692639209e9ba92610824923092600160a01b8304600290810b93600160b81b9004900b910161142d565b61014060405180830381600087803b15801561083f57600080fd5b505af1158015610853573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087791906114b0565b905080604001519150600061099f8260a001516000600160009054906101000a90046001600160a01b03166001600160a01b031663652c30b76040518163ffffffff1660e01b815260040160206040518083038186803b1580156108da57600080fd5b505afa1580156108ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109129190611545565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b15801561096057600080fd5b505afa158015610974573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109989190611545565b6000610c7f565b905060008112156109b7576109b4818461155e565b92505b6109c9670de0b6b3a76400008461159f565b925050505b90565b6003546040516370a0823160e01b81526000916001600160a01b0316906370a0823190610a029030906004016112fb565b60206040518083038186803b158015610a1a57600080fd5b505afa158015610a2e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a529190611545565b9050801561055a576000610a676005836115de565b6003546004805460405163095ea7b360e01b81526001600160a01b03918216928101929092526024820186905292935091169063095ea7b390604401602060405180830381600087803b158015610abd57600080fd5b505af1158015610ad1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af591906115fd565b506004546040805160c081018252600180546001600160a01b039081168352600160a01b8504600290810b6020850152600160b81b8604900b938301939093526060820185905260808201529116906332e00daf9060a08101610b5786610ce8565b9052604080516001600160e01b031960e085901b16815282516001600160a01b031660048201526020830151600290810b60248301529183015190910b60448201526060820151606482015260808201511515608482015260a09091015160a482015260c401610762565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052610c6c908590610d56565b50505050565b6000610a676005836115de565b600080610c8b87610dd7565b90506000610c9887610dd7565b90506000610cb2610cab60018989610e62565b8490610f37565b90506000610cc08387610f37565b90506000610cce828461155e565b670de0b6b3a764000090059b9a5050505050505050505050565b60006001600160ff1b03821115610d525760405162461bcd60e51b815260206004820152602860248201527f53616665436173743a2076616c756520646f65736e27742066697420696e2061604482015267371034b73a191a9b60c11b6064820152608401610338565b5090565b6000610d8283836040518060400160405280600781526020016629aa261032b93960c91b815250610ffc565b8051909150156102d55780806020019051810190610da091906115fd565b6102d55760405162461bcd60e51b815260206004820152600860248201526714d5130819985a5b60c21b6044820152606401610338565b60007809392ee8e921d5d073aff322e62439fcf32d7f344649470f8f19821215610e175760405163e608e18b60e01b815260048101839052602401610338565b7809392ee8e921d5d073aff322e62439fcf32d7f344649470f90821315610e54576040516371f72a3160e01b815260048101839052602401610338565b50670de0b6b3a76400000290565b6000828211610e9c5760405162461bcd60e51b815260040161033890602080825260049082015263453c3d5360e01b604082015260600190565b6000610ea66110b1565b905083811015610ee05760405162461bcd60e51b8152602060048201526005602482015264422e543c5360d81b6044820152606401610338565b60008580610eee5750838210155b15610f0457610efd858561162e565b9050610f11565b610f0e858361162e565b90505b610f2d68056bc75e2d63100000610f27836110c1565b906110de565b9695505050505050565b6000600160ff1b831480610f4e5750600160ff1b82145b15610f6c57604051630d01a11b60e21b815260040160405180910390fd5b60008060008512610f7d5784610f82565b846000035b915060008412610f925783610f97565b836000035b90506000610fa583836110f3565b90506001600160ff1b03811115610fd25760405163bf79e8d960e01b815260048101829052602401610338565b600019808713908613808218600114610feb5782610ff0565b826000035b98975050505050505050565b6060833b61103b5760405162461bcd60e51b815260206004820152600c60248201526b1b9bdb8b58dbdb9d1c9858dd60a21b6044820152606401610338565b600080856001600160a01b03166000866040516110589190611671565b60006040518083038185875af1925050503d8060008114611095576040519150601f19603f3d011682016040523d82523d6000602084013e61109a565b606091505b5091509150610f2d8282866111b5565b9392505050565b60006110bc426111ee565b905090565b60006110d8826a1a1601fc4ea7109e0000006110de565b92915050565b60006110aa83670de0b6b3a76400008461122d565b60008080600019848609848602925082811083820303915050670de0b6b3a764000081106111375760405163698d9a0160e11b815260048101829052602401610338565b600080670de0b6b3a76400008688099150506706f05b59d3b1ffff8111826111715780670de0b6b3a76400008504019450505050506110d8565b620400008285030493909111909103600160ee1b02919091177faccb18165bd6fe31ae1cf318dc5b51eee0e1ba569b88cd74c1773b91fac106690201905092915050565b606083156111c45750816110aa565b8251156111d45782518084602001fd5b8160405162461bcd60e51b8152600401610338919061168d565b60007812725dd1d243aba0e75fe645cc4873f9e65afe688c928e1f21821115610e5457604051633492ffd960e01b815260048101839052602401610338565b6000808060001985870985870292508281108382030391505080600014156112685783828161125e5761125e611618565b04925050506110aa565b83811061129257604051631dcf306360e21b81526004810182905260248101859052604401610338565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b6001600160a01b0391909116815260200190565b8035600281900b811461132157600080fd5b919050565b6000806040838503121561133957600080fd5b6113428361130f565b91506113506020840161130f565b90509250929050565b6001600160a01b038116811461055a57600080fd5b6000806040838503121561138157600080fd5b823561138c81611359565b9150602083013561139c81611359565b809150509250929050565b6000602082840312156113b957600080fd5b5035919050565b6000602082840312156113d257600080fd5b81356110aa81611359565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b821415611409576114096113dd565b5060000390565b60006020828403121561142257600080fd5b81516110aa81611359565b6001600160a01b03939093168352600291820b6020840152900b604082015260600190565b60405161014081016001600160401b038111828210171561148357634e487b7160e01b600052604160045260246000fd5b60405290565b8051801515811461132157600080fd5b80516001600160801b038116811461132157600080fd5b600061014082840312156114c357600080fd5b6114cb611452565b6114d483611489565b81526114e260208401611499565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b60006020828403121561155757600080fd5b5051919050565b600080821280156001600160ff1b0384900385131615611580576115806113dd565b600160ff1b8390038412811615611599576115996113dd565b50500190565b60008083128015600160ff1b8501841216156115bd576115bd6113dd565b6001600160ff1b03840183138116156115d8576115d86113dd565b50500390565b60008160001904831182151516156115f8576115f86113dd565b500290565b60006020828403121561160f57600080fd5b6110aa82611489565b634e487b7160e01b600052601260045260246000fd5b600082821015611640576116406113dd565b500390565b60005b83811015611660578181015183820152602001611648565b83811115610c6c5750506000910152565b60008251611683818460208701611645565b9190910192915050565b60208152600082518060208401526116ac816040850160208701611645565b601f01601f1916919091016040019291505056fea2646970667358221220f0c59df9fbbfa38916dfc3125b63bdad3274a0fc9ae09a2bbd9bf19c1bd9236964736f6c63430008090033";

export class TestActiveLPManagementStrategy__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestActiveLPManagementStrategy> {
    return super.deploy(
      overrides || {}
    ) as Promise<TestActiveLPManagementStrategy>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestActiveLPManagementStrategy {
    return super.attach(address) as TestActiveLPManagementStrategy;
  }
  connect(signer: Signer): TestActiveLPManagementStrategy__factory {
    return super.connect(signer) as TestActiveLPManagementStrategy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestActiveLPManagementStrategyInterface {
    return new utils.Interface(_abi) as TestActiveLPManagementStrategyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestActiveLPManagementStrategy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestActiveLPManagementStrategy;
  }
}
