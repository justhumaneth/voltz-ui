import { Signer, ContractFactory, PayableOverrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockWETH, MockWETHInterface } from "../MockWETH";
export declare class MockWETH__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(name: string, symbol: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<MockWETH>;
    getDeployTransaction(name: string, symbol: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockWETH;
    connect(signer: Signer): MockWETH__factory;
    static readonly bytecode = "0x60806040526040516200106d3803806200106d8339810160408190526200002691620002e9565b8181818181600390805190602001906200004292919062000176565b5080516200005890600490602084019062000176565b505050620000723364e8d4a510006200007c60201b60201c565b50505050620003b7565b6200008882826200008c565b5050565b6001600160a01b038216620000e75760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620000fb919062000353565b90915550506001600160a01b038216600090815260208190526040812080548392906200012a90849062000353565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a362000088565b82805462000184906200037a565b90600052602060002090601f016020900481019282620001a85760008555620001f3565b82601f10620001c357805160ff1916838001178555620001f3565b82800160010185558215620001f3579182015b82811115620001f3578251825591602001919060010190620001d6565b506200020192915062000205565b5090565b5b8082111562000201576000815560010162000206565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200024457600080fd5b81516001600160401b03808211156200026157620002616200021c565b604051601f8301601f19908116603f011681019082821181831017156200028c576200028c6200021c565b81604052838152602092508683858801011115620002a957600080fd5b600091505b83821015620002cd5785820183015181830184015290820190620002ae565b83821115620002df5760008385830101525b9695505050505050565b60008060408385031215620002fd57600080fd5b82516001600160401b03808211156200031557600080fd5b620003238683870162000232565b935060208501519150808211156200033a57600080fd5b50620003498582860162000232565b9150509250929050565b600082198211156200037557634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200038f57607f821691505b60208210811415620003b157634e487b7160e01b600052602260045260246000fd5b50919050565b610ca680620003c76000396000f3fe6080604052600436106100ce5760003560e01c806306fdde03146100d3578063095ea7b3146100fe57806318160ddd1461012e578063222f5be01461014d57806323b872dd1461016f5780632e1a7d4d1461018f578063313ce567146101af57806339509351146101cb57806340c10f19146101eb57806356189cb41461020b57806370a082311461022b57806395d89b41146102615780639dc29fac14610276578063a457c2d714610296578063a9059cbb146102b6578063d0e30db0146102d6578063dd62ed3e146102de575b600080fd5b3480156100df57600080fd5b506100e86102fe565b6040516100f59190610a8b565b60405180910390f35b34801561010a57600080fd5b5061011e610119366004610afc565b610390565b60405190151581526020016100f5565b34801561013a57600080fd5b506002545b6040519081526020016100f5565b34801561015957600080fd5b5061016d610168366004610b26565b6103a8565b005b34801561017b57600080fd5b5061011e61018a366004610b26565b6103b8565b34801561019b57600080fd5b5061016d6101aa366004610b62565b6103dc565b3480156101bb57600080fd5b50604051601281526020016100f5565b3480156101d757600080fd5b5061011e6101e6366004610afc565b610417565b3480156101f757600080fd5b5061016d610206366004610afc565b610439565b34801561021757600080fd5b5061016d610226366004610b26565b610443565b34801561023757600080fd5b5061013f610246366004610b7b565b6001600160a01b031660009081526020819052604090205490565b34801561026d57600080fd5b506100e861044e565b34801561028257600080fd5b5061016d610291366004610afc565b61045d565b3480156102a257600080fd5b5061011e6102b1366004610afc565b610467565b3480156102c257600080fd5b5061011e6102d1366004610afc565b6104e7565b61016d6104f5565b3480156102ea57600080fd5b5061013f6102f9366004610b9d565b610501565b60606003805461030d90610bd0565b80601f016020809104026020016040519081016040528092919081815260200182805461033990610bd0565b80156103865780601f1061035b57610100808354040283529160200191610386565b820191906000526020600020905b81548152906001019060200180831161036957829003601f168201915b5050505050905090565b60003361039e81858561052c565b5060019392505050565b6103b3838383610650565b505050565b6000336103c685828561080e565b6103d1858585610650565b506001949350505050565b6103e63382610882565b604051339082156108fc029083906000818181858888f19350505050158015610413573d6000803e3d6000fd5b5050565b60003361039e81858561042a8383610501565b6104349190610c21565b61052c565b61041382826109be565b6103b383838361052c565b60606004805461030d90610bd0565b6104138282610882565b600033816104758286610501565b9050838110156104da5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6103d1828686840361052c565b60003361039e818585610650565b6104ff33346109be565b565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b03831661058e5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104d1565b6001600160a01b0382166105ef5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104d1565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166106b45760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104d1565b6001600160a01b0382166107165760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104d1565b6001600160a01b0383166000908152602081905260409020548181101561078e5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016104d1565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906107c5908490610c21565b92505081905550826001600160a01b0316846001600160a01b0316600080516020610c51833981519152846040516107ff91815260200190565b60405180910390a35b50505050565b600061081a8484610501565b9050600019811461080857818110156108755760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016104d1565b610808848484840361052c565b6001600160a01b0382166108e25760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016104d1565b6001600160a01b038216600090815260208190526040902054818110156109565760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016104d1565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610985908490610c39565b90915550506040518281526000906001600160a01b03851690600080516020610c518339815191529060200160405180910390a3505050565b6001600160a01b038216610a145760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104d1565b8060026000828254610a269190610c21565b90915550506001600160a01b03821660009081526020819052604081208054839290610a53908490610c21565b90915550506040518181526001600160a01b03831690600090600080516020610c518339815191529060200160405180910390a35050565b600060208083528351808285015260005b81811015610ab857858101830151858201604001528201610a9c565b81811115610aca576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610af757600080fd5b919050565b60008060408385031215610b0f57600080fd5b610b1883610ae0565b946020939093013593505050565b600080600060608486031215610b3b57600080fd5b610b4484610ae0565b9250610b5260208501610ae0565b9150604084013590509250925092565b600060208284031215610b7457600080fd5b5035919050565b600060208284031215610b8d57600080fd5b610b9682610ae0565b9392505050565b60008060408385031215610bb057600080fd5b610bb983610ae0565b9150610bc760208401610ae0565b90509250929050565b600181811c90821680610be457607f821691505b60208210811415610c0557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610c3457610c34610c0b565b500190565b600082821015610c4b57610c4b610c0b565b50039056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122002538e637c94e10b289c9d6657e82ef2d24e089138087ae5e2c8f3795ca949d664736f6c63430008090033";
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
    static createInterface(): MockWETHInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockWETH;
}
//# sourceMappingURL=MockWETH__factory.d.ts.map