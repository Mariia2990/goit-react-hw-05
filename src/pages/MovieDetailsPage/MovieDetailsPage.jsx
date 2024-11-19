import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieDetails } from '../../service/moviesApi'
import css from './MovieDetailsPage.module.css'
 
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const backLink = location.state?.from || '/movies';

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
   if (!movies) {
    return <p>Loading...</p>;
  }
   return (
    <div className={css.container}>
      <Link to={backLink} className={css.goBack}>
        Go back
      </Link>
      <div className={css.details}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
          alt={movies.title}
          className={css.poster}
        />
        <div>
          <h1>{movies.title}</h1>
          <p><strong>Overview:</strong> {movies.overview}</p>
          <p><strong>Release date:</strong> {movies.release_date}</p>
          <p><strong>Genres:</strong> {movies.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <div className={css.additionalInfo}>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast" state={{ from: backLink }}>Cast</Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLink }}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;