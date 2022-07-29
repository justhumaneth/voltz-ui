"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC1967UpgradeUpgradeable__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "AdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address",
            },
        ],
        name: "BeaconUpgraded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
];
var ERC1967UpgradeUpgradeable__factory = /** @class */ (function () {
    function ERC1967UpgradeUpgradeable__factory() {
    }
    ERC1967UpgradeUpgradeable__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ERC1967UpgradeUpgradeable__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ERC1967UpgradeUpgradeable__factory.abi = _abi;
    return ERC1967UpgradeUpgradeable__factory;
}());
exports.ERC1967UpgradeUpgradeable__factory = ERC1967UpgradeUpgradeable__factory;
