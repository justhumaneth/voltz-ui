import React, { ReactNode, useState } from 'react';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';

import { SystemStyleObject, Theme } from '../../../theme';
import { Typography } from '../../atomic/Typography/Typography';
import { Icon } from '../../atomic/Icon/Icon';
import { Icons } from '../../atomic/Icon/types';
import { Panel } from '../../atomic/Panel/Panel';

export type IconLabelProps = {
  label: string | ReactNode;
  icon: Icons;
  info?: ReactNode;
  removeIcon?: boolean;
  iconSx?: SystemStyleObject<Theme>;
};

export const IconLabel: React.FunctionComponent<IconLabelProps> = ({
  label,
  icon,
  info,
  removeIcon,
  iconSx = {},
}) => {
  const [anchor, setAnchor] = useState<SVGElement | null>(null);
  const handlePopoverOpen = (event: React.MouseEvent<SVGElement>) => {
    setAnchor(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchor(null);
  };
  const open = Boolean(anchor);

  let _display = 'inline';

  if (removeIcon) {
    _display = 'none';
  }

  return (
    <>
      {typeof label === 'string' ? label.toUpperCase() : label}
      <Icon
        name={icon}
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        sx={{
          height: 10,
          width: 10,
          position: 'relative',
          top: 1,
          marginLeft: '10px',
          display: _display,
          ...iconSx,
        }}
      />
      {info && (
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: 'none',
            '& .MuiPaper-root': {
              backgroundColor: 'transparent',
              color: 'unset',
              backgroundImage: 'unset',
              boxShadow: 'unset',
              borderRadius: 0,
              overflow: 'hidden',
            },
          }}
          open={open}
          anchorEl={anchor}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Panel variant="iconLabel">
            <Typography
              variant="caption"
              sx={{
                fontFamily: 'DM Sans',
                fontStyle: 'normal',
                fontSize: 12,
                lineHeight: '150%',
              }}
            >
              {info}
            </Typography>
          </Panel>
          <Box
            sx={{
              backgroundColor: 'transparent',
              color: 'unset',
              backgroundImage: 'unset',
              boxShadow: 'unset',
              position: 'relative',
              mt: '10px',
              '&::before': {
                backgroundColor: 'secondary.darken045',
                content: '""',
                display: 'block',
                position: 'absolute',
                width: 12,
                height: 12,
                top: -16,
                zIndex: -1,
                transform: 'rotate(45deg)',
                left: 'calc(50% - 6px)',
              },
            }}
          />
        </Popover>
      )}
    </>
  );
};
