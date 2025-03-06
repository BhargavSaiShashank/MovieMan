import React from 'react';
import { Card, CardContent, Typography, CardActionArea, CardMedia, Box, Grow } from '@mui/material';

function MovieCard({ title, description, genre, year, rating, onClick }) {
  return (
    <Grow in={true} timeout={1000}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={onClick}>
          <CardMedia
            component="img"
            height="140"
            image={`https://via.placeholder.com/300x140.png?text=${title}`}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {description}
            </Typography>
            <Box mt={2}>
              <Typography variant="body2" color="textSecondary">
                Genre: {genre}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Year: {year}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Rating: {rating}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grow>
  );
}

export default MovieCard;