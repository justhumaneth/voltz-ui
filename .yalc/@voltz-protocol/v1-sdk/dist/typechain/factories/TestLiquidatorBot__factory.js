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
exports.TestLiquidatorBot__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_recipient",
                type: "address",
            },
            {
                internalType: "int24",
                name: "_tickLower",
                type: "int24",
            },
            {
                internalType: "int24",
                name: "_tickUpper",
                type: "int24",
            },
        ],
        name: "getLiquidationMarginRequirement",
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
        inputs: [],
        name: "getMELiquidatorRewardWad",
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
                name: "_owner",
                type: "address",
            },
            {
                internalType: "int24",
                name: "_tickLower",
                type: "int24",
            },
            {
                internalType: "int24",
                name: "_tickUpper",
                type: "int24",
            },
        ],
        name: "liquidatePosition",
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
        inputs: [
            {
                internalType: "contract IMarginEngine",
                name: "_marginEngine",
                type: "address",
            },
        ],
        name: "setMarginEngine",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50610494806100206000396000f3fe608060405234801561001057600080fd5b50600436106100565760003560e01c80624006e01461005b5780631656503e1461008b5780637b024801146100ac5780638918ca65146100bf578063f5c6bf0a146100c7575b600080fd5b60005461006e906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61009e6100993660046103b4565b6100dc565b604051908152602001610082565b61009e6100ba3660046103b4565b6101a8565b61009e61021c565b6100da6100d53660046103f9565b6102ce565b005b600080546001600160a01b031661010e5760405162461bcd60e51b81526004016101059061041d565b60405180910390fd5b600054604051630b2b281f60e11b81526001600160a01b038681166004830152600286810b602484015285900b604483015290911690631656503e906064015b602060405180830381600087803b15801561016857600080fd5b505af115801561017c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101a09190610445565b949350505050565b600080546001600160a01b03166101d15760405162461bcd60e51b81526004016101059061041d565b60005460405163f121610560e01b81526001600160a01b038681166004830152600286810b602484015285900b6044830152600160648301529091169063f12161059060840161014e565b600080546001600160a01b03166102455760405162461bcd60e51b81526004016101059061041d565b60008054906101000a90046001600160a01b03166001600160a01b031663e087caf16040518163ffffffff1660e01b815260040160206040518083038186803b15801561029157600080fd5b505afa1580156102a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c99190610445565b905090565b6001600160a01b0381166103145760405162461bcd60e51b815260206004820152600d60248201526c1b59481b5d5cdd08195e1a5cdd609a1b6044820152606401610105565b6000546001600160a01b03828116911614156103635760405162461bcd60e51b815260206004820152600e60248201526d1b5948185b1c9958591e481cd95d60921b6044820152606401610105565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b038116811461039a57600080fd5b50565b8035600281900b81146103af57600080fd5b919050565b6000806000606084860312156103c957600080fd5b83356103d481610385565b92506103e26020850161039d565b91506103f06040850161039d565b90509250925092565b60006020828403121561040b57600080fd5b813561041681610385565b9392505050565b6020808252600e908201526d1b59481b5d5cdd081899481cd95d60921b604082015260600190565b60006020828403121561045757600080fd5b505191905056fea264697066735822122057f76c562ba5a5917650cdf8128a9f56bd3114af9e7bed9d44d35c2d1fbe455e64736f6c63430008090033";
var TestLiquidatorBot__factory = /** @class */ (function (_super) {
    __extends(TestLiquidatorBot__factory, _super);
    function TestLiquidatorBot__factory() {
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
    TestLiquidatorBot__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    TestLiquidatorBot__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    TestLiquidatorBot__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TestLiquidatorBot__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TestLiquidatorBot__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    TestLiquidatorBot__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    TestLiquidatorBot__factory.bytecode = _bytecode;
    TestLiquidatorBot__factory.abi = _abi;
    return TestLiquidatorBot__factory;
}(ethers_1.ContractFactory));
exports.TestLiquidatorBot__factory = TestLiquidatorBot__factory;
