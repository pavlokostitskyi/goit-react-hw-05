import { Link, useLocation } from 'react-router-dom';
import styles from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();
  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <ul className={styles.movieList}>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id} className={styles.movieItem}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={poster_path ? `${BASE_IMAGE_URL}${poster_path}` : 'https://via.placeholder.com/150'}
              alt={title}
              className={styles.poster}
            />
            <p>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;