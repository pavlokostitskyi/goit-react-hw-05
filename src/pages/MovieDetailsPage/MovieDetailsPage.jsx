import  { useEffect, useState, Suspense } from 'react';
import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from '../../components/tmdb';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const from = location.state?.from || '/movies';

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await fetchMovieDetails(movieId);
        setMovie(details);
      } catch (error) {
        setError('Не вдалося завантажити деталі фільму.');
      }
    };

    fetchDetails();
  }, [movieId]);

  if (error) return <div>{error}</div>;
  if (!movie) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <Link to={from} className={styles.goBack}>Go back</Link>
      <h1>{movie.title}</h1>
      <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title} 
        className={styles.poster}
      />
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>

      <nav className={styles.nav}>
        <Link to={`/movies/${movieId}/cast`} state={{ from: location.pathname }}>Cast</Link>
        <Link to={`/movies/${movieId}/reviews`} state={{ from: location.pathname }}>Reviews</Link>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
