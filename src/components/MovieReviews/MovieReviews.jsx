import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../api';
import styles from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const reviewsData = await fetchMovieReviews(movieId);
        setReviews(reviewsData);
      } catch (error) {
        console.error('Failed to fetch movie reviews:', error);
      }
    };

    getMovieReviews();
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>No reviews available for this movie.</p>;
  }

  return (
    <ul className={styles.reviewsList}>
      {reviews.map(({ id, author, content }) => (
        <li key={id} className={styles.reviewItem}>
          <h4>Author: {author}</h4>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;
