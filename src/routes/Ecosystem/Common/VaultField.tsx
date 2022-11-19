import { IconLabel } from '@components/composite';
import { Typography } from '@components/atomic';
import { Box } from '@mui/system';
import React from 'react';
import { titleStyles } from './styles';
import { ReactComponent as Mellow } from '../mellow-icon.svg';

type VaultFieldProps = {
  title: string;
  expectedApy: string;
  maturity: string;
};

export const VaultField: React.FunctionComponent<VaultFieldProps> = ({
  title,
  expectedApy,
  maturity,
}: VaultFieldProps) => {
  return (
    <Box>
      <Box sx={{ display: 'flex', marginLeft: '8px', marginTop: '16px', alignItems: 'center' }}>
        <Mellow />

        <Typography variant="h1" sx={titleStyles}>
          {title}
        </Typography>
      </Box>
      <Box sx={{ marginTop: '16px', display: 'flex', maxWidth: '275px', marginLeft: '8px' }}>
        <Typography
          variant="body2"
          sx={{ fontSize: '24px', color: '#FF4AA9', fontFamily: 'DM Sans', fontWeight: '700' }}
          label={
            <IconLabel
              label="Estimated Historic APY"
              icon="information-circle"
              info="This shows the estimated returns that would have been generated had the strategy been running from Jul 22 to Oct 22."
            />
          }
        >
          {expectedApy}
        </Typography>

        <Box>
          <Typography
            variant="body2"
            sx={{
              fontSize: '16px',
              color: '#E5E1F9',
              fontFamily: 'DM Sans',
              fontWeight: '700',
              marginTop: '8px',
            }}
            label={
              <IconLabel
                label="Running until"
                icon="information-circle"
                info={`This strategy will run until ${maturity}. At this point depositors can collect any returns that may have been generated and withdraw their funds.`}
              />
            }
          >
            {maturity}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};