import { Link } from 'react-router-dom';
import styles from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <div className={styles.container}>
      {movies.map(movie => (
        <div key={movie.id} className={styles.movie}>
          <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title} 
            className={styles.poster}
          />
          <h2>{movie.title}</h2>
          <Link to={`/movies/${movie.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
