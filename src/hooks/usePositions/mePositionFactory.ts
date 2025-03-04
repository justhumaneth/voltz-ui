/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument */

import {
  AMM,
  Burn,
  Liquidation,
  MarginUpdate,
  Mint,
  Position,
  Settlement,
  Swap,
} from '@voltz-protocol/v1-sdk';
import JSBI from 'jsbi';

import { GetWalletQuery } from '../../graphql';

type MEPositionQueryData = NonNullable<GetWalletQuery['wallet']>['positions'][number];

/**
 * Takes the data received for an ME position from GetWalletQuery and returns a Position class instance
 * @param positionData - The data for a ME position received from the GetWalletQuery graphql query
 * @param amms - The list of amms
 */
export const MEPositionFactory = (
  positionData: MEPositionQueryData,
  amms: AMM[],
): Position | undefined => {
  const {
    id: positionId,
    createdTimestamp: positionCreatedTimestamp,
    amm: { id: ammId },
    owner: { id: ownerAddress },
    tickLower,
    tickUpper,
    positionType,
    mints,
    burns,
    swaps,
    marginUpdates,
    liquidations,
    settlements,
  } = positionData;

  const correspondingAmm = amms.find((amm) => amm.id === ammId);
  if (!correspondingAmm) {
    return;
  }

  return new Position({
    id: positionId,
    createdTimestamp: parseInt(positionCreatedTimestamp as string),
    tickLower: parseInt(tickLower as string),
    tickUpper: parseInt(tickUpper as string),
    positionType: parseInt(positionType as string),
    owner: ownerAddress,
    amm: correspondingAmm,
    mints: mints.map(
      (args) =>
        new Mint({
          id: args.id,
          transactionId: args.transaction.id,
          transactionTimestamp: JSBI.BigInt(args.transaction.createdTimestamp),
          ammId,
          positionId: positionId,
          sender: args.sender,
          amount: JSBI.BigInt(args.amount),
        }),
    ),
    burns: burns.map(
      (args) =>
        new Burn({
          id: args.id,
          transactionId: args.transaction.id,
          transactionTimestamp: JSBI.BigInt(args.transaction.createdTimestamp),
          ammId,
          positionId: positionId,
          sender: args.sender,
          amount: JSBI.BigInt(args.amount),
        }),
    ),
    swaps: swaps.map(
      (args) =>
        new Swap({
          id: args.id,
          transactionId: args.transaction.id,
          transactionTimestamp: JSBI.BigInt(args.transaction.createdTimestamp),
          ammId,
          positionId: positionId,
          sender: args.sender,
          desiredNotional: JSBI.BigInt(args.desiredNotional),
          sqrtPriceLimitX96: JSBI.BigInt(args.sqrtPriceLimitX96),
          cumulativeFeeIncurred: JSBI.BigInt(args.cumulativeFeeIncurred),
          fixedTokenDelta: JSBI.BigInt(args.fixedTokenDelta),
          variableTokenDelta: JSBI.BigInt(args.variableTokenDelta),
          fixedTokenDeltaUnbalanced: JSBI.BigInt(args.fixedTokenDeltaUnbalanced),
        }),
    ),
    marginUpdates: marginUpdates.map(
      (args) =>
        new MarginUpdate({
          id: args.id,
          transactionId: args.transaction.id,
          transactionTimestamp: JSBI.BigInt(args.transaction.createdTimestamp),
          ammId,
          positionId: positionId,
          depositer: args.depositer,
          marginDelta: JSBI.BigInt(args.marginDelta),
        }),
    ),
    liquidations: liquidations.map(
      (args) =>
        new Liquidation({
          id: args.id,
          transactionId: args.transaction.id,
          transactionTimestamp: JSBI.BigInt(args.transaction.createdTimestamp),
          ammId,
          positionId: positionId,
          liquidator: args.liquidator,
          reward: JSBI.BigInt(args.reward),
          notionalUnwound: JSBI.BigInt(args.notionalUnwound),
        }),
    ),
    settlements: settlements.map(
      (args) =>
        new Settlement({
          id: args.id,
          transactionId: args.transaction.id,
          transactionTimestamp: JSBI.BigInt(args.transaction.createdTimestamp),
          ammId,
          positionId: positionId,
          settlementCashflow: JSBI.BigInt(args.settlementCashflow),
        }),
    ),
  });
};
