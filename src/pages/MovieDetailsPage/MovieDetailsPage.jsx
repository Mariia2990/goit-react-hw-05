import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieDetails } from '../../service/moviesApi'
import {Link} from "react-router-dom";
 
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movieData = await fetchMovieDetails(movieId);
        setMovies(movieData);
      } catch (error) {
        console.error('Failed to fetch movie details:', error);
      }
    };

    getMovieDetails();
  }, [movieId]);
  return (
    <div>
      {movies ? (
        <>
          <h1>{movies.title}</h1>
          <h2>Overview</h2>
          <p>{movies.overview}</p>

          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetailsPage;