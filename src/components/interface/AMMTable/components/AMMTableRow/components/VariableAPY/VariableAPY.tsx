import React, { useEffect } from 'react';
import TableCell from '@mui/material/TableCell';

import { useAMMContext } from '@contexts';
import { Typography } from '@components/atomic';
import { formatNumber } from '@utilities';

const VariableAPY: React.FunctionComponent = () => {
  const { variableApy } = useAMMContext();
  const { result, loading, call } = variableApy;

  useEffect(() => {
    call();
  }, [call]);

  const renderValue = () => {
    if (loading) {
      return 'Loading...';
    }

    if (!result) {
      return '0%';
    }

    return `${formatNumber(result * 100)}%`;
  };

  return (
    <TableCell>
      <Typography variant="body2" label="Variable APY" agentStyling sx={{fontSize: 18}}>
        {renderValue()}
      </Typography>
    </TableCell>
  );
};

export default VariableAPY;
