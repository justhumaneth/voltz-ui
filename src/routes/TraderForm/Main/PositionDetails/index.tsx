import { LabelTokenTypography } from 'brokoli-ui';
import React from 'react';

import {
  selectInfoPostSwap,
  selectMode,
  selectNotionalAmount,
  selectVariableRateInfo,
} from '../../../../app/features/swap-form';
import { useAppSelector } from '../../../../app/hooks';
import { useSwapFormAMM } from '../../../../hooks/useSwapFormAMM';
import { compactFormatToParts, formatNumber, stringToBigFloat } from '../../../../utilities/number';
import {
  CashFlowBox,
  NotionalBox,
  PayingBox,
  PositionDetailsBox,
  PositionDetailsLeftBox,
  PositionDetailsRightBox,
  ReceivingBox,
} from './PositionDetails.styled';

type PositionDetailsProps = {};

export const PositionDetails: React.FunctionComponent<PositionDetailsProps> = () => {
  const { aMM } = useSwapFormAMM();
  const notional = useAppSelector(selectNotionalAmount);
  const variableRateInfo = useAppSelector(selectVariableRateInfo);
  const infoPostSwap = useAppSelector(selectInfoPostSwap);
  const mode = useAppSelector(selectMode);

  const fixedRate =
    infoPostSwap.status === 'success' ? formatNumber(infoPostSwap.value.averageFixedRate) : '--';
  const variableRate =
    variableRateInfo.status === 'success' ? formatNumber(variableRateInfo.value) : '--';

  const receivingRate = mode === 'fixed' ? fixedRate : variableRate;
  const payingRate = mode === 'fixed' ? variableRate : fixedRate;

  let { compactNumber: compactNotionalNumber, compactSuffix: compactNotionalSuffix } =
    compactFormatToParts(stringToBigFloat(notional.value));
  if (notional.error) {
    compactNotionalSuffix = '';
    compactNotionalNumber = '--';
  }

  return (
    <PositionDetailsBox>
      <PositionDetailsLeftBox>
        <LabelTokenTypography
          colorToken={mode === 'fixed' ? 'skyBlueCrayola' : 'ultramarineBlue'}
          label="New position"
          labelColorToken="lavenderWeb"
          labelTypographyToken="primaryBodyMediumBold"
          token=""
          typographyToken="secondaryBodySmallRegular"
          value={mode === 'fixed' ? 'Fixed Taker' : 'Variable Taker'}
        />
      </PositionDetailsLeftBox>
      <PositionDetailsRightBox>
        <NotionalBox>
          <LabelTokenTypography
            colorToken="lavenderWeb"
            label="Notional"
            labelColorToken="lavenderWeb3"
            labelTypographyToken="primaryBodyXSmallRegular"
            token={compactNotionalSuffix}
            typographyToken="secondaryBodySmallRegular"
            value={compactNotionalNumber}
          />
        </NotionalBox>
        <ReceivingBox>
          <LabelTokenTypography
            colorToken="lavenderWeb"
            label="Receiving"
            labelColorToken="lavenderWeb3"
            labelTypographyToken="primaryBodyXSmallRegular"
            token="%"
            typographyToken="secondaryBodySmallRegular"
            value={receivingRate}
          />
        </ReceivingBox>
        <PayingBox>
          <LabelTokenTypography
            colorToken="lavenderWeb"
            label="Paying"
            labelColorToken="lavenderWeb3"
            labelTypographyToken="primaryBodyXSmallRegular"
            token="%"
            typographyToken="secondaryBodySmallRegular"
            value={payingRate}
          />
        </PayingBox>
        <CashFlowBox>
          <LabelTokenTypography
            colorToken="lavenderWeb"
            label="Cash Flow"
            labelColorToken="lavenderWeb3"
            labelTypographyToken="primaryBodyXSmallRegular"
            token={aMM ? ` ${aMM.underlyingToken.name.toUpperCase()}` : ''}
            typographyToken="secondaryBodySmallRegular"
            value="0.00" //TODO: Alex maybe it might stay hard-coded (depends on how we implement edit position)
          />
        </CashFlowBox>
      </PositionDetailsRightBox>
    </PositionDetailsBox>
  );
};