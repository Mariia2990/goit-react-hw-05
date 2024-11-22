import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { searchMovies } from '../../service/moviesApi';
import MoviesList from '../../components/MoviesList/MoviesList';
import toast from 'react-hot-toast'
import SearchForm from '../../components/SearchForm/SearchForm'

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation(); 
  const navigate = useNavigate();
  const queryParam = new URLSearchParams(location.search).get('query') || ''; 

  useEffect(() => {
    if (queryParam) {
      fetchMovies(queryParam);
    }
  }, [queryParam]);

  const fetchMovies = async (query) => {
    try {
      const results = await searchMovies(query);
      if (results.length === 0) {
        toast.info('No movies found! Try another query.');
      }
      setMovies(results);
    } catch (error) {
      console.error('Failed to search movies:', error);
      toast.error('Error fetching movies! Please try again later.');
    }
  };

  const handleSearch = (query) => {
  navigate(`?query=${query}`, { state: { from: location } });
};

  return (
    <div>
      <SearchForm onSubmit={handleSearch} initialQuery={queryParam} />
      <MoviesList movies={movies}/>
    </div>
  );
};

export default MoviesPage;
