import { TokenTypography, Typography } from 'brokoli-ui';
import React from 'react';

import { selectInfoPostSwap } from '../../../../../app/features/lp-form';
import { useAppSelector } from '../../../../../app/hooks';
import { formatNumber } from '../../../../../utilities/number';
import { ReactComponent as GasIcon } from './gas-icon.svg';
import { IconTextWrapper, TransactionDetailBox } from './TransactionDetails.styled';

type TransactionDetailsProps = {};

export const TransactionDetails: React.FunctionComponent<TransactionDetailsProps> = () => {
  const infoPostSwap = useAppSelector(selectInfoPostSwap);
  const hideGasFees = false;

  return (
    <React.Fragment>
      {hideGasFees ? null : (
        <TransactionDetailBox>
          <IconTextWrapper>
            <GasIcon />
            <Typography colorToken="lavenderWeb2" typographyToken="primaryBodySmallRegular">
              Gas Fees
            </Typography>
          </IconTextWrapper>
          <TokenTypography
            colorToken="lavenderWeb"
            token=" ETH"
            typographyToken="secondaryBodySmallRegular"
            value={
              infoPostSwap.status === 'success'
                ? formatNumber(infoPostSwap.value.gasFeeETH, 2, 4)
                : '--'
            }
          ></TokenTypography>
        </TransactionDetailBox>
      )}
    </React.Fragment>
  );
};