import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../components/tmdb';
import styles from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewData = await fetchMovieReviews(movieId);
      setReviews(reviewData);
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div className={styles.container}>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <strong>{review.author}</strong>: {review.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
