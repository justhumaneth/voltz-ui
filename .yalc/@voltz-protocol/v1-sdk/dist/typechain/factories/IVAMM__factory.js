"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IVAMM__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "AavePoolGetReserveNormalizedIncomeReturnedZero",
        type: "error",
    },
    {
        inputs: [],
        name: "CTokenExchangeRateReturnedZero",
        type: "error",
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
        inputs: [],
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
                internalType: "uint256",
                name: "x",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "y",
                type: "uint256",
            },
        ],
        name: "DebugError",
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
        inputs: [],
        name: "IRSNotionalAmountSpecifiedMustBeNonZero",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidMarginDelta",
        type: "error",
    },
    {
        inputs: [],
        name: "LidoGetPooledEthBySharesReturnedZero",
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
                internalType: "int256",
                name: "marginRequirement",
                type: "int256",
            },
        ],
        name: "MarginRequirementNotMetFCM",
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
        name: "OOO",
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
        name: "RocketPoolGetEthValueReturnedZero",
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
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                indexed: true,
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
            {
                indexed: false,
                internalType: "uint128",
                name: "amount",
                type: "uint128",
            },
        ],
        name: "Burn",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "feeWad",
                type: "uint256",
            },
        ],
        name: "Fee",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "feeProtocol",
                type: "uint8",
            },
        ],
        name: "FeeProtocol",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bool",
                name: "__isAlpha",
                type: "bool",
            },
        ],
        name: "IsAlpha",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                indexed: true,
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
            {
                indexed: false,
                internalType: "uint128",
                name: "amount",
                type: "uint128",
            },
        ],
        name: "Mint",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                indexed: true,
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                indexed: true,
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "desiredNotional",
                type: "int256",
            },
            {
                indexed: false,
                internalType: "uint160",
                name: "sqrtPriceLimitX96",
                type: "uint160",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "cumulativeFeeIncurred",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "fixedTokenDelta",
                type: "int256",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "variableTokenDelta",
                type: "int256",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "fixedTokenDeltaUnbalanced",
                type: "int256",
            },
        ],
        name: "Swap",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint160",
                name: "sqrtPriceX96",
                type: "uint160",
            },
            {
                indexed: false,
                internalType: "int24",
                name: "tick",
                type: "int24",
            },
        ],
        name: "VAMMInitialization",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "int24",
                name: "tick",
                type: "int24",
            },
        ],
        name: "VAMMPriceChange",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
            {
                internalType: "uint128",
                name: "amount",
                type: "uint128",
            },
        ],
        name: "burn",
        outputs: [
            {
                internalType: "int256",
                name: "positionMarginRequirement",
                type: "int256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
        ],
        name: "computeGrowthInside",
        outputs: [
            {
                internalType: "int256",
                name: "fixedTokenGrowthInsideX128",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "variableTokenGrowthInsideX128",
                type: "int256",
            },
            {
                internalType: "uint256",
                name: "feeGrowthInsideX128",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "factory",
        outputs: [
            {
                internalType: "contract IFactory",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "feeGrowthGlobalX128",
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
        name: "feeWad",
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
        name: "fixedTokenGrowthGlobalX128",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IMarginEngine",
                name: "__marginEngine",
                type: "address",
            },
            {
                internalType: "int24",
                name: "__tickSpacing",
                type: "int24",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint160",
                name: "sqrtPriceX96",
                type: "uint160",
            },
        ],
        name: "initializeVAMM",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "isAlpha",
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
        inputs: [],
        name: "liquidity",
        outputs: [
            {
                internalType: "uint128",
                name: "",
                type: "uint128",
            },
        ],
        stateMutability: "view",
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
        inputs: [],
        name: "maxLiquidityPerTick",
        outputs: [
            {
                internalType: "uint128",
                name: "",
                type: "uint128",
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
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
            {
                internalType: "uint128",
                name: "amount",
                type: "uint128",
            },
        ],
        name: "mint",
        outputs: [
            {
                internalType: "int256",
                name: "positionMarginRequirement",
                type: "int256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "protocolFees",
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
                internalType: "uint256",
                name: "_fee",
                type: "uint256",
            },
        ],
        name: "setFee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint8",
                name: "feeProtocol",
                type: "uint8",
            },
        ],
        name: "setFeeProtocol",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "__isAlpha",
                type: "bool",
            },
        ],
        name: "setIsAlpha",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "state",
                type: "bool",
            },
        ],
        name: "setPausability",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "int256",
                        name: "amountSpecified",
                        type: "int256",
                    },
                    {
                        internalType: "uint160",
                        name: "sqrtPriceLimitX96",
                        type: "uint160",
                    },
                    {
                        internalType: "int24",
                        name: "tickLower",
                        type: "int24",
                    },
                    {
                        internalType: "int24",
                        name: "tickUpper",
                        type: "int24",
                    },
                ],
                internalType: "struct IVAMM.SwapParams",
                name: "params",
                type: "tuple",
            },
        ],
        name: "swap",
        outputs: [
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
            {
                internalType: "int256",
                name: "marginRequirement",
                type: "int256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int16",
                name: "wordPosition",
                type: "int16",
            },
        ],
        name: "tickBitmap",
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
        name: "tickSpacing",
        outputs: [
            {
                internalType: "int24",
                name: "",
                type: "int24",
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
        name: "ticks",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint128",
                        name: "liquidityGross",
                        type: "uint128",
                    },
                    {
                        internalType: "int128",
                        name: "liquidityNet",
                        type: "int128",
                    },
                    {
                        internalType: "int256",
                        name: "fixedTokenGrowthOutsideX128",
                        type: "int256",
                    },
                    {
                        internalType: "int256",
                        name: "variableTokenGrowthOutsideX128",
                        type: "int256",
                    },
                    {
                        internalType: "uint256",
                        name: "feeGrowthOutsideX128",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "initialized",
                        type: "bool",
                    },
                ],
                internalType: "struct Tick.Info",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "protocolFeesCollected",
                type: "uint256",
            },
        ],
        name: "updateProtocolFees",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "vammVars",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint160",
                        name: "sqrtPriceX96",
                        type: "uint160",
                    },
                    {
                        internalType: "int24",
                        name: "tick",
                        type: "int24",
                    },
                    {
                        internalType: "uint8",
                        name: "feeProtocol",
                        type: "uint8",
                    },
                ],
                internalType: "struct IVAMM.VAMMVars",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "variableTokenGrowthGlobalX128",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var IVAMM__factory = /** @class */ (function () {
    function IVAMM__factory() {
    }
    IVAMM__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IVAMM__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IVAMM__factory.abi = _abi;
    return IVAMM__factory;
}());
exports.IVAMM__factory = IVAMM__factory;
