import { LabelTokenTypography, TypographyToken } from 'brokoli-ui';
import React from 'react';

import { useResponsiveQuery } from '../../../hooks/useResponsiveQuery';
import { MarketTokenInformation, MarketTokenInformationProps } from '../MarketTokenInformation';
import {
  FixedBox,
  MarketTokenInformationBox,
  MaturityBox,
  PoolHeaderBox,
  PoolHeaderDetailsBox,
  VariableBox,
} from './PoolHeader.styled';
type PoolHeaderProps = {
  isAaveV3: boolean;
  isBorrowing: boolean;
  market: MarketTokenInformationProps['market'];
  token: MarketTokenInformationProps['token'];
  fixedRateFormatted: string;
  variableRate24hDelta: number | undefined;
  variableRateFormatted: string;
  aMMMaturity: string;
};

export const PoolHeader: React.FunctionComponent<PoolHeaderProps> = ({
  isAaveV3,
  isBorrowing,
  market,
  token,
  fixedRateFormatted,
  variableRate24hDelta,
  variableRateFormatted,
  aMMMaturity,
}) => {
  const { isLargeDesktopDevice } = useResponsiveQuery();

  const labelTypographyToken: TypographyToken = isLargeDesktopDevice
    ? 'primaryBodySmallRegular'
    : 'primaryBodyXSmallRegular';

  const typographyToken: TypographyToken = isLargeDesktopDevice
    ? 'secondaryBodyLargeBold'
    : 'secondaryBodyMediumBold';

  return (
    <PoolHeaderBox>
      <MarketTokenInformationBox>
        <MarketTokenInformation
          isAaveV3={isAaveV3}
          isBorrowing={isBorrowing}
          market={market}
          token={token}
        />
      </MarketTokenInformationBox>
      <PoolHeaderDetailsBox>
        <FixedBox>
          <LabelTokenTypography
            colorToken="lavenderWeb"
            label="Fixed"
            labelColorToken="lavenderWeb3"
            labelTypographyToken={labelTypographyToken}
            token="%"
            typographyToken={typographyToken}
            value={fixedRateFormatted}
          />
        </FixedBox>
        <VariableBox>
          <LabelTokenTypography
            colorToken="lavenderWeb"
            differenceValue={variableRate24hDelta}
            label="Variable"
            labelColorToken="lavenderWeb3"
            labelTypographyToken={labelTypographyToken}
            token="%"
            tooltip="Variable rate and the absolute change in the past 24 hours."
            typographyToken={typographyToken}
            value={variableRateFormatted}
          />
        </VariableBox>
        <MaturityBox>
          <LabelTokenTypography
            colorToken="lavenderWeb"
            label="Maturity"
            labelColorToken="lavenderWeb3"
            labelTypographyToken={labelTypographyToken}
            token=""
            typographyToken={typographyToken}
            value={aMMMaturity}
          />
        </MaturityBox>
      </PoolHeaderDetailsBox>
    </PoolHeaderBox>
  );
};
