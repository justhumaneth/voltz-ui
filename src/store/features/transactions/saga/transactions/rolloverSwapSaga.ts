import { AMMRolloverWithSwapArgs } from '@voltz-protocol/v1-sdk';
import { ContractReceipt, providers } from 'ethers';
import { DateTime } from 'luxon';
import { call, put } from 'redux-saga/effects';

import { getErrorMessage } from '../../../../../utilities/getErrorMessage';
import { getSentryTracker } from '../../../../../utilities/sentry';
import { RolloverSwapAction } from '../../../../types';
import * as actions from '../../actions';
import { deserializeAmm, getSigner } from '../../utilities';

export function* rolloverSwapSaga(action: RolloverSwapAction) {
  const signer: providers.JsonRpcSigner | null = getSigner();

  if (!signer) {
    return;
  }

  const amm = deserializeAmm(action.payload.amm, signer);

  const { id, isFT, notional, margin, newMarginEngine, rolloverPosition } =
    action.payload.transaction;

  try {
    const args: AMMRolloverWithSwapArgs = {
      fixedLow: 1,
      fixedHigh: 999,
      isFT,
      notional,
      margin,
      newMarginEngine,
      rolloverPosition,
    };

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result: ContractReceipt = yield call([amm, 'rolloverWithSwap'], args);

    yield put(
      actions.updateTransaction({
        id,
        succeededAt: DateTime.now().toISO(),
        txid: result.transactionHash,
      }),
    );
  } catch (error) {
    getSentryTracker().captureException(error);
    yield put(
      actions.updateTransaction({
        id,
        failedAt: DateTime.now().toISO(),
        failureMessage: getErrorMessage(error),
      }),
    );

    return;
  }
}
