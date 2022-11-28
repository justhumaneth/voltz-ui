import React from 'react';

import { Typography } from '../../../../../../atomic/Typography/Typography';
import TableCell from '@mui/material/TableCell';
import { formatNumber } from '../../../../../../../utilities/number';

export type BorrowBorrowFixedAPR = {
  loading: boolean;
  fixedApr: number | null | void;
};

export const BorrowFixedAPR: React.FunctionComponent<BorrowBorrowFixedAPR> = ({
  loading,
  fixedApr,
}) => {
  const renderValue = () => {
    if (loading) {
      return '---';
    }

    if (!fixedApr) {
      return '0%';
    }

    return `${formatNumber(fixedApr)}%`;
  };

  return (
    <TableCell align="center" width="20%">
      <Typography
        variant="body2"
        sx={{
          fontSize: 18,
          color: 'primary.light',
          fontWeight: 700,
          letterSpacing: '0.02em',
          lineHeight: '130%',
        }}
      >
        {renderValue()}
      </Typography>
    </TableCell>
  );
};
