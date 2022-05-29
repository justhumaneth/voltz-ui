/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPeriphery, IPeripheryInterface } from "../IPeriphery";

const _abi = [
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
        internalType: "contract IVAMM",
        name: "_vamm",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "_lpMarginCapNew",
        type: "int256",
      },
    ],
    name: "MarginCap",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IMarginEngine",
        name: "marginEngine",
        type: "address",
      },
    ],
    name: "getCurrentTick",
    outputs: [
      {
        internalType: "int24",
        name: "currentTick",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IVAMM",
        name: "_vamm",
        type: "address",
      },
    ],
    name: "lpMarginCaps",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IVAMM",
        name: "_vamm",
        type: "address",
      },
    ],
    name: "lpMarginCumulatives",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IMarginEngine",
            name: "marginEngine",
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
            internalType: "uint256",
            name: "notional",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isMint",
            type: "bool",
          },
          {
            internalType: "int256",
            name: "marginDelta",
            type: "int256",
          },
        ],
        internalType: "struct IPeriphery.MintOrBurnParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "mintOrBurn",
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
        internalType: "contract IVAMM",
        name: "_vamm",
        type: "address",
      },
      {
        internalType: "int256",
        name: "_lpMarginCapNew",
        type: "int256",
      },
    ],
    name: "setLPMarginCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarginEngine",
        name: "_marginEngine",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "int24",
        name: "_tickLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "_tickUpper",
        type: "int24",
      },
    ],
    name: "settlePositionAndWithdrawMargin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IMarginEngine",
            name: "marginEngine",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isFT",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "notional",
            type: "uint256",
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
          {
            internalType: "uint256",
            name: "marginDelta",
            type: "uint256",
          },
        ],
        internalType: "struct IPeriphery.SwapPeripheryParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "int256",
        name: "_fixedTokenDelta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "_variableTokenDelta",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "_cumulativeFeeIncurred",
        type: "uint256",
      },
      {
        internalType: "int256",
        name: "_fixedTokenDeltaUnbalanced",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "_marginRequirement",
        type: "int256",
      },
      {
        internalType: "int24",
        name: "_tickAfter",
        type: "int24",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarginEngine",
        name: "_marginEngine",
        type: "address",
      },
      {
        internalType: "int24",
        name: "_tickLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "_tickUpper",
        type: "int24",
      },
      {
        internalType: "int256",
        name: "_marginDelta",
        type: "int256",
      },
      {
        internalType: "bool",
        name: "_fullyWithdraw",
        type: "bool",
      },
    ],
    name: "updatePositionMargin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IPeriphery__factory {
  static readonly abi = _abi;
  static createInterface(): IPeripheryInterface {
    return new utils.Interface(_abi) as IPeripheryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPeriphery {
    return new Contract(address, _abi, signerOrProvider) as IPeriphery;
  }
}
