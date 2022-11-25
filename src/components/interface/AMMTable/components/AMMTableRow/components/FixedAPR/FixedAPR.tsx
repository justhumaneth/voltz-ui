import React from 'react';

import { Typography } from '@components/atomic';
import TableCell from '@mui/material/TableCell';
import { formatNumber } from '../../../../../../../utilities';
import isUndefined from 'lodash/isUndefined';

export type FixedAPRProps = {
  fixedApr?: number;
};

export const FixedAPR: React.FunctionComponent<FixedAPRProps> = ({ fixedApr }) => {
  const renderValue = () => {
    if (isUndefined(fixedApr)) {
      return 'Loading...';
    }

    return `${formatNumber(fixedApr)}%`;
  };

  return (
    <TableCell>
      <Typography variant="body2" label="Fixed APR" agentStyling sx={{ fontSize: 18 }}>
        {renderValue()}
      </Typography>
    </TableCell>
  );
};
