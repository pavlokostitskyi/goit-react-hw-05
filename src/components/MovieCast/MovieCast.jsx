import  { useEffect, useState,  } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../components/tmdb';
import styles from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const castData = await fetchMovieCredits(movieId);
      setCast(castData);
    };

    fetchCast();
  }, [movieId]);

  return (
    <div className={styles.container}>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img 
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} 
              alt={actor.name} 
              className={styles.profile}
            />
            <span>{actor.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
