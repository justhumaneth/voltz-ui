import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import { Pill } from '../../../../components/atomic/Pill/Pill';
import { Typography } from '../../../../components/atomic/Typography/Typography';
import { colors } from '../../../../theme';

export const ContainerBox = styled(Box)`
  width: 724px;
  margin: 0 auto;
  background: transparent;
`;

export const PillBox = styled(Pill)`
  margin-right: ${({ theme }) => theme.spacing(2)};
`;

export const Heading = styled(Typography)`
  font-weight: 400;
`;

export const Subheading = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(2)};
  line-height: 160%;
  font-size: 14px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  color: ${colors.lavenderWeb.darken015};
`;

export const ConnectWalletBox = styled(Box)`
  margin-top: ${({ theme }) => theme.spacing(6)};
  background-color: #19152a;
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing(2, 4)};
`;

export const ConnectWalletTypography = styled(Typography)`
  color: ${colors.lavenderWeb.darken015};
`;
