import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieDetails } from '../../service/moviesApi'
import Loader from '../../components/Loader/Loader'
import css from './MovieDetailsPage.module.css'
 
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const backLink = location.state?.from || '/';

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
  return <Loader />;
}

if (!movies.title || !movies.overview || !movies.poster_path || !movies.genres) {
  return <p>Movie information is not available.</p>;
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
        <div className={css.aboutMovies}>
           <h1 className={css.titleMovie}>{movies.title}</h1>
          <p className={css.subText}><strong>Rating:</strong> {(movies.vote_average).toFixed(1)}</p>
          <p className={css.subText}><strong>Overview:</strong> {movies.overview}</p>
          <p className={css.subText}><strong>Release date:</strong> {movies.release_date}</p>
          <p className={css.subText}><strong>Genres:</strong> {movies.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <div className={css.additionalInfo}>
        <h2 className={css.subTitleMovie}>Additional information</h2>
        <ul className={css.listInfo}>
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