"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ILidoOracle__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "getBeaconSpec",
        outputs: [
            {
                internalType: "uint64",
                name: "epochsPerFrame",
                type: "uint64",
            },
            {
                internalType: "uint64",
                name: "slotsPerEpoch",
                type: "uint64",
            },
            {
                internalType: "uint64",
                name: "secondsPerSlot",
                type: "uint64",
            },
            {
                internalType: "uint64",
                name: "genesisTime",
                type: "uint64",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getCurrentFrame",
        outputs: [
            {
                internalType: "uint256",
                name: "frameEpochId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "frameStartTime",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "frameEndTime",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getLastCompletedEpochId",
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
        name: "getLastCompletedReportDelta",
        outputs: [
            {
                internalType: "uint256",
                name: "postTotalPooledEther",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "preTotalPooledEther",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "timeElapsed",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var ILidoOracle__factory = /** @class */ (function () {
    function ILidoOracle__factory() {
    }
    ILidoOracle__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ILidoOracle__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ILidoOracle__factory.abi = _abi;
    return ILidoOracle__factory;
}());
exports.ILidoOracle__factory = ILidoOracle__factory;