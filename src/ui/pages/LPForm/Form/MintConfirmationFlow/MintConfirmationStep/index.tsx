import { Button, CloseButton, Typography } from 'brokoli-ui';
import React, { useCallback } from 'react';

import {
  closeSwapConfirmationFlowAction,
  confirmSwapThunk,
  selectSwapConfirmationFlowError,
  selectSwapFormAMM,
} from '../../../../../../app/features/swap-form';
import { useAppDispatch, useAppSelector } from '../../../../../../app/hooks';
import {
  MarketTokenInformation,
  MarketTokenInformationProps,
} from '../../../../../components/MarketTokenInformation';
import { TransactionDetails } from '../../TransactionDetails';
import { MintDetails } from '../MintDetails';
import {
  HorizontalLine,
  SwapConfirmationStepBox,
  SwapDetailsBox,
  SwapFeeDetailsBox,
  TitleBox,
} from './MintConfirmationStep.styled';

export const MintConfirmationStep: React.FunctionComponent = () => {
  const aMM = useAppSelector(selectSwapFormAMM);
  const dispatch = useAppDispatch();
  const handleConfirmSwap = useCallback(() => {
    void dispatch(confirmSwapThunk());
  }, [dispatch]);
  const error = useAppSelector(selectSwapConfirmationFlowError);
  const handleCloseButtonClick = useCallback(() => {
    dispatch(closeSwapConfirmationFlowAction());
  }, [dispatch]);
  if (!aMM) {
    return null;
  }

  return (
    <SwapConfirmationStepBox>
      <TitleBox>
        <Typography colorToken="lavenderWeb" typographyToken="primaryHeader3Bold">
          Confirm Swap
        </Typography>
        <CloseButton onClick={handleCloseButtonClick} />
      </TitleBox>
      <SwapDetailsBox>
        <MarketTokenInformation
          isAaveV3={aMM.market.tags.isAaveV3}
          isBorrowing={aMM.market.tags.isBorrowing}
          market={aMM.market.name as MarketTokenInformationProps['market']}
          token={aMM.underlyingToken.name.toLowerCase() as MarketTokenInformationProps['token']}
        />
        <MintDetails />
      </SwapDetailsBox>
      <HorizontalLine />
      <SwapFeeDetailsBox>
        <TransactionDetails />
      </SwapFeeDetailsBox>
      <Button
        bottomLeftText={error ? error : ''}
        bottomLeftTextColorToken={error ? 'wildStrawberry' : undefined}
        bottomLeftTextTypographyToken={error ? 'primaryBodyXSmallRegular' : undefined}
        variant="primary"
        onClick={handleConfirmSwap}
      >
        Confirm Swap
      </Button>
    </SwapConfirmationStepBox>
  );
};
