import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Link, useNavigate, Outlet  } from 'react-router-dom';
import { fetchMovieDetails } from '../../components/tmdb';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(setMovie)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [movieId]);

  const handleGoBack = () => {
    navigate(backLinkLocationRef.current);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
  <div className={styles.movieDetailsPage}>
    <button onClick={handleGoBack}>Go back</button>
    {movie && (
      <div>
        <h2>{movie.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <p>{movie.overview}</p>
        <nav>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </nav>
        <Outlet /> {/* Додаємо Outlet */}
      </div>
    )}
  </div>
);
};

export default MovieDetailsPage;
