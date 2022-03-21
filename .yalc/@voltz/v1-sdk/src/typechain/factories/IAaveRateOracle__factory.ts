/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IAaveRateOracle,
  IAaveRateOracleInterface,
} from "../IAaveRateOracle";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "observationCardinalityNextOld",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "observationCardinalityNextNew",
        type: "uint16",
      },
    ],
    name: "IncreaserateCardinalityNext",
    type: "event",
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
    name: "MinSecondsSinceLastUpdateSet",
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
    name: "OracleBufferWrite",
    type: "event",
  },
  {
    inputs: [],
    name: "aaveLendingPool",
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
        name: "apyFromTo",
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
        name: "from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "to",
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
    inputs: [],
    name: "underlying",
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
    name: "underlyingYieldBearingProtocolID",
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
        name: "termStartTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "termEndTimestamp",
        type: "uint256",
      },
    ],
    name: "variableFactor",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
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
        name: "termStartTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "termEndTimestamp",
        type: "uint256",
      },
    ],
    name: "variableFactorNoCache",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
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

export class IAaveRateOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IAaveRateOracleInterface {
    return new utils.Interface(_abi) as IAaveRateOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAaveRateOracle {
    return new Contract(address, _abi, signerOrProvider) as IAaveRateOracle;
  }
}
