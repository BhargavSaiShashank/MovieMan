import React from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

function Hero() {
  return (
    <Box
      sx={{
        height: '40vh',
        background: 'linear-gradient(45deg, #833AB4, #FD1D1D, #F77737)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        p: 4,
        color: 'white', // Ensure the text color is white for readability
        animation: `${fadeIn} 1s ease-out`,
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to MovieMan
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        Discover movies based on your emotions
      </Typography>
    </Box>
  );
}

export default Hero;