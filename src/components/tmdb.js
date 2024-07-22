import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjEwMWFhZWJiNDNmOGUzNzJhN2I2MGJlYTJiZWY0OSIsIm5iZiI6MTcyMTY0MzIwMy41NjUyLCJzdWIiOiI2Njk3OWQ3ODhmMmMzOWVhOTA3YzhmNGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KGJ08GeX92cWu_FdRnplFV7wV_TS8wqFF74EdXqaOfk';
const BASE_URL = 'https://api.themoviedb.org/3';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const fetchTrendingMovies = async () => {
  try {
    const { data } = await instance.get('/trending/movie/day');
    if (!data.results) {
      throw new Error('Invalid data structure for trending movies');
    }
    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error.message);
    console.error('Error response:', error.response?.data || error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const { data } = await instance.get('/search/movie', {
      params: { query, include_adult: false },
    });
    if (!data.results) {
      throw new Error('Invalid data structure for search results');
    }
    return data.results;
  } catch (error) {
    console.error('Error searching movies:', error.message);
    console.error('Error response:', error.response?.data || error);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const { data } = await instance.get(`/movie/${movieId}`);
    if (!data) {
      throw new Error('Invalid data structure for movie details');
    }
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error.message);
    console.error('Error response:', error.response?.data || error);
    throw error;
  }
};

export const fetchMovieCast = async (movieId) => {
  try {
    const { data } = await instance.get(`/movie/${movieId}/credits`);
    if (!data.cast) {
      throw new Error('Invalid data structure for movie credits');
    }
    return data.cast;
  } catch (error) {
    console.error('Error fetching movie credits:', error.message);
    console.error('Error response:', error.response?.data || error);
    throw error;
  }
};

export const fetchMovieReviews = async (movieId) => {
  try {
    const { data } = await instance.get(`/movie/${movieId}/reviews`);
    if (!data.results) {
      throw new Error('Invalid data structure for movie reviews');
    }
    return data.results;
  } catch (error) {
    console.error('Error fetching movie reviews:', error.message);
    console.error('Error response:', error.response?.data || error);
    throw error;
  }
};
