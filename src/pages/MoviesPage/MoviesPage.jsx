import { useState } from 'react';
import { searchMovies } from '../../service/moviesApi';
import MoviesList from '../../components/MoviesList/MoviesList';

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const handleSearch = async() => {
        try {
            const results = await searchMovies(query);
            setMovies(results);
        } catch (error) {
            console.error('Failed to search movies:', error);
        }
    }
    return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
      />
      <button onClick={handleSearch}>Search</button>
      <MoviesList movies={movies} />
    </div>
  );
};

export default MoviesPage