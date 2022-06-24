/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface TestRocketPoolRateOracleInterface extends ethers.utils.Interface {
  functions: {
    "ONE_IN_WAD()": FunctionFragment;
    "UNDERLYING_YIELD_BEARING_PROTOCOL_ID()": FunctionFragment;
    "binarySearch(uint32)": FunctionFragment;
    "getApyFromTo(uint256,uint256)": FunctionFragment;
    "getCurrentRateInRay()": FunctionFragment;
    "getLatestRateValue()": FunctionFragment;
    "getRate(uint16)": FunctionFragment;
    "getRateFromTo(uint256,uint256)": FunctionFragment;
    "increaseObservationCardinalityNext(uint16)": FunctionFragment;
    "interpolateRateValue(uint256,uint256,uint256)": FunctionFragment;
    "minSecondsSinceLastUpdate()": FunctionFragment;
    "observations(uint256)": FunctionFragment;
    "oracleVars()": FunctionFragment;
    "owner()": FunctionFragment;
    "rayValueIsCloseTo(uint256,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rocketEth()": FunctionFragment;
    "setMinSecondsSinceLastUpdate(uint256)": FunctionFragment;
    "settlementRateCache(uint32,uint32)": FunctionFragment;
    "testComputeApyFromRate(uint256,uint256)": FunctionFragment;
    "testGetSurroundingRates(uint32)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "underlying()": FunctionFragment;
    "variableFactor(uint256,uint256)": FunctionFragment;
    "variableFactorNoCache(uint256,uint256)": FunctionFragment;
    "writeOracleEntry()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ONE_IN_WAD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UNDERLYING_YIELD_BEARING_PROTOCOL_ID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "binarySearch",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getApyFromTo",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentRateInRay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLatestRateValue",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRateFromTo",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseObservationCardinalityNext",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "interpolateRateValue",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "minSecondsSinceLastUpdate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "observations",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "oracleVars",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rayValueIsCloseTo",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "rocketEth", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setMinSecondsSinceLastUpdate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "settlementRateCache",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "testComputeApyFromRate",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "testGetSurroundingRates",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "underlying",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "variableFactor",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "variableFactorNoCache",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "writeOracleEntry",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "ONE_IN_WAD", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "UNDERLYING_YIELD_BEARING_PROTOCOL_ID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "binarySearch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getApyFromTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentRateInRay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLatestRateValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRateFromTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseObservationCardinalityNext",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "interpolateRateValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minSecondsSinceLastUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "observations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "oracleVars", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rayValueIsCloseTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rocketEth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMinSecondsSinceLastUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settlementRateCache",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testComputeApyFromRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testGetSurroundingRates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "variableFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "variableFactorNoCache",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "writeOracleEntry",
    data: BytesLike
  ): Result;

  events: {
    "MinSecondsSinceLastUpdate(uint256)": EventFragment;
    "OracleBufferUpdate(uint256,address,uint16,uint32,uint256,uint16,uint16)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RateCardinalityNext(uint16)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MinSecondsSinceLastUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OracleBufferUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RateCardinalityNext"): EventFragment;
}

export type MinSecondsSinceLastUpdateEvent = TypedEvent<
  [BigNumber] & { _minSecondsSinceLastUpdate: BigNumber }
>;

export type OracleBufferUpdateEvent = TypedEvent<
  [BigNumber, string, number, number, BigNumber, number, number] & {
    blockTimestampScaled: BigNumber;
    source: string;
    index: number;
    blockTimestamp: number;
    observedValue: BigNumber;
    cardinality: number;
    cardinalityNext: number;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type RateCardinalityNextEvent = TypedEvent<
  [number] & { observationCardinalityNextNew: number }
>;

export class TestRocketPoolRateOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TestRocketPoolRateOracleInterface;

  functions: {
    ONE_IN_WAD(overrides?: CallOverrides): Promise<[BigNumber]>;

    UNDERLYING_YIELD_BEARING_PROTOCOL_ID(
      overrides?: CallOverrides
    ): Promise<[number]>;

    binarySearch(
      target: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [number, BigNumber, boolean] & {
          blockTimestamp: number;
          observedValue: BigNumber;
          initialized: boolean;
        },
        [number, BigNumber, boolean] & {
          blockTimestamp: number;
          observedValue: BigNumber;
          initialized: boolean;
        }
      ] & {
        beforeOrAt: [number, BigNumber, boolean] & {
          blockTimestamp: number;
          observedValue: BigNumber;
          initialized: boolean;
        };
        atOrAfter: [number, BigNumber, boolean] & {
          blockTimestamp: number;
          observedValue: BigNumber;
          initialized: boolean;
        };
      }
    >;

    getApyFromTo(
      from: BigNumberish,
      to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { apyFromToWad: BigNumber }>;

    getCurrentRateInRay(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { resultRay: BigNumber }>;

    getLatestRateValue(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRate(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getRateFromTo(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    increaseObservationCardinalityNext(
      rateCardinalityNext: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    interpolateRateValue(
      beforeOrAtRateValueRay: BigNumberish,
      apyFromBeforeOrAtToAtOrAfterWad: BigNumberish,
      timeDeltaBeforeOrAtToQueriedTimeWad: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rateValueRay: BigNumber }>;

    minSecondsSinceLastUpdate(overrides?: CallOverrides): Promise<[BigNumber]>;

    observations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber, boolean] & {
        blockTimestamp: number;
        observedValue: BigNumber;
        initialized: boolean;
      }
    >;

    oracleVars(
      overrides?: CallOverrides
    ): Promise<
      [number, number, number] & {
        rateIndex: number;
        rateCardinality: number;
        rateCardinalityNext: number;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    rayValueIsCloseTo(
      observedValueInRay: BigNumberish,
      expectedValueInRay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rocketEth(overrides?: CallOverrides): Promise<[string]>;

    setMinSecondsSinceLastUpdate(
      _minSecondsSinceLastUpdate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    settlementRateCache(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    testComputeApyFromRate(
      rateFromTo: BigNumberish,
      timeInYears: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    testGetSurroundingRates(
      target: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        latestBeforeOrAtRateValue: BigNumber;
        latestAfterOrAtRateValue: BigNumber;
      }
    >;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    underlying(overrides?: CallOverrides): Promise<[string]>;

    variableFactor(
      termStartTimestampInWeiSeconds: BigNumberish,
      termEndTimestampInWeiSeconds: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    variableFactorNoCache(
      termStartTimestampInWeiSeconds: BigNumberish,
      termEndTimestampInWeiSeconds: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { resultWad: BigNumber }>;

    writeOracleEntry(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  ONE_IN_WAD(overrides?: CallOverrides): Promise<BigNumber>;

  UNDERLYING_YIELD_BEARING_PROTOCOL_ID(
    overrides?: CallOverrides
  ): Promise<number>;

  binarySearch(
    target: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      [number, BigNumber, boolean] & {
        blockTimestamp: number;
        observedValue: BigNumber;
        initialized: boolean;
      },
      [number, BigNumber, boolean] & {
        blockTimestamp: number;
        observedValue: BigNumber;
        initialized: boolean;
      }
    ] & {
      beforeOrAt: [number, BigNumber, boolean] & {
        blockTimestamp: number;
        observedValue: BigNumber;
        initialized: boolean;
      };
      atOrAfter: [number, BigNumber, boolean] & {
        blockTimestamp: number;
        observedValue: BigNumber;
        initialized: boolean;
      };
    }
  >;

  getApyFromTo(
    from: BigNumberish,
    to: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCurrentRateInRay(overrides?: CallOverrides): Promise<BigNumber>;

  getLatestRateValue(overrides?: CallOverrides): Promise<BigNumber>;

  getRate(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  getRateFromTo(
    _from: BigNumberish,
    _to: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  increaseObservationCardinalityNext(
    rateCardinalityNext: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  interpolateRateValue(
    beforeOrAtRateValueRay: BigNumberish,
    apyFromBeforeOrAtToAtOrAfterWad: BigNumberish,
    timeDeltaBeforeOrAtToQueriedTimeWad: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  minSecondsSinceLastUpdate(overrides?: CallOverrides): Promise<BigNumber>;

  observations(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [number, BigNumber, boolean] & {
      blockTimestamp: number;
      observedValue: BigNumber;
      initialized: boolean;
    }
  >;

  oracleVars(
    overrides?: CallOverrides
  ): Promise<
    [number, number, number] & {
      rateIndex: number;
      rateCardinality: number;
      rateCardinalityNext: number;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  rayValueIsCloseTo(
    observedValueInRay: BigNumberish,
    expectedValueInRay: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rocketEth(overrides?: CallOverrides): Promise<string>;

  setMinSecondsSinceLastUpdate(
    _minSecondsSinceLastUpdate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  settlementRateCache(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  testComputeApyFromRate(
    rateFromTo: BigNumberish,
    timeInYears: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  testGetSurroundingRates(
    target: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      latestBeforeOrAtRateValue: BigNumber;
      latestAfterOrAtRateValue: BigNumber;
    }
  >;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  underlying(overrides?: CallOverrides): Promise<string>;

  variableFactor(
    termStartTimestampInWeiSeconds: BigNumberish,
    termEndTimestampInWeiSeconds: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  variableFactorNoCache(
    termStartTimestampInWeiSeconds: BigNumberish,
    termEndTimestampInWeiSeconds: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  writeOracleEntry(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ONE_IN_WAD(overrides?: CallOverrides): Promise<BigNumber>;

    UNDERLYING_YIELD_BEARING_PROTOCOL_ID(
      overrides?: CallOverrides
    ): Promise<number>;

    binarySearch(
      target: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [number, BigNumber, boolean] & {
          blockTimestamp: number;
          observedValue: BigNumber;
          initialized: boolean;
        },
        [number, BigNumber, boolean] & {
          blockTimestamp: number;
          observedValue: BigNumber;
          initialized: boolean;
        }
      ] & {
        beforeOrAt: [number, BigNumber, boolean] & {
          blockTimestamp: number;
          observedValue: BigNumber;
          initialized: boolean;
        };
        atOrAfter: [number, BigNumber, boolean] & {
          blockTimestamp: number;
          observedValue: BigNumber;
          initialized: boolean;
        };
      }
    >;

    getApyFromTo(
      from: BigNumberish,
      to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentRateInRay(overrides?: CallOverrides): Promise<BigNumber>;

    getLatestRateValue(overrides?: CallOverrides): Promise<BigNumber>;

    getRate(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getRateFromTo(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseObservationCardinalityNext(
      rateCardinalityNext: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    interpolateRateValue(
      beforeOrAtRateValueRay: BigNumberish,
      apyFromBeforeOrAtToAtOrAfterWad: BigNumberish,
      timeDeltaBeforeOrAtToQueriedTimeWad: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minSecondsSinceLastUpdate(overrides?: CallOverrides): Promise<BigNumber>;

    observations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber, boolean] & {
        blockTimestamp: number;
        observedValue: BigNumber;
        initialized: boolean;
      }
    >;

    oracleVars(
      overrides?: CallOverrides
    ): Promise<
      [number, number, number] & {
        rateIndex: number;
        rateCardinality: number;
        rateCardinalityNext: number;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    rayValueIsCloseTo(
      observedValueInRay: BigNumberish,
      expectedValueInRay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rocketEth(overrides?: CallOverrides): Promise<string>;

    setMinSecondsSinceLastUpdate(
      _minSecondsSinceLastUpdate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    settlementRateCache(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testComputeApyFromRate(
      rateFromTo: BigNumberish,
      timeInYears: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testGetSurroundingRates(
      target: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        latestBeforeOrAtRateValue: BigNumber;
        latestAfterOrAtRateValue: BigNumber;
      }
    >;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    underlying(overrides?: CallOverrides): Promise<string>;

    variableFactor(
      termStartTimestampInWeiSeconds: BigNumberish,
      termEndTimestampInWeiSeconds: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    variableFactorNoCache(
      termStartTimestampInWeiSeconds: BigNumberish,
      termEndTimestampInWeiSeconds: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    writeOracleEntry(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "MinSecondsSinceLastUpdate(uint256)"(
      _minSecondsSinceLastUpdate?: null
    ): TypedEventFilter<[BigNumber], { _minSecondsSinceLastUpdate: BigNumber }>;

    MinSecondsSinceLastUpdate(
      _minSecondsSinceLastUpdate?: null
    ): TypedEventFilter<[BigNumber], { _minSecondsSinceLastUpdate: BigNumber }>;

    "OracleBufferUpdate(uint256,address,uint16,uint32,uint256,uint16,uint16)"(
      blockTimestampScaled?: null,
      source?: null,
      index?: null,
      blockTimestamp?: null,
      observedValue?: null,
      cardinality?: null,
      cardinalityNext?: null
    ): TypedEventFilter<
      [BigNumber, string, number, number, BigNumber, number, number],
      {
        blockTimestampScaled: BigNumber;
        source: string;
        index: number;
        blockTimestamp: number;
        observedValue: BigNumber;
        cardinality: number;
        cardinalityNext: number;
      }
    >;

    OracleBufferUpdate(
      blockTimestampScaled?: null,
      source?: null,
      index?: null,
      blockTimestamp?: null,
      observedValue?: null,
      cardinality?: null,
      cardinalityNext?: null
    ): TypedEventFilter<
      [BigNumber, string, number, number, BigNumber, number, number],
      {
        blockTimestampScaled: BigNumber;
        source: string;
        index: number;
        blockTimestamp: number;
        observedValue: BigNumber;
        cardinality: number;
        cardinalityNext: number;
      }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "RateCardinalityNext(uint16)"(
      observationCardinalityNextNew?: null
    ): TypedEventFilter<[number], { observationCardinalityNextNew: number }>;

    RateCardinalityNext(
      observationCardinalityNextNew?: null
    ): TypedEventFilter<[number], { observationCardinalityNextNew: number }>;
  };

  estimateGas: {
    ONE_IN_WAD(overrides?: CallOverrides): Promise<BigNumber>;

    UNDERLYING_YIELD_BEARING_PROTOCOL_ID(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    binarySearch(
      target: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getApyFromTo(
      from: BigNumberish,
      to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentRateInRay(overrides?: CallOverrides): Promise<BigNumber>;

    getLatestRateValue(overrides?: CallOverrides): Promise<BigNumber>;

    getRate(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getRateFromTo(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseObservationCardinalityNext(
      rateCardinalityNext: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    interpolateRateValue(
      beforeOrAtRateValueRay: BigNumberish,
      apyFromBeforeOrAtToAtOrAfterWad: BigNumberish,
      timeDeltaBeforeOrAtToQueriedTimeWad: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minSecondsSinceLastUpdate(overrides?: CallOverrides): Promise<BigNumber>;

    observations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    oracleVars(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    rayValueIsCloseTo(
      observedValueInRay: BigNumberish,
      expectedValueInRay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rocketEth(overrides?: CallOverrides): Promise<BigNumber>;

    setMinSecondsSinceLastUpdate(
      _minSecondsSinceLastUpdate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    settlementRateCache(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testComputeApyFromRate(
      rateFromTo: BigNumberish,
      timeInYears: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testGetSurroundingRates(
      target: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    underlying(overrides?: CallOverrides): Promise<BigNumber>;

    variableFactor(
      termStartTimestampInWeiSeconds: BigNumberish,
      termEndTimestampInWeiSeconds: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    variableFactorNoCache(
      termStartTimestampInWeiSeconds: BigNumberish,
      termEndTimestampInWeiSeconds: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    writeOracleEntry(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ONE_IN_WAD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    UNDERLYING_YIELD_BEARING_PROTOCOL_ID(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    binarySearch(
      target: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getApyFromTo(
      from: BigNumberish,
      to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentRateInRay(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLatestRateValue(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRate(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRateFromTo(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseObservationCardinalityNext(
      rateCardinalityNext: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    interpolateRateValue(
      beforeOrAtRateValueRay: BigNumberish,
      apyFromBeforeOrAtToAtOrAfterWad: BigNumberish,
      timeDeltaBeforeOrAtToQueriedTimeWad: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minSecondsSinceLastUpdate(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    observations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oracleVars(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rayValueIsCloseTo(
      observedValueInRay: BigNumberish,
      expectedValueInRay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rocketEth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setMinSecondsSinceLastUpdate(
      _minSecondsSinceLastUpdate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    settlementRateCache(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testComputeApyFromRate(
      rateFromTo: BigNumberish,
      timeInYears: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testGetSurroundingRates(
      target: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    variableFactor(
      termStartTimestampInWeiSeconds: BigNumberish,
      termEndTimestampInWeiSeconds: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    variableFactorNoCache(
      termStartTimestampInWeiSeconds: BigNumberish,
      termEndTimestampInWeiSeconds: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    writeOracleEntry(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
