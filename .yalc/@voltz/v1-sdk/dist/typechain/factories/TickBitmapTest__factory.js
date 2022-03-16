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
exports.TickBitmapTest__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "int16",
                name: "",
                type: "int16",
            },
        ],
        name: "bitmap",
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
                internalType: "int24",
                name: "tick",
                type: "int24",
            },
        ],
        name: "flipTick",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int24",
                name: "tick",
                type: "int24",
            },
        ],
        name: "getGasCostOfFlipTick",
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
        inputs: [
            {
                internalType: "int24",
                name: "tick",
                type: "int24",
            },
            {
                internalType: "bool",
                name: "lte",
                type: "bool",
            },
        ],
        name: "getGasCostOfNextInitializedTickWithinOneWord",
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
                internalType: "int24",
                name: "tick",
                type: "int24",
            },
        ],
        name: "isInitialized",
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
    {
        inputs: [
            {
                internalType: "int24",
                name: "tick",
                type: "int24",
            },
            {
                internalType: "bool",
                name: "lte",
                type: "bool",
            },
        ],
        name: "nextInitializedTickWithinOneWord",
        outputs: [
            {
                internalType: "int24",
                name: "next",
                type: "int24",
            },
            {
                internalType: "bool",
                name: "initialized",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b506109a2806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80632bdc2fd3146100675780633e7ba2281461008f5780633ffc81ee146100bc5780638815912f146100ea578063f04bc943146100ff578063f0fc922414610112575b600080fd5b61007a6100753660046106b8565b610125565b60405190151581526020015b60405180910390f35b6100a261009d3660046106d2565b610158565b6040805160029390930b8352901515602083015201610086565b6100dc6100ca366004610697565b60006020819052908152604090205481565b604051908152602001610086565b6100fd6100f83660046106b8565b610173565b005b6100dc61010d3660046106b8565b610183565b6100dc6101203660046106d2565b6101a8565b6000808061013681856001806101c9565b915091508360020b8260020b1461014e576000610150565b805b949350505050565b60008061016881856001866101c9565b915091509250929050565b610180600082600161038a565b50565b6000805a9050610196600084600161038a565b5a6101a190826108c0565b9392505050565b6000805a90506101bc6000856001866101c9565b50505a61015090826108c0565b600080806101d785876107b6565b905060008660020b1280156101f757506101f1858761091e565b60020b15155b1561020a5780610206816108fa565b9150505b83156102b95760008061021c83610426565b90925090506000600160ff831681901b9061023790826108c0565b6102419190610779565b600184810b900b600090815260208c905260409020548116801515965090915085610283578861027460ff851687610879565b61027e91906107f0565b6102ae565b8861028d82610443565b61029790856108d7565b6102a49060ff1687610879565b6102ae91906107f0565b965050505050610380565b6000806102cf6102ca846001610733565b610426565b909250905060006102e7600160ff841681901b6108c0565b600184810b900b600090815260208c905260409020549019908116801515965090915085610342578861031b8460ff6108d7565b60ff16610329876001610733565b6103339190610733565b61033d91906107f0565b610379565b888361034d83610548565b61035791906108d7565b60ff16610365876001610733565b61036f9190610733565b61037991906107f0565b9650505050505b5094509492505050565b610394818361091e565b60020b156103e85760405162461bcd60e51b815260206004820152601c60248201527b1d1a58dac81b5d5cdd081899481c1c9bdc195c9b1e481cdc1858d95960221b60448201526064015b60405180910390fd5b6000806103f86102ca84866107b6565b600191820b820b60009081526020979097526040909620805460ff9097169190911b90951890945550505050565b600281900b60081d600061043c6101008461091e565b9050915091565b60008082116104645760405162461bcd60e51b81526004016103df9061070c565b600160801b821061048257608091821c9161047f9082610791565b90505b600160401b82106104a057604091821c9161049d9082610791565b90505b600160201b82106104be57602091821c916104bb9082610791565b90505b6201000082106104db57601091821c916104d89082610791565b90505b61010082106104f757600891821c916104f49082610791565b90505b6010821061051257600491821c9161050f9082610791565b90505b6004821061052d57600291821c9161052a9082610791565b90505b6002821061054357610540600182610791565b90505b919050565b60008082116105695760405162461bcd60e51b81526004016103df9061070c565b5060ff6001600160801b0382161561058d576105866080826108d7565b9050610595565b608082901c91505b6001600160401b038216156105b6576105af6040826108d7565b90506105be565b604082901c91505b63ffffffff8216156105dc576105d56020826108d7565b90506105e4565b602082901c91505b61ffff821615610600576105f96010826108d7565b9050610608565b601082901c91505b60ff8216156106235761061c6008826108d7565b905061062b565b600882901c91505b600f8216156106465761063f6004826108d7565b905061064e565b600482901c91505b6003821615610669576106626002826108d7565b9050610671565b600282901c91505b6001821615610543576105406001826108d7565b8035600281900b811461054357600080fd5b6000602082840312156106a8578081fd5b81358060010b81146101a1578182fd5b6000602082840312156106c9578081fd5b6101a182610685565b600080604083850312156106e4578081fd5b6106ed83610685565b915060208301358015158114610701578182fd5b809150509250929050565b6020808252600d908201526c078206d757374206265203e203609c1b604082015260600190565b60008160020b8360020b82821282627fffff0382138115161561075857610758610940565b82627fffff1903821281161561077057610770610940565b50019392505050565b6000821982111561078c5761078c610940565b500190565b600060ff821660ff84168060ff038211156107ae576107ae610940565b019392505050565b60008160020b8360020b806107cd576107cd610956565b627fffff198214600019821416156107e7576107e7610940565b90059392505050565b60008160020b8360020b627fffff8382138484138383048511828216161561081a5761081a610940565b627fffff198685128281168783058712161561083857610838610940565b87871292508582058712848416161561085357610853610940565b8585058712818416161561086957610869610940565b5050509290910295945050505050565b60008160020b8360020b82811281627fffff190183128115161561089f5761089f610940565b81627fffff0183138116156108b6576108b6610940565b5090039392505050565b6000828210156108d2576108d2610940565b500390565b600060ff821660ff8416808210156108f1576108f1610940565b90039392505050565b60008160020b627fffff1981141561091457610914610940565b6000190192915050565b60008260020b8061093157610931610956565b808360020b0791505092915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fdfea2646970667358221220895460613eb1aa2de19b4377713a811d096cf8e21b3def5969c98deefa33797364736f6c63430008040033";
var TickBitmapTest__factory = /** @class */ (function (_super) {
    __extends(TickBitmapTest__factory, _super);
    function TickBitmapTest__factory() {
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
    TickBitmapTest__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    TickBitmapTest__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    TickBitmapTest__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TickBitmapTest__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TickBitmapTest__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    TickBitmapTest__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    TickBitmapTest__factory.bytecode = _bytecode;
    TickBitmapTest__factory.abi = _abi;
    return TickBitmapTest__factory;
}(ethers_1.ContractFactory));
exports.TickBitmapTest__factory = TickBitmapTest__factory;