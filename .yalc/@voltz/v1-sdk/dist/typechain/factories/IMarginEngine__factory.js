"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMarginEngine__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
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
                indexed: false,
                internalType: "uint256",
                name: "cacheMaxAgeInSecondsOld",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "cacheMaxAgeInSeconds",
                type: "uint256",
            },
        ],
        name: "CacheMaxAgeSet",
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
                indexed: false,
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "CollectProtocol",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IFCM",
                name: "fcmOld",
                type: "address",
            },
            {
                indexed: false,
                internalType: "contract IFCM",
                name: "fcm",
                type: "address",
            },
        ],
        name: "FCMSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "secondsAgoOld",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "secondsAgo",
                type: "uint256",
            },
        ],
        name: "HistoricalApyWindowSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: false,
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                indexed: false,
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "fixedTokenBalance",
                type: "int256",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "variableTokenBalance",
                type: "int256",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "margin",
                type: "int256",
            },
            {
                indexed: false,
                internalType: "uint128",
                name: "liquidity",
                type: "uint128",
            },
        ],
        name: "LiquidatePosition",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "liquidatorRewardWadOld",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "liquidatorRewardWad",
                type: "uint256",
            },
        ],
        name: "LiquidatorRewardSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "apyUpperMultiplierWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "apyLowerMultiplierWad",
                        type: "uint256",
                    },
                    {
                        internalType: "int256",
                        name: "sigmaSquaredWad",
                        type: "int256",
                    },
                    {
                        internalType: "int256",
                        name: "alphaWad",
                        type: "int256",
                    },
                    {
                        internalType: "int256",
                        name: "betaWad",
                        type: "int256",
                    },
                    {
                        internalType: "int256",
                        name: "xiUpperWad",
                        type: "int256",
                    },
                    {
                        internalType: "int256",
                        name: "xiLowerWad",
                        type: "int256",
                    },
                    {
                        internalType: "int256",
                        name: "tMaxWad",
                        type: "int256",
                    },
                    {
                        internalType: "uint256",
                        name: "devMulLeftUnwindLMWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "devMulRightUnwindLMWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "devMulLeftUnwindIMWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "devMulRightUnwindIMWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "fixedRateDeviationMinLeftUnwindLMWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "fixedRateDeviationMinRightUnwindLMWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "fixedRateDeviationMinLeftUnwindIMWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "fixedRateDeviationMinRightUnwindIMWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "gammaWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "minMarginToIncentiviseLiquidators",
                        type: "uint256",
                    },
                ],
                indexed: false,
                internalType: "struct IMarginEngine.MarginCalculatorParameters",
                name: "marginCalculatorParametersOld",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "apyUpperMultiplierWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "apyLowerMultiplierWad",
                        type: "uint256",
                    },
                    {
                        internalType: "int256",
                        name: "sigmaSquaredWad",
                        type: "int256",
                    },
                    {
                        internalType: "int256",
                        name: "alphaWad",
                        type: "int256",
                    },
                    {
                        internalType: "int256",
                        name: "betaWad",
                        type: "int256",
                    },
                    {
                        internalType: "int256",
                        name: "xiUpperWad",
                        type: "int256",
                    },
                    {
                        internalType: "int256",
                        name: "xiLowerWad",
                        type: "int256",
                    },
                    {
                        internalType: "int256",
                        name: "tMaxWad",
                        type: "int256",
                    },
                    {
                        internalType: "uint256",
                        name: "devMulLeftUnwindLMWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "devMulRightUnwindLMWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "devMulLeftUnwindIMWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "devMulRightUnwindIMWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "fixedRateDeviationMinLeftUnwindLMWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "fixedRateDeviationMinRightUnwindLMWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "fixedRateDeviationMinLeftUnwindIMWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "fixedRateDeviationMinRightUnwindIMWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "gammaWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "minMarginToIncentiviseLiquidators",
                        type: "uint256",
                    },
                ],
                indexed: false,
                internalType: "struct IMarginEngine.MarginCalculatorParameters",
                name: "marginCalculatorParameters",
                type: "tuple",
            },
        ],
        name: "MarginCalculatorParametersSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: false,
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                indexed: false,
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "fixedTokenBalance",
                type: "int256",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "variableTokenBalance",
                type: "int256",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "margin",
                type: "int256",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "isSettled",
                type: "bool",
            },
        ],
        name: "SettlePosition",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: false,
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                indexed: false,
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "positionMargin",
                type: "int256",
            },
        ],
        name: "UpdatePositionMargin",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: false,
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                indexed: false,
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
            {
                indexed: false,
                internalType: "uint128",
                name: "liquidity",
                type: "uint128",
            },
        ],
        name: "UpdatePositionPostMintBurn",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: false,
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                indexed: false,
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "fixedTokenBalance",
                type: "int256",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "variableTokenBalance",
                type: "int256",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "margin",
                type: "int256",
            },
        ],
        name: "UpdatePositionPostSwap",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IVAMM",
                name: "vammOld",
                type: "address",
            },
            {
                indexed: false,
                internalType: "contract IVAMM",
                name: "vamm",
                type: "address",
            },
        ],
        name: "VAMMSet",
        type: "event",
    },
    {
        inputs: [],
        name: "cacheMaxAgeInSeconds",
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
        name: "collectProtocol",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "fcm",
        outputs: [
            {
                internalType: "contract IFCM",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getHistoricalApy",
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
                internalType: "address",
                name: "_owner",
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
        ],
        name: "getPosition",
        outputs: [
            {
                components: [
                    {
                        internalType: "bool",
                        name: "isSettled",
                        type: "bool",
                    },
                    {
                        internalType: "uint128",
                        name: "_liquidity",
                        type: "uint128",
                    },
                    {
                        internalType: "int256",
                        name: "margin",
                        type: "int256",
                    },
                    {
                        internalType: "int256",
                        name: "fixedTokenGrowthInsideLastX128",
                        type: "int256",
                    },
                    {
                        internalType: "int256",
                        name: "variableTokenGrowthInsideLastX128",
                        type: "int256",
                    },
                    {
                        internalType: "int256",
                        name: "fixedTokenBalance",
                        type: "int256",
                    },
                    {
                        internalType: "int256",
                        name: "variableTokenBalance",
                        type: "int256",
                    },
                    {
                        internalType: "uint256",
                        name: "feeGrowthInsideLastX128",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "rewardPerAmount",
                        type: "uint256",
                    },
                ],
                internalType: "struct Position.Info",
                name: "position",
                type: "tuple",
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
                internalType: "bool",
                name: "isLM",
                type: "bool",
            },
        ],
        name: "getPositionMarginRequirement",
        outputs: [
            {
                internalType: "uint256",
                name: "margin",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
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
                name: "_rateOracleAddress",
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
        ],
        name: "initialize",
        outputs: [],
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
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
        ],
        name: "liquidatePosition",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "liquidatorRewardWad",
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
        name: "rateOracle",
        outputs: [
            {
                internalType: "contract IRateOracle",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "secondsAgo",
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
                name: "_cacheMaxAgeInSeconds",
                type: "uint256",
            },
        ],
        name: "setCacheMaxAgeInSeconds",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_fcm",
                type: "address",
            },
        ],
        name: "setFCM",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_liquidatorRewardWad",
                type: "uint256",
            },
        ],
        name: "setLiquidatorReward",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "apyUpperMultiplierWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "apyLowerMultiplierWad",
                        type: "uint256",
                    },
                    {
                        internalType: "int256",
                        name: "sigmaSquaredWad",
                        type: "int256",
                    },
                    {
                        internalType: "int256",
                        name: "alphaWad",
                        type: "int256",
                    },
                    {
                        internalType: "int256",
                        name: "betaWad",
                        type: "int256",
                    },
                    {
                        internalType: "int256",
                        name: "xiUpperWad",
                        type: "int256",
                    },
                    {
                        internalType: "int256",
                        name: "xiLowerWad",
                        type: "int256",
                    },
                    {
                        internalType: "int256",
                        name: "tMaxWad",
                        type: "int256",
                    },
                    {
                        internalType: "uint256",
                        name: "devMulLeftUnwindLMWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "devMulRightUnwindLMWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "devMulLeftUnwindIMWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "devMulRightUnwindIMWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "fixedRateDeviationMinLeftUnwindLMWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "fixedRateDeviationMinRightUnwindLMWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "fixedRateDeviationMinLeftUnwindIMWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "fixedRateDeviationMinRightUnwindIMWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "gammaWad",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "minMarginToIncentiviseLiquidators",
                        type: "uint256",
                    },
                ],
                internalType: "struct IMarginEngine.MarginCalculatorParameters",
                name: "_marginCalculatorParameters",
                type: "tuple",
            },
        ],
        name: "setMarginCalculatorParameters",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_secondsAgo",
                type: "uint256",
            },
        ],
        name: "setSecondsAgo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_vAMMAddress",
                type: "address",
            },
        ],
        name: "setVAMM",
        outputs: [],
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
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
        ],
        name: "settlePosition",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "termEndTimestampWad",
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
        name: "termStartTimestampWad",
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
                name: "_account",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "marginDelta",
                type: "uint256",
            },
        ],
        name: "transferMarginToFCMTrader",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "underlyingToken",
        outputs: [
            {
                internalType: "contract IERC20Minimal",
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
                internalType: "address",
                name: "_owner",
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
                internalType: "int256",
                name: "marginDelta",
                type: "int256",
            },
        ],
        name: "updatePositionMargin",
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
                        name: "owner",
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
                        internalType: "int128",
                        name: "liquidityDelta",
                        type: "int128",
                    },
                ],
                internalType: "struct IPositionStructs.ModifyPositionParams",
                name: "params",
                type: "tuple",
            },
        ],
        name: "updatePositionPostVAMMInducedMintBurn",
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
                internalType: "address",
                name: "_owner",
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
        name: "updatePositionPostVAMMInducedSwap",
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
        name: "vamm",
        outputs: [
            {
                internalType: "contract IVAMM",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var IMarginEngine__factory = /** @class */ (function () {
    function IMarginEngine__factory() {
    }
    IMarginEngine__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IMarginEngine__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IMarginEngine__factory.abi = _abi;
    return IMarginEngine__factory;
}());
exports.IMarginEngine__factory = IMarginEngine__factory;
