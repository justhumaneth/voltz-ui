import { BorrowAMM, Position } from '@voltz-protocol/v1-sdk';

export const getTotalVariableDebt = async (
  borrowAmms: BorrowAMM[],
  positions: Position[] | undefined,
) => {
  let sum: number = 0;
  let countVariablePositions: number = 0;

  for (const b of borrowAmms) {
    let hasPosition: boolean = false;
    if (positions && positions.length !== 0) {
      for (const p of positions) {
        if (b.amm && p.amm.id === b.amm.id && Date.now().valueOf() < b.amm.endDateTime.toMillis()) {
          const varDebt = await b.getAggregatedBorrowBalanceInUSD(p);
          countVariablePositions += varDebt === 0 ? 0 : 1;
          sum += varDebt;
          hasPosition = true;
        }
      }
    }

    if (!hasPosition) {
      if (b.amm && Date.now().valueOf() < b.amm.endDateTime.toMillis()) {
        const varDebt = await b.getUnderlyingBorrowBalanceInUSD();
        countVariablePositions += varDebt === 0 ? 0 : 1;
        sum += varDebt;
      }
    }
  }
  return [sum, countVariablePositions];
};

export const getTotalFixedDebt = async (borrowAmms: BorrowAMM[], positions: Position[]) => {
  let sum: number = 0;
  let countFixedPositions: number = 0;
  for (const p of positions) {
    if (p.positionType === 2) {
      for (const b of borrowAmms) {
        if (b.amm && p.amm.id === b.amm.id && Date.now().valueOf() < b.amm.endDateTime.toMillis()) {
          const fixDebt = await b.getFixedBorrowBalanceInUSD(p);
          countFixedPositions += fixDebt === 0 ? 0 : 1;
          sum += fixDebt;
        }
      }
    }
  }
  return [sum, countFixedPositions];
};
