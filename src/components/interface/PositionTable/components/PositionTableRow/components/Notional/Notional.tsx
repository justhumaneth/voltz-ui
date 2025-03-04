import isUndefined from 'lodash.isundefined';
import React from 'react';

import { formatNumber } from '../../../../../../../utilities/number';
import { Button } from '../../../../../../atomic/Button/Button';
import { Typography } from '../../../../../../atomic/Typography/Typography';

export type NotionalProps = {
  notional?: number;
  onEdit?: () => void;
  token: string;
};

export const Notional: React.FunctionComponent<NotionalProps> = ({ notional, onEdit, token }) => {
  return (
    <>
      <Typography label="Notional" sx={{ fontSize: 18 }} variant="body2">
        {isUndefined(notional) ? 'Loading...' : `${formatNumber(notional)} ${token}`}
      </Typography>

      {onEdit && (
        <Button
          size="small"
          sx={{ width: '100%', display: 'flex' }}
          variant="red2"
          onClick={onEdit}
        >
          Edit
        </Button>
      )}
    </>
  );
};
