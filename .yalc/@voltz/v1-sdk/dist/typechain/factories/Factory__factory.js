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
exports.Factory__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_masterMarginEngine",
                type: "address",
            },
            {
                internalType: "address",
                name: "_masterVAMM",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "unlocked",
                type: "bool",
            },
        ],
        name: "CanOnlyTradeIfUnlocked",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "marginRequirement",
                type: "uint256",
            },
        ],
        name: "CannotLiquidate",
        type: "error",
    },
    {
        inputs: [],
        name: "CannotSettleBeforeMaturity",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "amount0",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "amount1",
                type: "int256",
            },
        ],
        name: "ExpectedOppositeSigns",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint160",
                name: "sqrtPriceX96",
                type: "uint160",
            },
        ],
        name: "ExpectedSqrtPriceZeroBeforeInit",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "amountSpecified",
                type: "int256",
            },
        ],
        name: "IRSNotionalAmountSpecifiedMustBeNonZero",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidMarginDelta",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint128",
                name: "amount",
                type: "uint128",
            },
        ],
        name: "LiquidityDeltaMustBePositiveInBurn",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint128",
                name: "amount",
                type: "uint128",
            },
        ],
        name: "LiquidityDeltaMustBePositiveInMint",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "marginRequirement",
                type: "int256",
            },
        ],
        name: "MarginLessThanMinimum",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "marginRequirement",
                type: "int256",
            },
            {
                internalType: "int24",
                name: "tick",
                type: "int24",
            },
            {
                internalType: "int256",
                name: "fixedTokenDelta",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "variableTokenDelta",
                type: "int256",
            },
            {
                internalType: "uint256",
                name: "cumulativeFeeIncurred",
                type: "uint256",
            },
            {
                internalType: "int256",
                name: "fixedTokenDeltaUnbalanced",
                type: "int256",
            },
        ],
        name: "MarginRequirementNotMet",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "requested",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "available",
                type: "uint256",
            },
        ],
        name: "NotEnoughFunds",
        type: "error",
    },
    {
        inputs: [],
        name: "OnlyFCM",
        type: "error",
    },
    {
        inputs: [],
        name: "OnlyMarginEngine",
        type: "error",
    },
    {
        inputs: [],
        name: "OnlyOwnerCanUpdatePosition",
        type: "error",
    },
    {
        inputs: [],
        name: "OnlyVAMM",
        type: "error",
    },
    {
        inputs: [],
        name: "PositionNetZero",
        type: "error",
    },
    {
        inputs: [],
        name: "PositionNotSettled",
        type: "error",
    },
    {
        inputs: [],
        name: "WithdrawalExceedsCurrentMargin",
        type: "error",
    },
    {
        inputs: [],
        name: "closeToOrBeyondMaturity",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "underlyingToken",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "rateOracle",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "termStartTimestampWad",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "termEndTimestampWad",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "int24",
                name: "tickSpacing",
                type: "int24",
            },
            {
                indexed: false,
                internalType: "address",
                name: "marginEngine",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "vamm",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "fcm",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "yieldBearingProtocolID",
                type: "uint8",
            },
        ],
        name: "IrsInstanceDeployed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "masterFCMAddressOld",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "masterFCMAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "yieldBearingProtocolID",
                type: "uint8",
            },
        ],
        name: "MasterFCMSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_underlyingToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "_rateOracle",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_termStartTimestampWad",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_termEndTimestampWad",
                type: "uint256",
            },
            {
                internalType: "int24",
                name: "_tickSpacing",
                type: "int24",
            },
        ],
        name: "deployIrsInstance",
        outputs: [
            {
                internalType: "address",
                name: "marginEngineProxy",
                type: "address",
            },
            {
                internalType: "address",
                name: "vammProxy",
                type: "address",
            },
            {
                internalType: "address",
                name: "fcmProxy",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
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
                internalType: "address",
                name: "intAddress",
                type: "address",
            },
        ],
        name: "isApproved",
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
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        name: "masterFCMs",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "masterMarginEngine",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "masterVAMM",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "intAddress",
                type: "address",
            },
            {
                internalType: "bool",
                name: "allowIntegration",
                type: "bool",
            },
        ],
        name: "setApproval",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "masterFCMAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "_rateOracle",
                type: "address",
            },
        ],
        name: "setMasterFCM",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b506040516116b33803806116b383398101604081905261002f916100d5565b61003833610069565b600180546001600160a01b039384166001600160a01b03199182161790915560028054929093169116179055610107565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146100d057600080fd5b919050565b600080604083850312156100e7578182fd5b6100f0836100b9565b91506100fe602084016100b9565b90509250929050565b61159d806101166000396000f3fe60806040523480156200001157600080fd5b50600436106200009a5760003560e01c80630e8a0648146200009f578063715018a614620000e55780638da5cb5b14620000f15780638e496b3e146200010a5780639fe1b3541462000121578063a389783e1462000135578063ca5183b71462000185578063db9b717014620001b1578063f2fde38b14620001fa578063febfe75e1462000211575b600080fd5b620000b6620000b036600462000c76565b62000225565b604080516001600160a01b03948516815292841660208401529216918101919091526060015b60405180910390f35b620000ef620008d1565b005b620000fb62000913565b604051620000dc919062000d53565b620000ef6200011b36600462000c39565b62000922565b600154620000fb906001600160a01b031681565b620001746200014636600462000c39565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b6040519015158152602001620000dc565b620000fb6200019636600462000d15565b6003602052600090815260409020546001600160a01b031681565b620000ef620001c236600462000ce0565b3360009081526004602090815260408083206001600160a01b0395909516835293905291909120805460ff1916911515919091179055565b620000ef6200020b36600462000bf4565b62000aed565b600254620000fb906001600160a01b031681565b60008080336200023462000913565b6001600160a01b031614620002665760405162461bcd60e51b81526004016200025d9062000d8a565b60405180910390fd5b60008460020b1380156200027e57506140008460020b125b620002b45760405162461bcd60e51b81526020600482015260056024820152642a29a7a7a160d91b60448201526064016200025d565b6001546040516000916001600160a01b031690620002d29062000be6565b620002de919062000d67565b604051809103906000f080158015620002fb573d6000803e3d6000fd5b506002546040519192506000916001600160a01b03909116906200031f9062000be6565b6200032b919062000d67565b604051809103906000f08015801562000348573d6000803e3d6000fd5b5060405163eb990c5960e01b81526001600160a01b038c811660048301528b81166024830152604482018b9052606482018a90529192509083169063eb990c5990608401600060405180830381600087803b158015620003a757600080fd5b505af1158015620003bc573d6000803e3d6000fd5b5050604051631b325b2160e31b81526001600160a01b03858116600483015260028a900b60248301528416925063d992d9089150604401600060405180830381600087803b1580156200040e57600080fd5b505af115801562000423573d6000803e3d6000fd5b50506040516331d81ea760e21b81526001600160a01b038516925063c7607a9c91506200045590849060040162000d53565b600060405180830381600087803b1580156200047057600080fd5b505af115801562000485573d6000803e3d6000fd5b5050505060008990508a6001600160a01b0316816001600160a01b0316636f307dc36040518163ffffffff1660e01b815260040160206040518083038186803b158015620004d257600080fd5b505afa158015620004e7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200050d919062000c1a565b6001600160a01b0316146200055b5760405162461bcd60e51b81526020600482015260136024820152720a8ded6cadce640c8de40dcdee840dac2e8c6d606b1b60448201526064016200025d565b6000816001600160a01b031663dd9d05d16040518163ffffffff1660e01b815260040160206040518083038186803b1580156200059757600080fd5b505afa158015620005ac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620005d2919062000d34565b60ff8116600090815260036020526040812054919250906001600160a01b031615620007815760ff8216600090815260036020526040908190205490516001600160a01b03909116908190620006289062000be6565b62000634919062000d67565b604051809103906000f08015801562000651573d6000803e3d6000fd5b5060405163485cc95560e01b81526001600160a01b03878116600483015288811660248301529193509083169063485cc95590604401600060405180830381600087803b158015620006a257600080fd5b505af1158015620006b7573d6000803e3d6000fd5b505060405163534d337560e01b81526001600160a01b038916925063534d33759150620006e990859060040162000d53565b600060405180830381600087803b1580156200070457600080fd5b505af115801562000719573d6000803e3d6000fd5b505060405163f2fde38b60e01b81526001600160a01b038516925063f2fde38b91506200074b90339060040162000d53565b600060405180830381600087803b1580156200076657600080fd5b505af11580156200077b573d6000803e3d6000fd5b50505050505b604080518c8152602081018c905260028b900b918101919091526001600160a01b038681166060830152858116608083015282811660a083015260ff841660c0830152808e1691908f16907f500781bba4ad6f1bf0c19c292590fadbc7485e159320b34f7f289a41bb2104bb9060e00160405180910390a360405163f2fde38b60e01b81526001600160a01b0385169063f2fde38b906200082790339060040162000d53565b600060405180830381600087803b1580156200084257600080fd5b505af115801562000857573d6000803e3d6000fd5b505060405163f2fde38b60e01b81526001600160a01b038816925063f2fde38b91506200088990339060040162000d53565b600060405180830381600087803b158015620008a457600080fd5b505af1158015620008b9573d6000803e3d6000fd5b50969f959e50919c50939a5050505050505050505050565b33620008dc62000913565b6001600160a01b031614620009055760405162461bcd60e51b81526004016200025d9062000d8a565b62000911600062000b96565b565b6000546001600160a01b031690565b336200092d62000913565b6001600160a01b031614620009565760405162461bcd60e51b81526004016200025d9062000d8a565b6001600160a01b038116620009a75760405162461bcd60e51b81526020600482015260166024820152751c985d19481bdc9858db19481b5d5cdd08195e1a5cdd60521b60448201526064016200025d565b6001600160a01b038216620009f75760405162461bcd60e51b81526020600482015260156024820152741b585cdd195c881998db481b5d5cdd08195e1a5cdd605a1b60448201526064016200025d565b6000816001600160a01b031663dd9d05d16040518163ffffffff1660e01b815260040160206040518083038186803b15801562000a3357600080fd5b505afa15801562000a48573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000a6e919062000d34565b60ff811660008181526003602090815260409182902080546001600160a01b031981166001600160a01b038a81169182179093558451929091168083529282015291820192909252919250907f3b7fdd829c73ac5e9bb3826c82078b325cb172e3a07f7d8b9f715bce40862a7d9060600160405180910390a150505050565b3362000af862000913565b6001600160a01b03161462000b215760405162461bcd60e51b81526004016200025d9062000d8a565b6001600160a01b03811662000b885760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016200025d565b62000b938162000b96565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6107828062000de683390190565b60006020828403121562000c06578081fd5b813562000c138162000dbf565b9392505050565b60006020828403121562000c2c578081fd5b815162000c138162000dbf565b6000806040838503121562000c4c578081fd5b823562000c598162000dbf565b9150602083013562000c6b8162000dbf565b809150509250929050565b600080600080600060a0868803121562000c8e578081fd5b853562000c9b8162000dbf565b9450602086013562000cad8162000dbf565b935060408601359250606086013591506080860135600281900b811462000cd2578182fd5b809150509295509295909350565b6000806040838503121562000cf3578182fd5b823562000d008162000dbf565b91506020830135801515811462000c6b578182fd5b60006020828403121562000d27578081fd5b813562000c138162000dd5565b60006020828403121562000d46578081fd5b815162000c138162000dd5565b6001600160a01b0391909116815260200190565b6001600160a01b0391909116815260406020820181905260009082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6001600160a01b038116811462000b9357600080fd5b60ff8116811462000b9357600080fdfe608060405260405161078238038061078283398101604081905261002291610307565b818161004f60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd61041f565b60008051602061073b8339815191521461007957634e487b7160e01b600052600160045260246000fd5b6100858282600061008e565b50505050610484565b610097836100c4565b6000825111806100a45750805b156100bf576100bd838361010460201b6100291760201c565b505b505050565b6100cd81610130565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060610129838360405180606001604052806027815260200161075b602791396101f0565b9392505050565b610143816102c560201b6100551760201c565b6101aa5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101cf60008051602061073b83398151915260001b6102cb60201b61005b1760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060833b61024f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016101a1565b600080856001600160a01b03168560405161026a91906103d0565b600060405180830381855af49150503d80600081146102a5576040519150601f19603f3d011682016040523d82523d6000602084013e6102aa565b606091505b5090925090506102bb8282866102ce565b9695505050505050565b3b151590565b90565b606083156102dd575081610129565b8251156102ed5782518084602001fd5b8160405162461bcd60e51b81526004016101a191906103ec565b60008060408385031215610319578182fd5b82516001600160a01b038116811461032f578283fd5b60208401519092506001600160401b038082111561034b578283fd5b818501915085601f83011261035e578283fd5b8151818111156103705761037061046e565b604051601f8201601f19908116603f011681019083821181831017156103985761039861046e565b816040528281528860208487010111156103b0578586fd5b6103c1836020830160208801610442565b80955050505050509250929050565b600082516103e2818460208701610442565b9190910192915050565b602081526000825180602084015261040b816040850160208701610442565b601f01601f19169190910160400192915050565b60008282101561043d57634e487b7160e01b81526011600452602481fd5b500390565b60005b8381101561045d578181015183820152602001610445565b838111156100bd5750506000910152565b634e487b7160e01b600052604160045260246000fd5b6102a8806104936000396000f3fe60806040523661001357610011610017565b005b6100115b61002761002261005e565b610096565b565b606061004e838360405180606001604052806027815260200161024c602791396100ba565b9392505050565b3b151590565b90565b60006100917f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b3660008037600080366000845af43d6000803e8080156100b5573d6000f35b3d6000fd5b6060833b61011e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b03168560405161013991906101cc565b600060405180830381855af49150503d8060008114610174576040519150601f19603f3d011682016040523d82523d6000602084013e610179565b606091505b5091509150610189828286610193565b9695505050505050565b606083156101a257508161004e565b8251156101b25782518084602001fd5b8160405162461bcd60e51b815260040161011591906101e8565b600082516101de81846020870161021b565b9190910192915050565b602081526000825180602084015261020781604085016020870161021b565b601f01601f19169190910160400192915050565b60005b8381101561023657818101518382015260200161021e565b83811115610245576000848401525b5050505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212206ff46e5a225d6a251c5eda8d1bbe4a31773662709814465ada193c3b55f2884964736f6c63430008040033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212202fc74d3d776c10462ebcdbbe8fe89768d2d44061e7c9ac4d71e52b83c23bff2f64736f6c63430008040033";
var Factory__factory = /** @class */ (function (_super) {
    __extends(Factory__factory, _super);
    function Factory__factory() {
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
    Factory__factory.prototype.deploy = function (_masterMarginEngine, _masterVAMM, overrides) {
        return _super.prototype.deploy.call(this, _masterMarginEngine, _masterVAMM, overrides || {});
    };
    Factory__factory.prototype.getDeployTransaction = function (_masterMarginEngine, _masterVAMM, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _masterMarginEngine, _masterVAMM, overrides || {});
    };
    Factory__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Factory__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Factory__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Factory__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Factory__factory.bytecode = _bytecode;
    Factory__factory.abi = _abi;
    return Factory__factory;
}(ethers_1.ContractFactory));
exports.Factory__factory = Factory__factory;
