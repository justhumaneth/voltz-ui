/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IFactory, IFactoryInterface } from "../IFactory";

const _abi = [
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
        name: "yieldBearingProtocolID",
        type: "uint8",
      },
    ],
    name: "masterFCMs",
    outputs: [
      {
        internalType: "address",
        name: "masterFCMAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
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
];

export class IFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IFactoryInterface {
    return new utils.Interface(_abi) as IFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFactory {
    return new Contract(address, _abi, signerOrProvider) as IFactory;
  }
}