import  { useState  } from 'react';
import { searchMovies } from '../../components/tmdb';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';
import Navigation from '../../components/Navigation/Navigation';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div className={styles.container}>
      <Navigation />
      <h1>Search Movies</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter movie title"
      />
      <button onClick={handleSearch}>Search</button>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
