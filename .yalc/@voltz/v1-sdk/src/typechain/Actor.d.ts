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

interface ActorInterface extends ethers.utils.Interface {
  functions: {
    "burn(address,address,int24,int24,uint128)": FunctionFragment;
    "initiateFullyCollateralisedFixedTakerSwap(address,uint256,uint160)": FunctionFragment;
    "liquidatePosition(address,int24,int24,address)": FunctionFragment;
    "mint(address,address,int24,int24,uint128)": FunctionFragment;
    "mintOrBurnViaPeriphery(address,(address,address,int24,int24,uint256,bool))": FunctionFragment;
    "setIntegrationApproval(address,address,bool)": FunctionFragment;
    "swap(address,(address,int256,uint160,int24,int24))": FunctionFragment;
    "swapViaPeriphery(address,(address,address,bool,uint256,uint160,int24,int24))": FunctionFragment;
    "unwindFullyCollateralisedFixedTakerSwap(address,uint256,uint160)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "burn",
    values: [string, string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initiateFullyCollateralisedFixedTakerSwap",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidatePosition",
    values: [string, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mintOrBurnViaPeriphery",
    values: [
      string,
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
    functionFragment: "setIntegrationApproval",
    values: [string, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      string,
      {
        recipient: string;
        amountSpecified: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapViaPeriphery",
    values: [
      string,
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
  encodeFunctionData(
    functionFragment: "unwindFullyCollateralisedFixedTakerSwap",
    values: [string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initiateFullyCollateralisedFixedTakerSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidatePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintOrBurnViaPeriphery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIntegrationApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapViaPeriphery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unwindFullyCollateralisedFixedTakerSwap",
    data: BytesLike
  ): Result;

  events: {};
}

export class Actor extends BaseContract {
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

  interface: ActorInterface;

  functions: {
    burn(
      VAMMAddress: string,
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initiateFullyCollateralisedFixedTakerSwap(
      FCMAddress: string,
      notional: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidatePosition(
      MEAddress: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mint(
      VAMMAddress: string,
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintOrBurnViaPeriphery(
      peripheryAddress: string,
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

    setIntegrationApproval(
      MEAddress: string,
      intAddress: string,
      allowIntegration: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swap(
      VAMMAddress: string,
      params: {
        recipient: string;
        amountSpecified: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapViaPeriphery(
      peripheryAddress: string,
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

    unwindFullyCollateralisedFixedTakerSwap(
      FCMAddress: string,
      notionalToUnwind: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  burn(
    VAMMAddress: string,
    recipient: string,
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initiateFullyCollateralisedFixedTakerSwap(
    FCMAddress: string,
    notional: BigNumberish,
    sqrtPriceLimitX96: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidatePosition(
    MEAddress: string,
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mint(
    VAMMAddress: string,
    recipient: string,
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintOrBurnViaPeriphery(
    peripheryAddress: string,
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

  setIntegrationApproval(
    MEAddress: string,
    intAddress: string,
    allowIntegration: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swap(
    VAMMAddress: string,
    params: {
      recipient: string;
      amountSpecified: BigNumberish;
      sqrtPriceLimitX96: BigNumberish;
      tickLower: BigNumberish;
      tickUpper: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapViaPeriphery(
    peripheryAddress: string,
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

  unwindFullyCollateralisedFixedTakerSwap(
    FCMAddress: string,
    notionalToUnwind: BigNumberish,
    sqrtPriceLimitX96: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    burn(
      VAMMAddress: string,
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    initiateFullyCollateralisedFixedTakerSwap(
      FCMAddress: string,
      notional: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidatePosition(
      MEAddress: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    mint(
      VAMMAddress: string,
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    mintOrBurnViaPeriphery(
      peripheryAddress: string,
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

    setIntegrationApproval(
      MEAddress: string,
      intAddress: string,
      allowIntegration: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    swap(
      VAMMAddress: string,
      params: {
        recipient: string;
        amountSpecified: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        _fixedTokenDelta: BigNumber;
        _variableTokenDelta: BigNumber;
        _cumulativeFeeIncurred: BigNumber;
        _fixedTokenDeltaUnbalanced: BigNumber;
      }
    >;

    swapViaPeriphery(
      peripheryAddress: string,
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
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        _fixedTokenDelta: BigNumber;
        _variableTokenDelta: BigNumber;
        _cumulativeFeeIncurred: BigNumber;
        _fixedTokenDeltaUnbalanced: BigNumber;
        _marginRequirement: BigNumber;
      }
    >;

    unwindFullyCollateralisedFixedTakerSwap(
      FCMAddress: string,
      notionalToUnwind: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    burn(
      VAMMAddress: string,
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initiateFullyCollateralisedFixedTakerSwap(
      FCMAddress: string,
      notional: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidatePosition(
      MEAddress: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mint(
      VAMMAddress: string,
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintOrBurnViaPeriphery(
      peripheryAddress: string,
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

    setIntegrationApproval(
      MEAddress: string,
      intAddress: string,
      allowIntegration: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swap(
      VAMMAddress: string,
      params: {
        recipient: string;
        amountSpecified: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapViaPeriphery(
      peripheryAddress: string,
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

    unwindFullyCollateralisedFixedTakerSwap(
      FCMAddress: string,
      notionalToUnwind: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    burn(
      VAMMAddress: string,
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initiateFullyCollateralisedFixedTakerSwap(
      FCMAddress: string,
      notional: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidatePosition(
      MEAddress: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mint(
      VAMMAddress: string,
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintOrBurnViaPeriphery(
      peripheryAddress: string,
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

    setIntegrationApproval(
      MEAddress: string,
      intAddress: string,
      allowIntegration: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swap(
      VAMMAddress: string,
      params: {
        recipient: string;
        amountSpecified: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapViaPeriphery(
      peripheryAddress: string,
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

    unwindFullyCollateralisedFixedTakerSwap(
      FCMAddress: string,
      notionalToUnwind: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
