import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockAToken, MockATokenInterface } from "../MockAToken";
export declare class MockAToken__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(pool: string, underlyingAsset: string, name: string, symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockAToken>;
    getDeployTransaction(pool: string, underlyingAsset: string, name: string, symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockAToken;
    connect(signer: Signer): MockAToken__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040516200141f3803806200141f83398101604081905262000034916200022b565b8151829082906200004d9060039060208501906200009f565b508051620000639060049060208401906200009f565b5050600580546001600160a01b039687166001600160a01b031991821617909155600680549590961694169390931790935550620002fd915050565b828054620000ad90620002c0565b90600052602060002090601f016020900481019282620000d157600085556200011c565b82601f10620000ec57805160ff19168380011785556200011c565b828001600101855582156200011c579182015b828111156200011c578251825591602001919060010190620000ff565b506200012a9291506200012e565b5090565b5b808211156200012a57600081556001016200012f565b6001600160a01b03811681146200015b57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200018657600080fd5b81516001600160401b0380821115620001a357620001a36200015e565b604051601f8301601f19908116603f01168101908282118183101715620001ce57620001ce6200015e565b81604052838152602092508683858801011115620001eb57600080fd5b600091505b838210156200020f5785820183015181830184015290820190620001f0565b83821115620002215760008385830101525b9695505050505050565b600080600080608085870312156200024257600080fd5b84516200024f8162000145565b6020860151909450620002628162000145565b60408601519093506001600160401b03808211156200028057600080fd5b6200028e8883890162000174565b93506060870151915080821115620002a557600080fd5b50620002b48782880162000174565b91505092959194509250565b600181811c90821680620002d557607f821691505b60208210811415620002f757634e487b7160e01b600052602260045260246000fd5b50919050565b611112806200030d6000396000f3fe608060405234801561001057600080fd5b50600436106100ba5760003560e01c806306fdde03146100bf578063095ea7b3146100dd578063156e29f61461010057806318160ddd1461011357806323b872dd14610125578063313ce56714610138578063395093511461014757806356189cb41461015a57806370a082311461016f57806395d89b4114610182578063a457c2d71461018a578063a9059cbb1461019d578063d7020d0a146101b0578063dd62ed3e146101c3575b600080fd5b6100c76101d6565b6040516100d49190610dfc565b60405180910390f35b6100f06100eb366004610e6d565b610268565b60405190151581526020016100d4565b6100f061010e366004610e97565b610280565b6002545b6040519081526020016100d4565b6100f0610133366004610eca565b61032c565b604051601281526020016100d4565b6100f0610155366004610e6d565b610350565b61016d610168366004610eca565b610372565b005b61011761017d366004610f06565b610382565b6100c7610421565b6100f0610198366004610e6d565b610430565b6100f06101ab366004610e6d565b6104ab565b61016d6101be366004610f21565b6104b9565b6101176101d1366004610f63565b61062e565b6060600380546101e590610f96565b80601f016020809104026020016040519081016040528092919081815260200182805461021190610f96565b801561025e5780601f106102335761010080835404028352916020019161025e565b820191906000526020600020905b81548152906001019060200180831161024157829003601f168201915b5050505050905090565b600033610276818585610659565b5060019392505050565b60008061028c8561077d565b9050600061029a8585610798565b9050806102e75760405162461bcd60e51b815260206004820152601660248201527510d517d253959053125117d352539517d05353d5539560521b60448201526064015b60405180910390fd5b6102f186826107a6565b6040518581526001600160a01b038716906000906000805160206110bd8339815191529060200160405180910390a3501590505b9392505050565b60003361033a858285610873565b6103458585856108ed565b506001949350505050565b600033610276818585610363838361062e565b61036d9190610fe7565b610659565b61037d838383610659565b505050565b60055460065460405163d15e005360e01b815260009261041b926001600160a01b039182169263d15e0053926103bc921690600401610fff565b60206040518083038186803b1580156103d457600080fd5b505afa1580156103e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040c9190611013565b6104158461077d565b90610997565b92915050565b6060600480546101e590610f96565b6000338161043e828661062e565b90508381101561049e5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016102de565b6103458286868403610659565b6000336102768185856108ed565b6005546001600160a01b031633146105135760405162461bcd60e51b815260206004820152601e60248201527f43545f43414c4c45525f4d5553545f42455f4c454e44494e475f504f4f4c000060448201526064016102de565b600061051f8383610798565b9050806105675760405162461bcd60e51b815260206004820152601660248201527510d517d253959053125117d095549397d05353d5539560521b60448201526064016102de565b61057185826109a5565b60065460405163a9059cbb60e01b81526001600160a01b038681166004830152602482018690529091169063a9059cbb90604401602060405180830381600087803b1580156105bf57600080fd5b505af11580156105d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f7919061102c565b506040518381526000906001600160a01b038716906000805160206110bd8339815191529060200160405180910390a35050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166106bb5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016102de565b6001600160a01b03821661071c5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016102de565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b031660009081526020819052604090205490565b600061032583836001610ae1565b6001600160a01b0382166107fc5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016102de565b806002600082825461080e9190610fe7565b90915550506001600160a01b0382166000908152602081905260408120805483929061083b908490610fe7565b90915550506040518181526001600160a01b038316906000906000805160206110bd8339815191529060200160405180910390a35050565b600061087f848461062e565b905060001981146108e757818110156108da5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016102de565b6108e78484848403610659565b50505050565b60065460055460405163d15e005360e01b81526001600160a01b039283169290911690600090829063d15e005390610929908690600401610fff565b60206040518083038186803b15801561094157600080fd5b505afa158015610955573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109799190611013565b905061098f868661098a8785610798565b610b85565b505050505050565b600061032583836001610d41565b6001600160a01b038216610a055760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016102de565b6001600160a01b03821660009081526020819052604090205481811015610a795760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016102de565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610aa890849061104e565b90915550506040518281526000906001600160a01b038516906000805160206110bd8339815191529060200160405180910390a3505050565b600082610b195760405162461bcd60e51b81526004016102de906020808252600490820152630444956360e41b604082015260600190565b6000610b26600285611065565b905083816001856001811115610b3e57610b3e611087565b14610b5157670de0b6b3a7640000610b5e565b676765c793fa10079d601b1b5b610b68908861109d565b610b729190610fe7565b610b7c9190611065565b95945050505050565b6001600160a01b038316610be95760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016102de565b6001600160a01b038216610c4b5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016102de565b6001600160a01b03831660009081526020819052604090205481811015610cc35760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016102de565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610cfa908490610fe7565b92505081905550826001600160a01b0316846001600160a01b03166000805160206110bd83398151915284604051610d3491815260200190565b60405180910390a36108e7565b6000831580610d4e575082155b15610d5b57506000610325565b6001826001811115610d6f57610d6f611087565b14610d8257670de0b6b3a7640000610d8f565b676765c793fa10079d601b1b5b6001836001811115610da357610da3611087565b14610dc057610dbb6002670de0b6b3a7640000611065565b610dd6565b610dd66002676765c793fa10079d601b1b611065565b610de0858761109d565b610dea9190610fe7565b610df49190611065565b949350505050565b600060208083528351808285015260005b81811015610e2957858101830151858201604001528201610e0d565b81811115610e3b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610e6857600080fd5b919050565b60008060408385031215610e8057600080fd5b610e8983610e51565b946020939093013593505050565b600080600060608486031215610eac57600080fd5b610eb584610e51565b95602085013595506040909401359392505050565b600080600060608486031215610edf57600080fd5b610ee884610e51565b9250610ef660208501610e51565b9150604084013590509250925092565b600060208284031215610f1857600080fd5b61032582610e51565b60008060008060808587031215610f3757600080fd5b610f4085610e51565b9350610f4e60208601610e51565b93969395505050506040820135916060013590565b60008060408385031215610f7657600080fd5b610f7f83610e51565b9150610f8d60208401610e51565b90509250929050565b600181811c90821680610faa57607f821691505b60208210811415610fcb57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610ffa57610ffa610fd1565b500190565b6001600160a01b0391909116815260200190565b60006020828403121561102557600080fd5b5051919050565b60006020828403121561103e57600080fd5b8151801515811461032557600080fd5b60008282101561106057611060610fd1565b500390565b60008261108257634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fd5b60008160001904831182151516156110b7576110b7610fd1565b50029056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220ad59133345b9a597656bb4164bbe0b1c00d2f97b467b7288a73b1e0a0fc547fc64736f6c63430008090033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): MockATokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockAToken;
}
//# sourceMappingURL=MockAToken__factory.d.ts.map