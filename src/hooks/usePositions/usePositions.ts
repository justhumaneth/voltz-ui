import { getPositionsV1, Position } from '@voltz-protocol/v1-sdk';
import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';

import { selectors } from '../../app';
import { selectAMMs, selectAMMsLoadedState } from '../../app/features/aMMs';
import { updateTransactionAction } from '../../app/features/transactions';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Agents } from '../../contexts/AgentContext/types';
import { isBorrowingPosition } from '../../utilities/borrowAmm';
import { useWallet } from '../useWallet';

type UsePositionsResult = {
  positionsByAgentGroup: Position[];
  borrowPositions: Position[];
  loading: boolean;
  error: boolean;
};

export const usePositions = (agent: Agents): UsePositionsResult => {
  const { account: userAddress } = useWallet();
  const dispatch = useAppDispatch();
  const aMMsLoadedState = useAppSelector(selectAMMsLoadedState);
  const aMMs = useAppSelector(selectAMMs);
  const [mePositions, setMePositions] = useState<Position[]>([]);
  const [fetchLoading, setFetchLoading] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<boolean>(false);

  useEffect(() => {
    setMePositions([]);
    if (userAddress && aMMs && aMMs.length > 0 && aMMsLoadedState === 'succeeded' && agent) {
      setFetchLoading(true);
      setFetchError(false);

      void getPositionsV1({
        userWalletId: userAddress,
        amms: aMMs,
        type: agent === Agents.LIQUIDITY_PROVIDER ? 'LP' : 'Trader',
      }).then(({ positions, error }) => {
        setMePositions([...positions]);
        setFetchLoading(false);

        if (error) {
          setFetchError(true);
        }
      });
    }
  }, [userAddress, !!aMMs, aMMsLoadedState]);

  const unresolvedTransactions = useAppSelector(selectors.unresolvedTransactionsSelector);
  const shouldTryToCloseTransactions =
    unresolvedTransactions.length > 0 && mePositions && mePositions.length > 0;

  // [might be broken]
  useEffect(() => {
    if (shouldTryToCloseTransactions) {
      unresolvedTransactions.forEach((unresolvedTransaction) => {
        const matchingPosition = mePositions.find(
          ({ amm: { id: ammId }, fixedRateLower, fixedRateUpper, positionType }) => {
            if (ammId !== unresolvedTransaction.ammId) {
              return false;
            }

            if (positionType === 3 && unresolvedTransaction.agent !== Agents.LIQUIDITY_PROVIDER) {
              return false;
            }

            if (positionType === 1 && unresolvedTransaction.agent !== Agents.FIXED_TRADER) {
              return false;
            }

            if (fixedRateLower.toNumber() !== unresolvedTransaction.fixedLow) {
              return false;
            }

            if (fixedRateUpper.toNumber() !== unresolvedTransaction.fixedHigh) {
              return false;
            }

            return true;
          },
        );

        if (matchingPosition) {
          dispatch(
            updateTransactionAction({
              id: unresolvedTransaction.id,
              resolvedAt: DateTime.now().toISO(),
            }),
          );
        }
      });
    }
  }, [shouldTryToCloseTransactions, mePositions, dispatch]);

  return {
    positionsByAgentGroup: mePositions.filter((pos) => !isBorrowingPosition(pos)),
    borrowPositions: mePositions.filter((pos) => isBorrowingPosition(pos)),
    loading: aMMsLoadedState === 'pending' || fetchLoading,
    error: aMMsLoadedState === 'failed' || fetchError,
  };
};
