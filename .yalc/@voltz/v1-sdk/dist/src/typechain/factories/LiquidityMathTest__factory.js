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
exports.LiquidityMathTest__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "uint128",
                name: "x",
                type: "uint128",
            },
            {
                internalType: "int128",
                name: "y",
                type: "int128",
            },
        ],
        name: "addDelta",
        outputs: [
            {
                internalType: "uint128",
                name: "z",
                type: "uint128",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint128",
                name: "x",
                type: "uint128",
            },
            {
                internalType: "int128",
                name: "y",
                type: "int128",
            },
        ],
        name: "getGasCostOfAddDelta",
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
];
var _bytecode = "0x608060405234801561001057600080fd5b506101f2806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063402d44fb1461003b578063cf41632f1461006b575b600080fd5b61004e6100493660046100f3565b61008c565b6040516001600160801b0390911681526020015b60405180910390f35b61007e6100793660046100f3565b6100a1565b604051908152602001610062565b600061009883836100c5565b90505b92915050565b6000805a90506100b184846100c5565b505a6100bd908261018f565b949350505050565b60008082600f0b12156100e95760008290036100e18185610167565b91505061009b565b610098828461013c565b60008060408385031215610105578182fd5b82356001600160801b038116811461011b578283fd5b91506020830135600f81900b8114610131578182fd5b809150509250929050565b60006001600160801b0382811684821680830382111561015e5761015e6101a6565b01949350505050565b60006001600160801b0383811690831681811015610187576101876101a6565b039392505050565b6000828210156101a1576101a16101a6565b500390565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220dc03b5e2f0304c9a44e95d1089e564ee0449f33e2faf408e92c405da385d5b5264736f6c63430008040033";
var LiquidityMathTest__factory = /** @class */ (function (_super) {
    __extends(LiquidityMathTest__factory, _super);
    function LiquidityMathTest__factory() {
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
    LiquidityMathTest__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    LiquidityMathTest__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    LiquidityMathTest__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    LiquidityMathTest__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    LiquidityMathTest__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    LiquidityMathTest__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    LiquidityMathTest__factory.bytecode = _bytecode;
    LiquidityMathTest__factory.abi = _abi;
    return LiquidityMathTest__factory;
}(ethers_1.ContractFactory));
exports.LiquidityMathTest__factory = LiquidityMathTest__factory;