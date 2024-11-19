import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../service/moviesApi';
import MoviesList from '../../components/MoviesList/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setMovies(movies);
      } catch (error) {
        console.error('Failed to fetch trending movies:', error)
      }
    }
    getTrendingMovies();
  }, []);
  return (
    <div>
      <h1>Trending Movies</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default HomePage;