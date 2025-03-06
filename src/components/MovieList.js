import React from 'react';
import { Grid, Card, CardContent, Typography, CardActionArea, CardMedia } from '@mui/material';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

function MovieList({ movies, onMovieClick }) {
  return (
    <Grid container spacing={3}>
      {movies.map((movie, index) => (
        <Grid item xs={12} sm={6} md={4} key={movie.movie_id} sx={{ animation: `${fadeIn} 0.5s ease-out ${index * 0.1}s` }}>
          <Card>
            <CardActionArea onClick={() => onMovieClick(movie)}>
              <CardMedia
                component="img"
                height="200"
                image={`https://via.placeholder.com/300x200?text=${movie.title}`}
                alt={movie.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {movie.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {movie.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default MovieList;