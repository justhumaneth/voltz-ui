"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IRocketNetworkBalances__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "getBalancesBlock",
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
var IRocketNetworkBalances__factory = /** @class */ (function () {
    function IRocketNetworkBalances__factory() {
    }
    IRocketNetworkBalances__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IRocketNetworkBalances__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IRocketNetworkBalances__factory.abi = _abi;
    return IRocketNetworkBalances__factory;
}());
exports.IRocketNetworkBalances__factory = IRocketNetworkBalances__factory;