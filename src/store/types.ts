import { Agents } from '../contexts/AgentContext/types';

// things that can occur after the transaction has been mined or fails
export type TransactionUpdate = {
  id: string;
  txid?: string;
  failedAt?: string;
  failureMessage?: string;
  succeededAt?: string;
  // refers to when the transaction has been loaded from the subgraoh, it will mark it as resolved, means there is a corresponding position that matches that (not strictly speaking true)
  // if value != reject
  resolvedAt?: string;
};

// defines a mint or a swap
export type Transaction = TransactionUpdate & {
  agent: Agents;
  ammId: string;
  fixedLow?: number;
  fixedHigh?: number;
  notional: number;
  margin: number;
  partialCollateralization?: boolean;
  fullyCollateralisedVTSwap?: boolean;
};

export type RolloverMintTransaction = Transaction & {
  rolloverPosition: {
    tickLower: number;
    tickUpper: number;
    settlementBalance: number;
  };
  newMarginEngine: string;
};

export type RolloverSwapTransaction = Transaction & {
  rolloverPosition: {
    tickLower: number;
    tickUpper: number;
    settlementBalance: number;
  };
  isFT: boolean;
  newMarginEngine: string;
};

export type State = {
  transactions: Transaction[];
};

export type SerializedAMM = {
  id: string;
  factoryAddress: string;
  marginEngineAddress: string;
  termStartTimestamp: string;
  termEndTimestamp: string;
  tickSpacing: string;
  rateOracle: {
    id: string;
    protocolId: string;
    token: { id: string; name: string; decimals: string };
  };
  wethAddress: string;
};

type ActionType =
  | 'mint'
  | 'burn'
  | 'swap'
  | 'updatePositionMargin'
  | 'settlePosition'
  | 'add-transaction'
  | 'close-transaction'
  | 'update-transaction'
  | 'rolloverMint'
  | 'rolloverSwap'
  | 'borrow';

export type BaseAction = {
  type: ActionType;
  payload: Record<string, unknown>;
};

export type TransactionAction = BaseAction & {
  payload: {
    transaction: Transaction;
    amm: SerializedAMM;
  };
};

export type RolloverMintTransactionAction = BaseAction & {
  payload: {
    transaction: RolloverMintTransaction;
    amm: SerializedAMM;
  };
};

export type RolloverSwapTransactionAction = BaseAction & {
  payload: {
    transaction: RolloverSwapTransaction;
    amm: SerializedAMM;
  };
};

export type MintAction = TransactionAction & {
  type: 'mint';
};

export type BurnAction = TransactionAction & {
  type: 'burn';
};

export type SwapAction = TransactionAction & {
  type: 'swap';
};

export type UpdatePositionMarginAction = TransactionAction & {
  type: 'updatePositionMargin';
};

export type SettlePositionAction = TransactionAction & {
  type: 'settlePosition';
};

export type CloseTransactionAction = BaseAction & {
  type: 'close-transaction';
  payload: {
    transactionId: string;
  };
};

export type UpdateTransactionAction = BaseAction & {
  type: 'update-transaction';
  payload: {
    update: TransactionUpdate;
  };
};

export type RolloverMintAction = RolloverMintTransactionAction & {
  type: 'rolloverMint';
};

export type RolloverSwapAction = RolloverSwapTransactionAction & {
  type: 'rolloverSwap';
};

export type Action =
  | MintAction
  | BurnAction
  | SwapAction
  | UpdatePositionMarginAction
  | SettlePositionAction
  | CloseTransactionAction
  | UpdateTransactionAction
  | RolloverMintAction
  | RolloverSwapAction;
