import React from 'react';

import { SelectInput, Typography } from '@components/atomic';
import { IconLabel } from '@components/composite';
import { formatCurrency, formatNumber } from '@utilities';
import { isUndefined } from 'lodash';
import Box from '@mui/material/Box';
import { colors } from '@theme';

interface ExpectedAPYProps {
  expectedAPY?: number;
  onChangeMovesRatesBy: (value: number) => void;
  ratesMoveBy: number;
}

export const ExpectedAPY = ({ expectedAPY, onChangeMovesRatesBy, ratesMoveBy }:ExpectedAPYProps) => {
  return (
    <>
      <Box>
        <Box sx={{ 
          display: 'inline-block',
          padding: (theme) => theme.spacing(4), 
          borderRadius: '8px', 
          background: colors.lavenderWeb.darken045 
        }}>
          <Typography
            variant="h3"
            label={<IconLabel label="Expected APY" icon="information-circle" info="This is the expected APY of your position if rates move by your selected amount." />}
            agentStyling
          >
            {!isUndefined(expectedAPY) ? `${formatCurrency(expectedAPY, true)}%` : '---'}
          </Typography>
        </Box>
        <Box sx={{
          display: 'inline-block',
          padding: (theme) => theme.spacing(4), 
          marginLeft: (theme) => theme.spacing(6)
        }}>
          <SelectInput 
            name="ratesMoveBy"
            label={<IconLabel label="Rates move by:" icon="information-circle" info="Select the percentage of rate movement that you would like to simulate." />} 
            onChange={(event) => onChangeMovesRatesBy(event.target.value as number)}
            options={[
              { label: '-1%', value: -1 },
              { label: '1%',  value: 1  },
              { label: '5%',  value: 5  },
              { label: '10%', value: 10 },
            ]}
            value={ratesMoveBy}
            size="small"
            sx={{ width: '80px' }}
          />
        </Box>
      </Box>
      <Box sx={{ marginTop: (theme) => theme.spacing(4) }}>
        <Typography variant='body1' sx={{ color: colors.lavenderWeb.darken020, fontSize: '14px' }}>
          Generate an expected APY for a given movement in rates. The expected APY factors in pool conditions and the details of your position.
        </Typography>
      </Box>
    </>
  );
};

export default ExpectedAPY;