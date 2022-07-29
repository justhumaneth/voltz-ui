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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface FixedAndVariableMathTestInterface extends ethers.utils.Interface {
  functions: {
    "accrualFact(uint256)": FunctionFragment;
    "calculateFixedTokenBalance(int256,int256,uint256,uint256)": FunctionFragment;
    "calculateSettlementCashflow(int256,int256,uint256,uint256,uint256)": FunctionFragment;
    "fixedFactorTest(bool,uint256,uint256)": FunctionFragment;
    "getExcessBalance(int256,int256,uint256,uint256,uint256)": FunctionFragment;
    "getFixedTokenBalance(int256,int256,uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accrualFact",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateFixedTokenBalance",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateSettlementCashflow",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "fixedFactorTest",
    values: [boolean, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getExcessBalance",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getFixedTokenBalance",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "accrualFact",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateFixedTokenBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateSettlementCashflow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fixedFactorTest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getExcessBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFixedTokenBalance",
    data: BytesLike
  ): Result;

  events: {};
}

export class FixedAndVariableMathTest extends BaseContract {
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

  interface: FixedAndVariableMathTestInterface;

  functions: {
    accrualFact(
      timeInSeconds: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { timeInYears: BigNumber }>;

    calculateFixedTokenBalance(
      amount0: BigNumberish,
      excessBalance: BigNumberish,
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { fixedTokenBalance: BigNumber }>;

    calculateSettlementCashflow(
      fixedTokenBalance: BigNumberish,
      variableTokenBalance: BigNumberish,
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
      variableFactorToMaturity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { cashflow: BigNumber }>;

    fixedFactorTest(
      atMaturity: boolean,
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { fixedFactorValue: BigNumber }>;

    getExcessBalance(
      amount0: BigNumberish,
      amount1: BigNumberish,
      accruedVariableFactor: BigNumberish,
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getFixedTokenBalance(
      amount0: BigNumberish,
      amount1: BigNumberish,
      accruedVariableFactor: BigNumberish,
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { fixedTokenBalance: BigNumber }>;
  };

  accrualFact(
    timeInSeconds: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateFixedTokenBalance(
    amount0: BigNumberish,
    excessBalance: BigNumberish,
    termStartTimestamp: BigNumberish,
    termEndTimestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateSettlementCashflow(
    fixedTokenBalance: BigNumberish,
    variableTokenBalance: BigNumberish,
    termStartTimestamp: BigNumberish,
    termEndTimestamp: BigNumberish,
    variableFactorToMaturity: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  fixedFactorTest(
    atMaturity: boolean,
    termStartTimestamp: BigNumberish,
    termEndTimestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getExcessBalance(
    amount0: BigNumberish,
    amount1: BigNumberish,
    accruedVariableFactor: BigNumberish,
    termStartTimestamp: BigNumberish,
    termEndTimestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getFixedTokenBalance(
    amount0: BigNumberish,
    amount1: BigNumberish,
    accruedVariableFactor: BigNumberish,
    termStartTimestamp: BigNumberish,
    termEndTimestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    accrualFact(
      timeInSeconds: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateFixedTokenBalance(
      amount0: BigNumberish,
      excessBalance: BigNumberish,
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateSettlementCashflow(
      fixedTokenBalance: BigNumberish,
      variableTokenBalance: BigNumberish,
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
      variableFactorToMaturity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fixedFactorTest(
      atMaturity: boolean,
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getExcessBalance(
      amount0: BigNumberish,
      amount1: BigNumberish,
      accruedVariableFactor: BigNumberish,
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFixedTokenBalance(
      amount0: BigNumberish,
      amount1: BigNumberish,
      accruedVariableFactor: BigNumberish,
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    accrualFact(
      timeInSeconds: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateFixedTokenBalance(
      amount0: BigNumberish,
      excessBalance: BigNumberish,
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateSettlementCashflow(
      fixedTokenBalance: BigNumberish,
      variableTokenBalance: BigNumberish,
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
      variableFactorToMaturity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fixedFactorTest(
      atMaturity: boolean,
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getExcessBalance(
      amount0: BigNumberish,
      amount1: BigNumberish,
      accruedVariableFactor: BigNumberish,
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFixedTokenBalance(
      amount0: BigNumberish,
      amount1: BigNumberish,
      accruedVariableFactor: BigNumberish,
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accrualFact(
      timeInSeconds: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateFixedTokenBalance(
      amount0: BigNumberish,
      excessBalance: BigNumberish,
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateSettlementCashflow(
      fixedTokenBalance: BigNumberish,
      variableTokenBalance: BigNumberish,
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
      variableFactorToMaturity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fixedFactorTest(
      atMaturity: boolean,
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getExcessBalance(
      amount0: BigNumberish,
      amount1: BigNumberish,
      accruedVariableFactor: BigNumberish,
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFixedTokenBalance(
      amount0: BigNumberish,
      amount1: BigNumberish,
      accruedVariableFactor: BigNumberish,
      termStartTimestamp: BigNumberish,
      termEndTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
