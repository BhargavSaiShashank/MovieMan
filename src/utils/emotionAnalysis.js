const analyzeEmotion = async (text) => {
    // Predefined emotions and their corresponding movie suggestions with detailed information
    const emotions = {
      happy: [
        { title: 'Movie 1', description: 'Description for Movie 1', genre: 'Comedy', year: 2020, rating: 8.5 },
        { title: 'Movie 2', description: 'Description for Movie 2', genre: 'Romantic Comedy', year: 2019, rating: 8.0 },
      ],
      sad: [
        { title: 'Movie 3', description: 'Description for Movie 3', genre: 'Drama', year: 2018, rating: 7.5 },
        { title: 'Movie 4', description: 'Description for Movie 4', genre: 'Tragedy', year: 2017, rating: 7.0 },
      ],
      angry: [
        { title: 'Movie 5', description: 'Description for Movie 5', genre: 'Action', year: 2021, rating: 8.7 },
        { title: 'Movie 6', description: 'Description for Movie 6', genre: 'Thriller', year: 2020, rating: 8.3 },
      ],
      excited: [
        { title: 'Movie 7', description: 'Description for Movie 7', genre: 'Adventure', year: 2021, rating: 8.7 },
        { title: 'Movie 8', description: 'Description for Movie 8', genre: 'Action', year: 2020, rating: 8.3 },
      ],
      surprised: [
        { title: 'Movie 9', description: 'Description for Movie 9', genre: 'Mystery', year: 2021, rating: 8.7 },
        { title: 'Movie 10', description: 'Description for Movie 10', genre: 'Thriller', year: 2020, rating: 8.3 },
      ],
      scared: [
        { title: 'Movie 11', description: 'Description for Movie 11', genre: 'Horror', year: 2021, rating: 8.7 },
        { title: 'Movie 12', description: 'Description for Movie 12', genre: 'Thriller', year: 2020, rating: 8.3 },
      ],
      disgusted: [
        { title: 'Movie 13', description: 'Description for Movie 13', genre: 'Drama', year: 2021, rating: 8.7 },
        { title: 'Movie 14', description: 'Description for Movie 14', genre: 'Thriller', year: 2020, rating: 8.3 },
      ],
      neutral: [
        { title: 'Movie 15', description: 'Description for Movie 15', genre: 'Documentary', year: 2021, rating: 8.7 },
        { title: 'Movie 16', description: 'Description for Movie 16', genre: 'Drama', year: 2020, rating: 8.3 },
      ],
      anxious: [
        { title: 'Movie 17', description: 'Description for Movie 17', genre: 'Thriller', year: 2021, rating: 8.7 },
        { title: 'Movie 18', description: 'Description for Movie 18', genre: 'Drama', year: 2020, rating: 8.3 },
      ],
      bored: [
        { title: 'Movie 19', description: 'Description for Movie 19', genre: 'Comedy', year: 2021, rating: 8.7 },
        { title: 'Movie 20', description: 'Description for Movie 20', genre: 'Adventure', year: 2020, rating: 8.3 },
      ],
      calm: [
        { title: 'Movie 21', description: 'Description for Movie 21', genre: 'Drama', year: 2021, rating: 8.7 },
        { title: 'Movie 22', description: 'Description for Movie 22', genre: 'Romance', year: 2020, rating: 8.3 },
      ],
      confident: [
        { title: 'Movie 23', description: 'Description for Movie 23', genre: 'Action', year: 2021, rating: 8.7 },
        { title: 'Movie 24', description: 'Description for Movie 24', genre: 'Adventure', year: 2020, rating: 8.3 },
      ],
      confused: [
        { title: 'Movie 25', description: 'Description for Movie 25', genre: 'Mystery', year: 2021, rating: 8.7 },
        { title: 'Movie 26', description: 'Description for Movie 26', genre: 'Thriller', year: 2020, rating: 8.3 },
      ],
      content: [
        { title: 'Movie 27', description: 'Description for Movie 27', genre: 'Drama', year: 2021, rating: 8.7 },
        { title: 'Movie 28', description: 'Description for Movie 28', genre: 'Romance', year: 2020, rating: 8.3 },
      ],
      depressed: [
        { title: 'Movie 29', description: 'Description for Movie 29', genre: 'Drama', year: 2021, rating: 8.7 },
        { title: 'Movie 30', description: 'Description for Movie 30', genre: 'Tragedy', year: 2020, rating: 8.3 },
      ],
      embarrassed: [
        { title: 'Movie 31', description: 'Description for Movie 31', genre: 'Comedy', year: 2021, rating: 8.7 },
        { title: 'Movie 32', description: 'Description for Movie 32', genre: 'Romantic Comedy', year: 2020, rating: 8.3 },
      ],
      envious: [
        { title: 'Movie 33', description: 'Description for Movie 33', genre: 'Drama', year: 2021, rating: 8.7 },
        { title: 'Movie 34', description: 'Description for Movie 34', genre: 'Thriller', year: 2020, rating: 8.3 },
      ],
      frustrated: [
        { title: 'Movie 35', description: 'Description for Movie 35', genre: 'Action', year: 2021, rating: 8.7 },
        { title: 'Movie 36', description: 'Description for Movie 36', genre: 'Thriller', year: 2020, rating: 8.3 },
      ],
      grateful: [
        { title: 'Movie 37', description: 'Description for Movie 37', genre: 'Drama', year: 2021, rating: 8.7 },
        { title: 'Movie 38', description: 'Description for Movie 38', genre: 'Romance', year: 2020, rating: 8.3 },
      ],
      guilty: [
        { title: 'Movie 39', description: 'Description for Movie 39', genre: 'Drama', year: 2021, rating: 8.7 },
        { title: 'Movie 40', description: 'Description for Movie 40', genre: 'Thriller', year: 2020, rating: 8.3 },
      ],
      hopeful: [
        { title: 'Movie 41', description: 'Description for Movie 41', genre: 'Drama', year: 2021, rating: 8.7 },
        { title: 'Movie 42', description: 'Description for Movie 42', genre: 'Romance', year: 2020, rating: 8.3 },
      ],
      hurt: [
        { title: 'Movie 43', description: 'Description for Movie 43', genre: 'Drama', year: 2021, rating: 8.7 },
        { title: 'Movie 44', description: 'Description for Movie 44', genre: 'Tragedy', year: 2020, rating: 8.3 },
      ],
      inspired: [
        { title: 'Movie 45', description: 'Description for Movie 45', genre: 'Drama', year: 2021, rating: 8.7 },
        { title: 'Movie 46', description: 'Description for Movie 46', genre: 'Adventure', year: 2020, rating: 8.3 },
      ],
      jealous: [
        { title: 'Movie 47', description: 'Description for Movie 47', genre: 'Drama', year: 2021, rating: 8.7 },
        { title: 'Movie 48', description: 'Description for Movie 48', genre: 'Thriller', year: 2020, rating: 8.3 },
      ],
      lonely: [
        { title: 'Movie 49', description: 'Description for Movie 49', genre: 'Drama', year: 2021, rating: 8.7 },
        { title: 'Movie 50', description: 'Description for Movie 50', genre: 'Romance', year: 2020, rating: 8.3 },
      ],
      loved: [
        { title: 'Movie 51', description: 'Description for Movie 51', genre: 'Romance', year: 2021, rating: 8.7 },
        { title: 'Movie 52', description: 'Description for Movie 52', genre: 'Romantic Comedy', year: 2020, rating: 8.3 },
      ],
      nervous: [
        { title: 'Movie 53', description: 'Description for Movie 53', genre: 'Thriller', year: 2021, rating: 8.7 },
        { title: 'Movie 54', description: 'Description for Movie 54', genre: 'Drama', year: 2020, rating: 8.3 },
      ],
      overwhelmed: [
        { title: 'Movie 55', description: 'Description for Movie 55', genre: 'Drama', year: 2021, rating: 8.7 },
        { title: 'Movie 56', description: 'Description for Movie 56', genre: 'Thriller', year: 2020, rating: 8.3 },
      ],
      proud: [
        { title: 'Movie 57', description: 'Description for Movie 57', genre: 'Drama', year: 2021, rating: 8.7 },
        { title: 'Movie 58', description: 'Description for Movie 58', genre: 'Adventure', year: 2020, rating: 8.3 },
      ],
      relieved: [
        { title: 'Movie 59', description: 'Description for Movie 59', genre: 'Drama', year: 2021, rating: 8.7 },
        { title: 'Movie 60', description: 'Description for Movie 60', genre: 'Romance', year: 2020, rating: 8.3 },
      ],
      stressed: [
        { title: 'Movie 61', description: 'Description for Movie 61', genre: 'Thriller', year: 2021, rating: 8.7 },
        { title: 'Movie 62', description: 'Description for Movie 62', genre: 'Drama', year: 2020, rating: 8.3 },
      ],
    };
  
    // Simulate an API call with a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        const emotion = text.toLowerCase();
        resolve(emotions[emotion] || []);
      }, 1000);
    });
  };
  
  export default analyzeEmotion;