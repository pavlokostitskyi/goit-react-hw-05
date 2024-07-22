import  { useEffect, useState,  } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../components/tmdb';


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
    <div>
      <h3>Cast</h3>
      <ul>
        {cast.map(member => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;