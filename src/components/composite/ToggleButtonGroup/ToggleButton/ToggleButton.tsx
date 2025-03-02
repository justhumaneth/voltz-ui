import MuiToggleButton, {
  ToggleButtonProps as MuiToggleButtonProps,
} from '@mui/material/ToggleButton';
import React from 'react';

import { AgentProps, Agents } from '../../../../contexts/AgentContext/types';
import { useAgentWithOverride } from '../../../../hooks/useAgentWithOverride';
import { colors, SystemStyleObject, Theme } from '../../../../theme';

export type ToggleButtonProps = MuiToggleButtonProps & AgentProps;

export const ToggleButton: React.FunctionComponent<ToggleButtonProps> = ({
  agent: agentOverride,
  selected,
  ...props
}) => {
  const { agent } = useAgentWithOverride(agentOverride);
  const styleOverrides: SystemStyleObject<Theme> = {
    '&.MuiToggleButtonGroup-grouped': {
      minHeight: (theme) => theme.spacing(8),
      zindex: '-1',
      '&.Mui-selected': {
        zIndex: '1',
      },
    },
  };
  const agentStyleOverrides = (): SystemStyleObject<Theme> => {
    switch (agent) {
      case Agents.FIXED_TRADER: {
        return {
          backgroundColor: 'primary.darken010',
          color: 'primary.darken030',
          borderColor: 'primary.light',
          '&.Mui-selected': {
            color: 'primary.light',
            backgroundColor: 'primary.darken030',
            '&:hover': {
              backgroundColor: 'primary.darken030',
            },
            '&:not(:first-of-type)': {
              borderColor: 'primary.light',
            },
          },
        };
      }

      case Agents.VARIABLE_TRADER: {
        return {
          backgroundColor: 'tertiary.base',
          color: 'secondary.light',
          borderColor: 'primary.light',
          '&.Mui-selected': {
            backgroundColor: 'tertiary.base',
            '&:hover': {
              backgroundColor: 'tertiary.base',
            },
            '&:not(:first-of-type)': {
              borderColor: 'secondary.light',
            },
          },
        };
      }

      case Agents.LIQUIDITY_PROVIDER: {
        return {
          backgroundColor: 'secondary.dark',
          color: 'primary.light',
          borderColor: 'secondary.light',
          '&:hover': {
            backgroundColor: 'secondary.darken035',
          },
          '&.Mui-selected': {
            backgroundColor: 'secondary.main',
            '&:hover': {
              backgroundColor: 'secondary.darken015',
            },
            '&:not(:first-of-type)': {
              borderColor: 'secondary.light',
            },
          },
        };
      }

      default:
        return {};
    }
  };
  const stateStyleOverrides = (): SystemStyleObject<Theme> => {
    if (!selected) {
      return {
        backgroundColor: colors.vzGreyDarker.base,
        color: colors.vzGreyDark.base,
        borderColor: colors.vzGreyDark.base,
      };
    }

    return {};
  };

  return (
    <MuiToggleButton
      {...props}
      selected={selected}
      sx={{ ...styleOverrides, ...agentStyleOverrides(), ...stateStyleOverrides() }}
      disableFocusRipple
      disableRipple
      disableTouchRipple
    />
  );
};
