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

interface PeripheryInterface extends ethers.utils.Interface {
  functions: {
    "getCurrentTick(address)": FunctionFragment;
    "getMarginEngine(address)": FunctionFragment;
    "getVAMM(address)": FunctionFragment;
    "mintOrBurn((address,address,int24,int24,uint256,bool))": FunctionFragment;
    "swap((address,address,bool,uint256,uint160,int24,int24))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getCurrentTick",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getMarginEngine",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getVAMM", values: [string]): string;
  encodeFunctionData(
    functionFragment: "mintOrBurn",
    values: [
      {
        marginEngineAddress: string;
        recipient: string;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        notional: BigNumberish;
        isMint: boolean;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      {
        marginEngineAddress: string;
        recipient: string;
        isFT: boolean;
        notional: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
      }
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getCurrentTick",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMarginEngine",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVAMM", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintOrBurn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;

  events: {};
}

export class Periphery extends BaseContract {
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

  interface: PeripheryInterface;

  functions: {
    getCurrentTick(
      marginEngineAddress: string,
      overrides?: CallOverrides
    ): Promise<[number] & { currentTick: number }>;

    getMarginEngine(
      marginEngineAddress: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getVAMM(
      marginEngineAddress: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    mintOrBurn(
      params: {
        marginEngineAddress: string;
        recipient: string;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        notional: BigNumberish;
        isMint: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swap(
      params: {
        marginEngineAddress: string;
        recipient: string;
        isFT: boolean;
        notional: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getCurrentTick(
    marginEngineAddress: string,
    overrides?: CallOverrides
  ): Promise<number>;

  getMarginEngine(
    marginEngineAddress: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getVAMM(
    marginEngineAddress: string,
    overrides?: CallOverrides
  ): Promise<string>;

  mintOrBurn(
    params: {
      marginEngineAddress: string;
      recipient: string;
      tickLower: BigNumberish;
      tickUpper: BigNumberish;
      notional: BigNumberish;
      isMint: boolean;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swap(
    params: {
      marginEngineAddress: string;
      recipient: string;
      isFT: boolean;
      notional: BigNumberish;
      sqrtPriceLimitX96: BigNumberish;
      tickLower: BigNumberish;
      tickUpper: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getCurrentTick(
      marginEngineAddress: string,
      overrides?: CallOverrides
    ): Promise<number>;

    getMarginEngine(
      marginEngineAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getVAMM(
      marginEngineAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    mintOrBurn(
      params: {
        marginEngineAddress: string;
        recipient: string;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        notional: BigNumberish;
        isMint: boolean;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swap(
      params: {
        marginEngineAddress: string;
        recipient: string;
        isFT: boolean;
        notional: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, number] & {
        _fixedTokenDelta: BigNumber;
        _variableTokenDelta: BigNumber;
        _cumulativeFeeIncurred: BigNumber;
        _fixedTokenDeltaUnbalanced: BigNumber;
        _marginRequirement: BigNumber;
        _tickAfter: number;
      }
    >;
  };

  filters: {};

  estimateGas: {
    getCurrentTick(
      marginEngineAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMarginEngine(
      marginEngineAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVAMM(
      marginEngineAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintOrBurn(
      params: {
        marginEngineAddress: string;
        recipient: string;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        notional: BigNumberish;
        isMint: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swap(
      params: {
        marginEngineAddress: string;
        recipient: string;
        isFT: boolean;
        notional: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getCurrentTick(
      marginEngineAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMarginEngine(
      marginEngineAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVAMM(
      marginEngineAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintOrBurn(
      params: {
        marginEngineAddress: string;
        recipient: string;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        notional: BigNumberish;
        isMint: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swap(
      params: {
        marginEngineAddress: string;
        recipient: string;
        isFT: boolean;
        notional: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}