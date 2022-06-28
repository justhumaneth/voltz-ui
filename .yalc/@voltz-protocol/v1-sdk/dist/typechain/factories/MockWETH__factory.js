"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockWETH__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "symbol",
                type: "string",
            },
        ],
        stateMutability: "payable",
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
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "approveInternal",
        outputs: [],
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
                name: "account",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
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
        inputs: [],
        name: "deposit",
        outputs: [],
        stateMutability: "payable",
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
                name: "account",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
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
                name: "recipient",
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
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
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
                name: "value",
                type: "uint256",
            },
        ],
        name: "transferInternal",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x6080604052604051620010ae380380620010ae8339810160408190526200002691620002e9565b8181818181600390805190602001906200004292919062000176565b5080516200005890600490602084019062000176565b505050620000723364e8d4a510006200007c60201b60201c565b50505050620003b7565b6200008882826200008c565b5050565b6001600160a01b038216620000e75760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620000fb919062000353565b90915550506001600160a01b038216600090815260208190526040812080548392906200012a90849062000353565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a362000088565b82805462000184906200037a565b90600052602060002090601f016020900481019282620001a85760008555620001f3565b82601f10620001c357805160ff1916838001178555620001f3565b82800160010185558215620001f3579182015b82811115620001f3578251825591602001919060010190620001d6565b506200020192915062000205565b5090565b5b8082111562000201576000815560010162000206565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200024457600080fd5b81516001600160401b03808211156200026157620002616200021c565b604051601f8301601f19908116603f011681019082821181831017156200028c576200028c6200021c565b81604052838152602092508683858801011115620002a957600080fd5b600091505b83821015620002cd5785820183015181830184015290820190620002ae565b83821115620002df5760008385830101525b9695505050505050565b60008060408385031215620002fd57600080fd5b82516001600160401b03808211156200031557600080fd5b620003238683870162000232565b935060208501519150808211156200033a57600080fd5b50620003498582860162000232565b9150509250929050565b600082198211156200037557634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200038f57607f821691505b60208210811415620003b157634e487b7160e01b600052602260045260246000fd5b50919050565b610ce780620003c76000396000f3fe6080604052600436106100ce5760003560e01c806306fdde03146100d3578063095ea7b3146100fe57806318160ddd1461012e578063222f5be01461014d57806323b872dd1461016f5780632e1a7d4d1461018f578063313ce567146101af57806339509351146101cb57806340c10f19146101eb57806356189cb41461020b57806370a082311461022b57806395d89b41146102615780639dc29fac14610276578063a457c2d714610296578063a9059cbb146102b6578063d0e30db0146102d6578063dd62ed3e146102de575b600080fd5b3480156100df57600080fd5b506100e8610324565b6040516100f59190610acc565b60405180910390f35b34801561010a57600080fd5b5061011e610119366004610b3d565b6103b6565b60405190151581526020016100f5565b34801561013a57600080fd5b506002545b6040519081526020016100f5565b34801561015957600080fd5b5061016d610168366004610b67565b6103cc565b005b34801561017b57600080fd5b5061011e61018a366004610b67565b6103dc565b34801561019b57600080fd5b5061016d6101aa366004610ba3565b61048b565b3480156101bb57600080fd5b50604051601281526020016100f5565b3480156101d757600080fd5b5061011e6101e6366004610b3d565b6104c6565b3480156101f757600080fd5b5061016d610206366004610b3d565b610502565b34801561021757600080fd5b5061016d610226366004610b67565b61050c565b34801561023757600080fd5b5061013f610246366004610bbc565b6001600160a01b031660009081526020819052604090205490565b34801561026d57600080fd5b506100e8610517565b34801561028257600080fd5b5061016d610291366004610b3d565b610526565b3480156102a257600080fd5b5061011e6102b1366004610b3d565b610530565b3480156102c257600080fd5b5061011e6102d1366004610b3d565b6105c9565b61016d6105d6565b3480156102ea57600080fd5b5061013f6102f9366004610bde565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461033390610c11565b80601f016020809104026020016040519081016040528092919081815260200182805461035f90610c11565b80156103ac5780601f10610381576101008083540402835291602001916103ac565b820191906000526020600020905b81548152906001019060200180831161038f57829003601f168201915b5050505050905090565b60006103c33384846105e2565b50600192915050565b6103d7838383610706565b505050565b60006103e9848484610706565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156104735760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61048085338584036105e2565b506001949350505050565b61049533826108c3565b604051339082156108fc029083906000818181858888f193505050501580156104c2573d6000803e3d6000fd5b5050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916103c39185906104fd908690610c62565b6105e2565b6104c282826109ff565b6103d78383836105e2565b60606004805461033390610c11565b6104c282826108c3565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156105b25760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161046a565b6105bf33858584036105e2565b5060019392505050565b60006103c3338484610706565b6105e033346109ff565b565b6001600160a01b0383166106445760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161046a565b6001600160a01b0382166106a55760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161046a565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03831661076a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161046a565b6001600160a01b0382166107cc5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161046a565b6001600160a01b038316600090815260208190526040902054818110156108445760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161046a565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061087b908490610c62565b92505081905550826001600160a01b0316846001600160a01b0316600080516020610c92833981519152846040516108b591815260200190565b60405180910390a350505050565b6001600160a01b0382166109235760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161046a565b6001600160a01b038216600090815260208190526040902054818110156109975760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161046a565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c6908490610c7a565b90915550506040518281526000906001600160a01b03851690600080516020610c928339815191529060200160405180910390a3505050565b6001600160a01b038216610a555760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161046a565b8060026000828254610a679190610c62565b90915550506001600160a01b03821660009081526020819052604081208054839290610a94908490610c62565b90915550506040518181526001600160a01b03831690600090600080516020610c928339815191529060200160405180910390a35050565b600060208083528351808285015260005b81811015610af957858101830151858201604001528201610add565b81811115610b0b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610b3857600080fd5b919050565b60008060408385031215610b5057600080fd5b610b5983610b21565b946020939093013593505050565b600080600060608486031215610b7c57600080fd5b610b8584610b21565b9250610b9360208501610b21565b9150604084013590509250925092565b600060208284031215610bb557600080fd5b5035919050565b600060208284031215610bce57600080fd5b610bd782610b21565b9392505050565b60008060408385031215610bf157600080fd5b610bfa83610b21565b9150610c0860208401610b21565b90509250929050565b600181811c90821680610c2557607f821691505b60208210811415610c4657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610c7557610c75610c4c565b500190565b600082821015610c8c57610c8c610c4c565b50039056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220ffd9c521b7ae84148107bac6a905ae4c7fbcea7b2a91e63081958de0407dbb0c64736f6c63430008090033";
var MockWETH__factory = /** @class */ (function (_super) {
    __extends(MockWETH__factory, _super);
    function MockWETH__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (args.length === 1) {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        else {
            _this = _super.apply(this, args) || this;
        }
        return _this;
    }
    MockWETH__factory.prototype.deploy = function (name, symbol, overrides) {
        return _super.prototype.deploy.call(this, name, symbol, overrides || {});
    };
    MockWETH__factory.prototype.getDeployTransaction = function (name, symbol, overrides) {
        return _super.prototype.getDeployTransaction.call(this, name, symbol, overrides || {});
    };
    MockWETH__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    MockWETH__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    MockWETH__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    MockWETH__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    MockWETH__factory.bytecode = _bytecode;
    MockWETH__factory.abi = _abi;
    return MockWETH__factory;
}(ethers_1.ContractFactory));
exports.MockWETH__factory = MockWETH__factory;
