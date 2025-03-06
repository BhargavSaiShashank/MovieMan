import React, { useState } from 'react';
import { Container, Typography, CircularProgress, Box, Grid, CssBaseline } from '@mui/material';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EmotionInput from './components/EmotionInput';
import MovieList from './components/MovieList';
import MovieModal from './components/MovieModal';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const theme = createTheme({
  palette: {
    primary: {
      main: '#833AB4', // Purple
    },
    secondary: {
      main: '#F77737', // Orange
    },
    background: {
      default: '#ffffff', // White
    },
    text: {
      primary: '#000000', // Black
      secondary: '#757575', // Medium grey
    },
  },
});

const mockMovies = {
  happy: [
    { movie_id: 1, title: 'Happy Movie A', description: 'A great movie about adventure and discovery.' },
    { movie_id: 2, title: 'Happy Movie B', description: 'A touching story of love and loss.' },
  ],
  sad: [
    { movie_id: 3, title: 'Sad Movie A', description: 'An exciting thriller with unexpected twists.' },
    { movie_id: 4, title: 'Sad Movie B', description: 'A comedy that will make you laugh out loud.' },
  ],
  excited: [
    { movie_id: 5, title: 'Excited Movie A', description: 'A drama that explores deep human emotions.' },
    { movie_id: 6, title: 'Excited Movie B', description: 'A great movie about adventure and discovery.' },
  ],
  anxious: [
    { movie_id: 7, title: 'Anxious Movie A', description: 'A touching story of love and loss.' },
    { movie_id: 8, title: 'Anxious Movie B', description: 'An exciting thriller with unexpected twists.' },
  ],
  neutral: [
    { movie_id: 9, title: 'Neutral Movie A', description: 'A comedy that will make you laugh out loud.' },
    { movie_id: 10, title: 'Neutral Movie B', description: 'A drama that explores deep human emotions.' },
  ],
};

function AppContent() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleEmotionSubmit = async (emotion) => {
    setLoading(true);
    try {
      const suggestedMovies = mockMovies[emotion] || mockMovies.neutral;
      setMovies(suggestedMovies);
      setFilteredMovies(suggestedMovies);
      enqueueSnackbar('Movies fetched successfully!', { variant: 'success' });
    } catch (err) {
      enqueueSnackbar('Failed to fetch movie suggestions. Please try again.', { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  const handleSearch = (searchValue) => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Container sx={{ mt: -10 }}>
        <Box mb={5}>
          <EmotionInput onSubmit={handleEmotionSubmit} onSearch={handleSearch} />
        </Box>
        {loading && <CircularProgress />}
        <Grid container spacing={3}>
          <MovieList movies={filteredMovies} onMovieClick={handleMovieClick} />
        </Grid>
        <MovieModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          movie={selectedMovie}
        />
        <Box mt={5}>
          <Typography variant="h4" component="h2" gutterBottom>
            Description
          </Typography>
          <Typography variant="body1" gutterBottom>
            Welcome to MovieMan, an AI-powered movie recommendation system designed to help you discover movies based on your emotions. Our system leverages advanced machine learning algorithms to analyze your emotional state and suggest movies that match your mood.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Whether you're feeling happy, sad, excited, or anxious, MovieMan can provide personalized movie recommendations to suit your current emotional state. By understanding the nuances of human emotions, our AI system can curate a list of movies that will resonate with you on a deeper level.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our recommendation system is built on a vast database of movies, each tagged with various emotional attributes. When you input your current emotion, the AI analyzes the data and selects movies that align with your feelings. This ensures that you always have a list of movies that are perfect for your mood.
          </Typography>
          <Typography variant="body1" gutterBottom>
            MovieMan is constantly learning and evolving, using feedback from users to improve its recommendations. As more people use the system, it becomes better at understanding the complex relationship between emotions and movie preferences.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Experience the future of movie recommendations with MovieMan. Let our AI guide you to the perfect movie for any occasion, and discover new films that you might have never considered before. Enjoy a personalized movie-watching experience like never before with MovieMan.
          </Typography>
        </Box>
      </Container>
      <Footer />
      <ScrollToTop />
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider maxSnack={3}>
        <AppContent />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;