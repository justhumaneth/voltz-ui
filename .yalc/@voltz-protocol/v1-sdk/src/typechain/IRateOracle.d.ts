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

interface IRateOracleInterface extends ethers.utils.Interface {
  functions: {
    "UNDERLYING_YIELD_BEARING_PROTOCOL_ID()": FunctionFragment;
    "getApyFromTo(uint256,uint256)": FunctionFragment;
    "getRateFromTo(uint256,uint256)": FunctionFragment;
    "increaseObservationCardinalityNext(uint16)": FunctionFragment;
    "minSecondsSinceLastUpdate()": FunctionFragment;
    "setMinSecondsSinceLastUpdate(uint256)": FunctionFragment;
    "underlying()": FunctionFragment;
    "variableFactor(uint256,uint256)": FunctionFragment;
    "variableFactorNoCache(uint256,uint256)": FunctionFragment;
    "writeOracleEntry()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "UNDERLYING_YIELD_BEARING_PROTOCOL_ID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getApyFromTo",
    values: [BigNumberish, BigNumberish]
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
    functionFragment: "minSecondsSinceLastUpdate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMinSecondsSinceLastUpdate",
    values: [BigNumberish]
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

  decodeFunctionResult(
    functionFragment: "UNDERLYING_YIELD_BEARING_PROTOCOL_ID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getApyFromTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRateFromTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseObservationCardinalityNext",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minSecondsSinceLastUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinSecondsSinceLastUpdate",
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
    "RateCardinalityNext(uint16)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MinSecondsSinceLastUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OracleBufferUpdate"): EventFragment;
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

export type RateCardinalityNextEvent = TypedEvent<
  [number] & { observationCardinalityNextNew: number }
>;

export class IRateOracle extends BaseContract {
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

  interface: IRateOracleInterface;

  functions: {
    UNDERLYING_YIELD_BEARING_PROTOCOL_ID(
      overrides?: CallOverrides
    ): Promise<[number] & { yieldBearingProtocolID: number }>;

    getApyFromTo(
      from: BigNumberish,
      to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { apyFromTo: BigNumber }>;

    getRateFromTo(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    increaseObservationCardinalityNext(
      rateCardinalityNext: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    minSecondsSinceLastUpdate(overrides?: CallOverrides): Promise<[BigNumber]>;

    setMinSecondsSinceLastUpdate(
      _minSecondsSinceLastUpdate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    underlying(overrides?: CallOverrides): Promise<[string]>;

    variableFactor(
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    variableFactorNoCache(
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { result: BigNumber }>;

    writeOracleEntry(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  UNDERLYING_YIELD_BEARING_PROTOCOL_ID(
    overrides?: CallOverrides
  ): Promise<number>;

  getApyFromTo(
    from: BigNumberish,
    to: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRateFromTo(
    _from: BigNumberish,
    _to: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  increaseObservationCardinalityNext(
    rateCardinalityNext: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  minSecondsSinceLastUpdate(overrides?: CallOverrides): Promise<BigNumber>;

  setMinSecondsSinceLastUpdate(
    _minSecondsSinceLastUpdate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  underlying(overrides?: CallOverrides): Promise<string>;

  variableFactor(
    termStartTimestamp: BigNumberish,
    termEndTimestamp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  variableFactorNoCache(
    termStartTimestamp: BigNumberish,
    termEndTimestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  writeOracleEntry(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    UNDERLYING_YIELD_BEARING_PROTOCOL_ID(
      overrides?: CallOverrides
    ): Promise<number>;

    getApyFromTo(
      from: BigNumberish,
      to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRateFromTo(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseObservationCardinalityNext(
      rateCardinalityNext: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    minSecondsSinceLastUpdate(overrides?: CallOverrides): Promise<BigNumber>;

    setMinSecondsSinceLastUpdate(
      _minSecondsSinceLastUpdate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    underlying(overrides?: CallOverrides): Promise<string>;

    variableFactor(
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    variableFactorNoCache(
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
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

    "RateCardinalityNext(uint16)"(
      observationCardinalityNextNew?: null
    ): TypedEventFilter<[number], { observationCardinalityNextNew: number }>;

    RateCardinalityNext(
      observationCardinalityNextNew?: null
    ): TypedEventFilter<[number], { observationCardinalityNextNew: number }>;
  };

  estimateGas: {
    UNDERLYING_YIELD_BEARING_PROTOCOL_ID(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getApyFromTo(
      from: BigNumberish,
      to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRateFromTo(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseObservationCardinalityNext(
      rateCardinalityNext: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    minSecondsSinceLastUpdate(overrides?: CallOverrides): Promise<BigNumber>;

    setMinSecondsSinceLastUpdate(
      _minSecondsSinceLastUpdate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    underlying(overrides?: CallOverrides): Promise<BigNumber>;

    variableFactor(
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    variableFactorNoCache(
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    writeOracleEntry(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    UNDERLYING_YIELD_BEARING_PROTOCOL_ID(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getApyFromTo(
      from: BigNumberish,
      to: BigNumberish,
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

    minSecondsSinceLastUpdate(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setMinSecondsSinceLastUpdate(
      _minSecondsSinceLastUpdate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    variableFactor(
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    variableFactorNoCache(
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    writeOracleEntry(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
