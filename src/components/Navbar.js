import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #833AB4, #FD1D1D, #F77737)' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MovieMan
        </Typography>
        <Box>
          <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#F77737' } }}>Home</Button>
          <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#F77737' } }}>About</Button>
          <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#F77737' } }}>Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;