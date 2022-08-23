"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterestRateModel__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "cash",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "borrows",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "reserves",
                type: "uint256",
            },
        ],
        name: "getBorrowRate",
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
        name: "isInterestRateModel",
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
];
var InterestRateModel__factory = /** @class */ (function () {
    function InterestRateModel__factory() {
    }
    InterestRateModel__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    InterestRateModel__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    InterestRateModel__factory.abi = _abi;
    return InterestRateModel__factory;
}());
exports.InterestRateModel__factory = InterestRateModel__factory;