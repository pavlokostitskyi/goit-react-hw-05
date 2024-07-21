import  { useEffect, useState  } from 'react';
import { fetchTrendingMovies } from '../../components/tmdb';
import MovieList from '../../components/MovieList/MovieList';
import styles from './HomePage.module.css';
import Navigation from '../../components/Navigation/Navigation';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const results = await fetchTrendingMovies();
      setMovies(results);
    };

    fetchMovies();
  }, []);

  return (
    <div className={styles.container}>
      <Navigation />
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
