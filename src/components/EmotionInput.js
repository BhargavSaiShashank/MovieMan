import React, { useState } from 'react';
import { TextField, Button, Box, Paper, Typography, InputAdornment } from '@mui/material';
import MoodIcon from '@mui/icons-material/Mood';
import SearchIcon from '@mui/icons-material/Search';

function EmotionInput({ onSubmit, onSearch }) {
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    onSearch(event.target.value);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const emotion = inputValue.toLowerCase().includes('happy') ? 'happy' :
                    inputValue.toLowerCase().includes('sad') ? 'sad' :
                    inputValue.toLowerCase().includes('excited') ? 'excited' :
                    inputValue.toLowerCase().includes('anxious') ? 'anxious' : 'neutral';
    await onSubmit(emotion);
    setInputValue('');
    setIsSubmitting(false);
  };

  return (
    <Paper elevation={3} sx={{ p: 4, mb: 3 }} id="emotion-input">
      <Typography variant="h6" gutterBottom>
        How are you feeling today?
      </Typography>
      <Box mb={3}>
        <TextField
          label="Describe your feelings"
          variant="outlined"
          value={inputValue}
          onChange={handleChange}
          disabled={isSubmitting}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MoodIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box mb={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={isSubmitting}
          fullWidth
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </Box>
      <TextField
        label="Search Movies"
        variant="outlined"
        value={searchValue}
        onChange={handleSearchChange}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Paper>
  );
}

export default EmotionInput;