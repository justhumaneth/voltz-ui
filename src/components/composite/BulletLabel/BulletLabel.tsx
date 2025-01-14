import CircleIcon from '@mui/icons-material/Circle';
import React, { ReactNode } from 'react';

import { SystemStyleObject, Theme } from '../../../theme';
import { Typography } from '../../atomic/Typography/Typography';

export type BulletLabelProps = {
  sx?: SystemStyleObject<Theme>;
  text?: ReactNode;
};

const labelStyles: SystemStyleObject<Theme> = {
  fontSize: '14px',
  lineHeight: '1',
  textTransform: 'uppercase',
  display: 'flex',
  verticalAlign: 'middle',
};

export const BulletLabel: React.FunctionComponent<BulletLabelProps> = ({ sx = {}, text }) => {
  return (
    <Typography sx={{ ...labelStyles, ...sx }} variant="body2">
      <CircleIcon
        sx={{
          width: 4,
          height: 14,
          borderRadius: '16px',
          marginRight: (theme) => theme.spacing(2),
        }}
      />
      {text}
    </Typography>
  );
};
