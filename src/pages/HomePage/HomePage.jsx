import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../service/moviesApi';
import MoviesList from '../../components/MoviesList/MoviesList';
import css from './HomePage.module.css'

const HomePage = () => {
  const [movies, setMovies] = useState([]);
   const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const results = await fetchTrendingMovies();
        setMovies(results);
      } catch (error) {
       setError('Failed to fetch trending movies:', error)
      }
    }
    getTrendingMovies();
  }, []);
  return (
    <div>
      <h1 className={css.titleMovie}>Trending Movies</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <MoviesList movies={movies} />
    </div>
  );
};

export default HomePage;