import { styled } from '@mui/material/styles';
import ToggleButtonComponent from '@mui/material/ToggleButton';

import { Typography } from '../../../../components/atomic/Typography/Typography';

export const SeasonTypography = styled(Typography)`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  font-family: 'PixelOperatorMono', monospace;
  padding: ${({ theme }) => theme.spacing(1, 2)};
`;

export const ToggleButton = styled(ToggleButtonComponent)`
  &.MuiToggleButtonGroup-grouped {
    padding: 0;
    margin: 0;
    background: transparent;
  }

  &.MuiToggleButtonGroup-grouped:hover {
    background: #251f3f;
  }

  &.Mui-selected {
    background: #2b2548;
  }
`;
