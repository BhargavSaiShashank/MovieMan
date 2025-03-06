import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

function MovieModal({ isOpen, onRequestClose, movie }) {
  if (!movie) return null;

  return (
    <Modal open={isOpen} onClose={onRequestClose}>
      <Box sx={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        width: 400, 
        bgcolor: 'background.paper', 
        boxShadow: 24, 
        p: 4 
      }}>
        <Typography variant="h6" component="h2">
          {movie.title}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          {movie.description}
        </Typography>
        <Button onClick={onRequestClose} sx={{ mt: 2 }} variant="contained" color="primary">
          Close
        </Button>
      </Box>
    </Modal>
  );
}

export default MovieModal;