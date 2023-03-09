import { CurrencyField, LabelTokenTypography, Typography, TypographyToken } from 'brokoli-ui';
import debounce from 'lodash.debounce';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import {
  getExpectedCashflowInfoThunk,
  selectAdditionalCashflow,
  selectAMMTokenFormatted,
  selectCashflowInfoStatus,
  selectEstimatedApy,
  selectInfoPostSwap,
  selectSwapFormAMM,
  selectTotalCashflow,
  setEstimatedApyAction,
} from '../../../../app/features/swap-form';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { useResponsiveQuery } from '../../../../hooks/useResponsiveQuery';
import { formatCurrency, stringToBigFloat } from '../../../../utilities/number';
import {
  AdditionalCashFlowBox,
  CashFlowCalculatorBox,
  CashFlowCalculatorLeftBox,
  CashFlowCalculatorRightBox,
  ExpectedApyBox,
  TotalCashFlowBox,
} from './CashflowCalculator.styled';

type CashFlowCalculatorProps = {};

export const CashFlowCalculator: React.FunctionComponent<CashFlowCalculatorProps> = () => {
  const dispatch = useAppDispatch();
  const aMM = useAppSelector(selectSwapFormAMM);
  const token = useAppSelector(selectAMMTokenFormatted);
  const { isLargeDesktopDevice } = useResponsiveQuery();
  const infoPostSwap = useAppSelector(selectInfoPostSwap);

  const estimatedApy = useAppSelector(selectEstimatedApy);

  const additionalCashflow = useAppSelector(selectAdditionalCashflow);
  const totalCashflow = useAppSelector(selectTotalCashflow);
  const [localEstimatedApy, setLocalEstimatedApy] = useState<string | undefined>(
    estimatedApy.toString(),
  );

  const cashflowInfoStatus = useAppSelector(selectCashflowInfoStatus);

  useEffect(() => {
    setLocalEstimatedApy(estimatedApy.toString());
  }, [estimatedApy]);

  useEffect(() => {
    if (!aMM || infoPostSwap.status !== 'success') {
      return;
    }
    void dispatch(getExpectedCashflowInfoThunk());
  }, [dispatch, aMM, infoPostSwap.status, infoPostSwap.value.variableTokenDeltaBalance]);

  const debouncedChangePredictedApy = useMemo(
    () =>
      debounce((value: number) => {
        dispatch(
          setEstimatedApyAction({
            value,
          }),
        );
      }, 300),
    [dispatch],
  );

  const handleOnChange = useCallback(
    (value?: string) => {
      setLocalEstimatedApy(value);

      const valueAsNumber = value !== undefined ? stringToBigFloat(value) : 0;
      debouncedChangePredictedApy(valueAsNumber);
    },
    [debouncedChangePredictedApy],
  );

  // Stop the invocation of the debounced function
  // after unmounting
  useEffect(() => {
    return () => {
      debouncedChangePredictedApy.cancel();
    };
  }, []);

  if (!aMM) {
    return null;
  }

  const titleTypographyToken: TypographyToken = isLargeDesktopDevice
    ? 'primaryBodyLargeBold'
    : 'primaryBodyMediumBold';

  const expectedVariableApyTypographyToken: TypographyToken = isLargeDesktopDevice
    ? 'primaryBodySmallRegular'
    : 'primaryBodyXSmallRegular';

  const labelTypographyToken: TypographyToken = isLargeDesktopDevice
    ? 'primaryBodySmallRegular'
    : 'primaryBodyXSmallRegular';

  const typographyToken: TypographyToken = isLargeDesktopDevice
    ? 'secondaryBodySmallRegular'
    : 'secondaryBodyMediumRegular';

  return (
    <CashFlowCalculatorBox>
      <CashFlowCalculatorLeftBox>
        <Typography colorToken="lavenderWeb" typographyToken={titleTypographyToken}>
          Cashflow Simulator
        </Typography>
      </CashFlowCalculatorLeftBox>
      <CashFlowCalculatorRightBox>
        <ExpectedApyBox>
          <Typography
            colorToken="lavenderWeb3"
            typographyToken={expectedVariableApyTypographyToken}
          >
            Expected Variable APY
          </Typography>
          <CurrencyField
            allowNegativeValue={false}
            disabled={cashflowInfoStatus !== 'success'}
            suffix="%"
            value={localEstimatedApy}
            onChange={handleOnChange}
          />
        </ExpectedApyBox>
        <AdditionalCashFlowBox>
          <LabelTokenTypography
            colorToken="lavenderWeb"
            label="Additional Cashflow"
            labelColorToken="lavenderWeb3"
            labelTypographyToken={labelTypographyToken}
            token={token}
            tooltip="Calculated based on the notional amount and trade side specified in the form for swap."
            typographyToken={typographyToken}
            value={
              additionalCashflow !== null
                ? formatCurrency(additionalCashflow, true, true, 2, 4)
                : '--'
            }
          />
        </AdditionalCashFlowBox>
        <TotalCashFlowBox>
          <LabelTokenTypography
            colorToken="lavenderWeb"
            label="Total Cashflow"
            labelColorToken="lavenderWeb3"
            labelTypographyToken={labelTypographyToken}
            token={token}
            tooltip="Calculated based on the current position plus the notional amount and trade side specified in the form for swap."
            typographyToken={typographyToken}
            value={totalCashflow !== null ? formatCurrency(totalCashflow, true, true, 2, 4) : '--'}
          />
        </TotalCashFlowBox>
      </CashFlowCalculatorRightBox>
    </CashFlowCalculatorBox>
  );
};
