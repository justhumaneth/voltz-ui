import React from 'react';
import Box from '@mui/material/Box';

import { Typography } from '@components/atomic';
import IconLabel from '../IconLabel/IconLabel';
import { VariableAPY, FixedAPR } from './components';
import { isBorrowing } from '@utilities';
import { useAMMContext } from '@contexts';

export type ProtocolInformationProps = {
  protocol?: string;
  isBorrowForm?: boolean;
};

const ProtocolInformation: React.FunctionComponent<ProtocolInformationProps> = ({
  protocol,
  isBorrowForm
}) => {
  const { amm } = useAMMContext();
  const getPoolLabel = () => (
    <>
      <Box component='span' sx={{ color: '#9B97AD' }}>
      POOL
        </Box>
        {(amm && isBorrowing(amm.rateOracle.protocolId)) && (<Box component='span' sx={{ color: '#FF4AA9' }}>
          {'  '}
          <strong>BORROWING</strong>
        </Box>)}
    </>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        marginBottom: (theme) => theme.spacing(6),
        '.MuiFormControl-root': {
          paddingRight: 3,
          '&:last-child': {
            paddingRight: 0,
          }
        },
      }}
    >
      <Typography
        label={<IconLabel label={getPoolLabel()} icon="information-circle" removeIcon={(protocol === "stETH" || protocol === "rETH") ? false : true} info={(protocol === "stETH" || protocol === "rETH") ? `Trade rates in the ${protocol} pool by depositing ETH as margin. ${protocol} cannot be used as a form of margin until post-merge.` : ""} />}
        variant="h3"
      >
        {protocol}
      </Typography>
      {isBorrowForm !== true && <FixedAPR />}
      {isBorrowForm !== true && <VariableAPY />}
    </Box>
  );
};

export default ProtocolInformation;
