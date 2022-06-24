"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRateOracle__factory = void 0;
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
        inputs: [
            {
                internalType: "uint256",
                name: "x",
                type: "uint256",
            },
        ],
        name: "PRBMathUD60x18__Exp2InputTooBig",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "x",
                type: "uint256",
            },
        ],
        name: "PRBMathUD60x18__FromUintOverflow",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "x",
                type: "uint256",
            },
        ],
        name: "PRBMathUD60x18__LogInputTooSmall",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "prod1",
                type: "uint256",
            },
        ],
        name: "PRBMath__MulDivFixedPointOverflow",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "prod1",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "denominator",
                type: "uint256",
            },
        ],
        name: "PRBMath__MulDivOverflow",
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
                internalType: "uint256",
                name: "_minSecondsSinceLastUpdate",
                type: "uint256",
            },
        ],
        name: "MinSecondsSinceLastUpdate",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "blockTimestampScaled",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "source",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint16",
                name: "index",
                type: "uint16",
            },
            {
                indexed: false,
                internalType: "uint32",
                name: "blockTimestamp",
                type: "uint32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "observedValue",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint16",
                name: "cardinality",
                type: "uint16",
            },
            {
                indexed: false,
                internalType: "uint16",
                name: "cardinalityNext",
                type: "uint16",
            },
        ],
        name: "OracleBufferUpdate",
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
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint16",
                name: "observationCardinalityNextNew",
                type: "uint16",
            },
        ],
        name: "RateCardinalityNext",
        type: "event",
    },
    {
        inputs: [],
        name: "ONE_IN_WAD",
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
        name: "UNDERLYING_YIELD_BEARING_PROTOCOL_ID",
        outputs: [
            {
                internalType: "uint8",
                name: "yieldBearingProtocolID",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "from",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "to",
                type: "uint256",
            },
        ],
        name: "getApyFromTo",
        outputs: [
            {
                internalType: "uint256",
                name: "apyFromToWad",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getCurrentRateInRay",
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
                name: "_from",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_to",
                type: "uint256",
            },
        ],
        name: "getRateFromTo",
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
                internalType: "uint16",
                name: "rateCardinalityNext",
                type: "uint16",
            },
        ],
        name: "increaseObservationCardinalityNext",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "beforeOrAtRateValueRay",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "apyFromBeforeOrAtToAtOrAfterWad",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "timeDeltaBeforeOrAtToQueriedTimeWad",
                type: "uint256",
            },
        ],
        name: "interpolateRateValue",
        outputs: [
            {
                internalType: "uint256",
                name: "rateValueRay",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "minSecondsSinceLastUpdate",
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
                name: "",
                type: "uint256",
            },
        ],
        name: "observations",
        outputs: [
            {
                internalType: "uint32",
                name: "blockTimestamp",
                type: "uint32",
            },
            {
                internalType: "uint216",
                name: "observedValue",
                type: "uint216",
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
    {
        inputs: [],
        name: "oracleVars",
        outputs: [
            {
                internalType: "uint16",
                name: "rateIndex",
                type: "uint16",
            },
            {
                internalType: "uint16",
                name: "rateCardinality",
                type: "uint16",
            },
            {
                internalType: "uint16",
                name: "rateCardinalityNext",
                type: "uint16",
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
                internalType: "uint256",
                name: "_minSecondsSinceLastUpdate",
                type: "uint256",
            },
        ],
        name: "setMinSecondsSinceLastUpdate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
        ],
        name: "settlementRateCache",
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
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "underlying",
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
                internalType: "uint256",
                name: "termStartTimestampInWeiSeconds",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "termEndTimestampInWeiSeconds",
                type: "uint256",
            },
        ],
        name: "variableFactor",
        outputs: [
            {
                internalType: "uint256",
                name: "resultWad",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "termStartTimestampInWeiSeconds",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "termEndTimestampInWeiSeconds",
                type: "uint256",
            },
        ],
        name: "variableFactorNoCache",
        outputs: [
            {
                internalType: "uint256",
                name: "resultWad",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "writeOracleEntry",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var BaseRateOracle__factory = /** @class */ (function () {
    function BaseRateOracle__factory() {
    }
    BaseRateOracle__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    BaseRateOracle__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    BaseRateOracle__factory.abi = _abi;
    return BaseRateOracle__factory;
}());
exports.BaseRateOracle__factory = BaseRateOracle__factory;
