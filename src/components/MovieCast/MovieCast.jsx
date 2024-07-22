import  { useEffect, useState,  } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../components/tmdb';
import styles from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieCast(movieId)
      .then(setCast)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [movieId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={styles.movieCast}>
      <h3>Cast</h3>
      <ul>
        {cast.map(member => (
          <li key={member.id} className={styles.castMember}>
            {member.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
                alt={member.name}
                className={styles.castImage}
              />
            )}
            <p>{member.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;