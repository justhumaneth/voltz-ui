import Box from '@mui/material/Box';
import React from 'react';

import { Neons } from './Neons/Neons';

export const Background: React.FunctionComponent = ({ children }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(152.9deg, #231D40 0%, #151126 52.6%, #201A3A 100%)',
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      boxSizing: 'border-box',
    }}
  >
    <Box
      sx={{
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <Neons />
    </Box>
    {children}
  </Box>
);
