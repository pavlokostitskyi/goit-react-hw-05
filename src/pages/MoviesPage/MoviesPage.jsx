import  { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {  searchMovies } from '../../components/tmdb';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css'

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    searchMovies(query)
      .then(setMovies)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query });
  };

  return (
    <div className={styles.moviesPage}>
      <h1>Search Movies</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
        />
        <button type="submit">Search</button>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;