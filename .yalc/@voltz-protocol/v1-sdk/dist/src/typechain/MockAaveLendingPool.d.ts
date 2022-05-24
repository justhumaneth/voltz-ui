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

interface MockAaveLendingPoolInterface extends ethers.utils.Interface {
  functions: {
    "getReserveData(address)": FunctionFragment;
    "getReserveNormalizedIncome(address)": FunctionFragment;
    "initReserve(address,address)": FunctionFragment;
    "setFactorPerSecondInRay(address,uint256)": FunctionFragment;
    "setReserveNormalizedIncome(address,uint256)": FunctionFragment;
    "withdraw(address,uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getReserveData",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveNormalizedIncome",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initReserve",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setFactorPerSecondInRay",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setReserveNormalizedIncome",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getReserveData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserveNormalizedIncome",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFactorPerSecondInRay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReserveNormalizedIncome",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {};
}

export class MockAaveLendingPool extends BaseContract {
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

  interface: MockAaveLendingPoolInterface;

  functions: {
    getReserveData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          [BigNumber] & { data: BigNumber },
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          number,
          string,
          string,
          string,
          string,
          number
        ] & {
          configuration: [BigNumber] & { data: BigNumber };
          liquidityIndex: BigNumber;
          variableBorrowIndex: BigNumber;
          currentLiquidityRate: BigNumber;
          currentVariableBorrowRate: BigNumber;
          currentStableBorrowRate: BigNumber;
          lastUpdateTimestamp: number;
          aTokenAddress: string;
          stableDebtTokenAddress: string;
          variableDebtTokenAddress: string;
          interestRateStrategyAddress: string;
          id: number;
        }
      ]
    >;

    getReserveNormalizedIncome(
      _underlyingAsset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initReserve(
      asset: string,
      aTokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFactorPerSecondInRay(
      _underlyingAsset: string,
      _factorPerSecondInRay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setReserveNormalizedIncome(
      _underlyingAsset: string,
      _reserveNormalizedIncome: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      asset: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getReserveData(
    asset: string,
    overrides?: CallOverrides
  ): Promise<
    [
      [BigNumber] & { data: BigNumber },
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      number,
      string,
      string,
      string,
      string,
      number
    ] & {
      configuration: [BigNumber] & { data: BigNumber };
      liquidityIndex: BigNumber;
      variableBorrowIndex: BigNumber;
      currentLiquidityRate: BigNumber;
      currentVariableBorrowRate: BigNumber;
      currentStableBorrowRate: BigNumber;
      lastUpdateTimestamp: number;
      aTokenAddress: string;
      stableDebtTokenAddress: string;
      variableDebtTokenAddress: string;
      interestRateStrategyAddress: string;
      id: number;
    }
  >;

  getReserveNormalizedIncome(
    _underlyingAsset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initReserve(
    asset: string,
    aTokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFactorPerSecondInRay(
    _underlyingAsset: string,
    _factorPerSecondInRay: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setReserveNormalizedIncome(
    _underlyingAsset: string,
    _reserveNormalizedIncome: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    asset: string,
    amount: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getReserveData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber] & { data: BigNumber },
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        string,
        string,
        string,
        string,
        number
      ] & {
        configuration: [BigNumber] & { data: BigNumber };
        liquidityIndex: BigNumber;
        variableBorrowIndex: BigNumber;
        currentLiquidityRate: BigNumber;
        currentVariableBorrowRate: BigNumber;
        currentStableBorrowRate: BigNumber;
        lastUpdateTimestamp: number;
        aTokenAddress: string;
        stableDebtTokenAddress: string;
        variableDebtTokenAddress: string;
        interestRateStrategyAddress: string;
        id: number;
      }
    >;

    getReserveNormalizedIncome(
      _underlyingAsset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initReserve(
      asset: string,
      aTokenAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setFactorPerSecondInRay(
      _underlyingAsset: string,
      _factorPerSecondInRay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setReserveNormalizedIncome(
      _underlyingAsset: string,
      _reserveNormalizedIncome: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      asset: string,
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getReserveData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserveNormalizedIncome(
      _underlyingAsset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initReserve(
      asset: string,
      aTokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFactorPerSecondInRay(
      _underlyingAsset: string,
      _factorPerSecondInRay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setReserveNormalizedIncome(
      _underlyingAsset: string,
      _reserveNormalizedIncome: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      asset: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getReserveData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserveNormalizedIncome(
      _underlyingAsset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initReserve(
      asset: string,
      aTokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFactorPerSecondInRay(
      _underlyingAsset: string,
      _factorPerSecondInRay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setReserveNormalizedIncome(
      _underlyingAsset: string,
      _reserveNormalizedIncome: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      asset: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
