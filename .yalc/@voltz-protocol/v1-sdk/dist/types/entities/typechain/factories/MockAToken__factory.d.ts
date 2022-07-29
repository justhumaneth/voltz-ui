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
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040516200145c3803806200145c83398101604081905262000034916200022b565b8151829082906200004d9060039060208501906200009f565b508051620000639060049060208401906200009f565b5050600580546001600160a01b039687166001600160a01b031991821617909155600680549590961694169390931790935550620002fd915050565b828054620000ad90620002c0565b90600052602060002090601f016020900481019282620000d157600085556200011c565b82601f10620000ec57805160ff19168380011785556200011c565b828001600101855582156200011c579182015b828111156200011c578251825591602001919060010190620000ff565b506200012a9291506200012e565b5090565b5b808211156200012a57600081556001016200012f565b6001600160a01b03811681146200015b57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200018657600080fd5b81516001600160401b0380821115620001a357620001a36200015e565b604051601f8301601f19908116603f01168101908282118183101715620001ce57620001ce6200015e565b81604052838152602092508683858801011115620001eb57600080fd5b600091505b838210156200020f5785820183015181830184015290820190620001f0565b83821115620002215760008385830101525b9695505050505050565b600080600080608085870312156200024257600080fd5b84516200024f8162000145565b6020860151909450620002628162000145565b60408601519093506001600160401b03808211156200028057600080fd5b6200028e8883890162000174565b93506060870151915080821115620002a557600080fd5b50620002b48782880162000174565b91505092959194509250565b600181811c90821680620002d557607f821691505b60208210811415620002f757634e487b7160e01b600052602260045260246000fd5b50919050565b61114f806200030d6000396000f3fe608060405234801561001057600080fd5b50600436106100ba5760003560e01c806306fdde03146100bf578063095ea7b3146100dd578063156e29f61461010057806318160ddd1461011357806323b872dd14610125578063313ce56714610138578063395093511461014757806356189cb41461015a57806370a082311461016f57806395d89b4114610182578063a457c2d71461018a578063a9059cbb1461019d578063d7020d0a146101b0578063dd62ed3e146101c3575b600080fd5b6100c76101fc565b6040516100d49190610e39565b60405180910390f35b6100f06100eb366004610eaa565b61028e565b60405190151581526020016100d4565b6100f061010e366004610ed4565b6102a4565b6002545b6040519081526020016100d4565b6100f0610133366004610f07565b610350565b604051601281526020016100d4565b6100f0610155366004610eaa565b6103fa565b61016d610168366004610f07565b610436565b005b61011761017d366004610f43565b610446565b6100c76104e5565b6100f0610198366004610eaa565b6104f4565b6100f06101ab366004610eaa565b61058d565b61016d6101be366004610f5e565b61059a565b6101176101d1366004610fa0565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461020b90610fd3565b80601f016020809104026020016040519081016040528092919081815260200182805461023790610fd3565b80156102845780601f1061025957610100808354040283529160200191610284565b820191906000526020600020905b81548152906001019060200180831161026757829003601f168201915b5050505050905090565b600061029b33848461070f565b50600192915050565b6000806102b085610833565b905060006102be858561084e565b90508061030b5760405162461bcd60e51b815260206004820152601660248201527510d517d253959053125117d352539517d05353d5539560521b60448201526064015b60405180910390fd5b610315868261085c565b6040518581526001600160a01b038716906000906000805160206110fa8339815191529060200160405180910390a3501590505b9392505050565b600061035d848484610929565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103e25760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b6064820152608401610302565b6103ef853385840361070f565b506001949350505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161029b918590610431908690611024565b61070f565b61044183838361070f565b505050565b60055460065460405163d15e005360e01b81526000926104df926001600160a01b039182169263d15e00539261048092169060040161103c565b60206040518083038186803b15801561049857600080fd5b505afa1580156104ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d09190611050565b6104d984610833565b906109d3565b92915050565b60606004805461020b90610fd3565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156105765760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610302565b610583338585840361070f565b5060019392505050565b600061029b338484610929565b6005546001600160a01b031633146105f45760405162461bcd60e51b815260206004820152601e60248201527f43545f43414c4c45525f4d5553545f42455f4c454e44494e475f504f4f4c00006044820152606401610302565b6000610600838361084e565b9050806106485760405162461bcd60e51b815260206004820152601660248201527510d517d253959053125117d095549397d05353d5539560521b6044820152606401610302565b61065285826109e1565b60065460405163a9059cbb60e01b81526001600160a01b038681166004830152602482018690529091169063a9059cbb90604401602060405180830381600087803b1580156106a057600080fd5b505af11580156106b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106d89190611069565b506040518381526000906001600160a01b038716906000805160206110fa8339815191529060200160405180910390a35050505050565b6001600160a01b0383166107715760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610302565b6001600160a01b0382166107d25760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610302565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b031660009081526020819052604090205490565b600061034983836001610b1d565b6001600160a01b0382166108b25760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610302565b80600260008282546108c49190611024565b90915550506001600160a01b038216600090815260208190526040812080548392906108f1908490611024565b90915550506040518181526001600160a01b038316906000906000805160206110fa8339815191529060200160405180910390a35050565b60065460055460405163d15e005360e01b81526001600160a01b039283169290911690600090829063d15e00539061096590869060040161103c565b60206040518083038186803b15801561097d57600080fd5b505afa158015610991573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b59190611050565b90506109cb86866109c6878561084e565b610bc1565b505050505050565b600061034983836001610d7e565b6001600160a01b038216610a415760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610302565b6001600160a01b03821660009081526020819052604090205481811015610ab55760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610302565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610ae490849061108b565b90915550506040518281526000906001600160a01b038516906000805160206110fa8339815191529060200160405180910390a3505050565b600082610b555760405162461bcd60e51b8152600401610302906020808252600490820152630444956360e41b604082015260600190565b6000610b626002856110a2565b905083816001856001811115610b7a57610b7a6110c4565b14610b8d57670de0b6b3a7640000610b9a565b676765c793fa10079d601b1b5b610ba490886110da565b610bae9190611024565b610bb891906110a2565b95945050505050565b6001600160a01b038316610c255760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610302565b6001600160a01b038216610c875760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610302565b6001600160a01b03831660009081526020819052604090205481811015610cff5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610302565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610d36908490611024565b92505081905550826001600160a01b0316846001600160a01b03166000805160206110fa83398151915284604051610d7091815260200190565b60405180910390a350505050565b6000831580610d8b575082155b15610d9857506000610349565b6001826001811115610dac57610dac6110c4565b14610dbf57670de0b6b3a7640000610dcc565b676765c793fa10079d601b1b5b6001836001811115610de057610de06110c4565b14610dfd57610df86002670de0b6b3a76400006110a2565b610e13565b610e136002676765c793fa10079d601b1b6110a2565b610e1d85876110da565b610e279190611024565b610e3191906110a2565b949350505050565b600060208083528351808285015260005b81811015610e6657858101830151858201604001528201610e4a565b81811115610e78576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610ea557600080fd5b919050565b60008060408385031215610ebd57600080fd5b610ec683610e8e565b946020939093013593505050565b600080600060608486031215610ee957600080fd5b610ef284610e8e565b95602085013595506040909401359392505050565b600080600060608486031215610f1c57600080fd5b610f2584610e8e565b9250610f3360208501610e8e565b9150604084013590509250925092565b600060208284031215610f5557600080fd5b61034982610e8e565b60008060008060808587031215610f7457600080fd5b610f7d85610e8e565b9350610f8b60208601610e8e565b93969395505050506040820135916060013590565b60008060408385031215610fb357600080fd5b610fbc83610e8e565b9150610fca60208401610e8e565b90509250929050565b600181811c90821680610fe757607f821691505b6020821081141561100857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156110375761103761100e565b500190565b6001600160a01b0391909116815260200190565b60006020828403121561106257600080fd5b5051919050565b60006020828403121561107b57600080fd5b8151801515811461034957600080fd5b60008282101561109d5761109d61100e565b500390565b6000826110bf57634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fd5b60008160001904831182151516156110f4576110f461100e565b50029056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212204ae751adc0e51847772f228b281d2134dd386f80826efcc740aa3346a068833364736f6c63430008090033";
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