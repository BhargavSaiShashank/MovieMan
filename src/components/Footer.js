import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ bgcolor: '#833AB4', color: 'white', p: 2, mt: 5 }}>
      <Typography variant="body1" align="center">
        &copy; {new Date().getFullYear()} MovieMan. All rights reserved.
      </Typography>
      <Typography variant="body2" align="center">
        <Link href="#" color="inherit" underline="hover">
          Privacy Policy
        </Link>
        {' | '}
        <Link href="#" color="inherit" underline="hover">
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;