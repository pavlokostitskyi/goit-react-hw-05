import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjEwMWFhZWJiNDNmOGUzNzJhN2I2MGJlYTJiZWY0OSIsIm5iZiI6MTcyMTU4MTQwMC4wMjE1MTEsInN1YiI6IjY2OTc5ZDc4OGYyYzM5ZWE5MDdjOGY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dWMHEi4NDpzSggpz0J2vFe1W1N6wmqXS-lShHAPIpss';
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
    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const { data } = await instance.get('/search/movie', {
      params: { query, include_adult: false },
    });
    return data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const { data } = await instance.get(`/movie/${movieId}`);
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const fetchMovieCredits = async (movieId) => {
  try {
    const { data } = await instance.get(`/movie/${movieId}/credits`);
    return data.cast;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    throw error;
  }
};

export const fetchMovieReviews = async (movieId) => {
  try {
    const { data } = await instance.get(`/movie/${movieId}/reviews`);
    return data.results;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
};
