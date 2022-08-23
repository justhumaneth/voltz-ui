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

interface CTokenStorageInterface extends ethers.utils.Interface {
  functions: {
    "accrualBlockNumber()": FunctionFragment;
    "borrowIndex()": FunctionFragment;
    "totalBorrows()": FunctionFragment;
    "totalReserves()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accrualBlockNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "borrowIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalBorrows",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalReserves",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "accrualBlockNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalBorrows",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalReserves",
    data: BytesLike
  ): Result;

  events: {};
}

export class CTokenStorage extends BaseContract {
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

  interface: CTokenStorageInterface;

  functions: {
    accrualBlockNumber(overrides?: CallOverrides): Promise<[BigNumber]>;

    borrowIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalBorrows(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalReserves(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  accrualBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

  borrowIndex(overrides?: CallOverrides): Promise<BigNumber>;

  totalBorrows(overrides?: CallOverrides): Promise<BigNumber>;

  totalReserves(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    accrualBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    borrowIndex(overrides?: CallOverrides): Promise<BigNumber>;

    totalBorrows(overrides?: CallOverrides): Promise<BigNumber>;

    totalReserves(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    accrualBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    borrowIndex(overrides?: CallOverrides): Promise<BigNumber>;

    totalBorrows(overrides?: CallOverrides): Promise<BigNumber>;

    totalReserves(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    accrualBlockNumber(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    borrowIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalBorrows(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}