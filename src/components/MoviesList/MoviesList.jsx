import { Link, useLocation  } from "react-router-dom";
import css from './MoviesList.module.css'


const MoviesList = ({ movies }) => {
  const location = useLocation();
  
   return (
    <ul className={css.list}>
      {movies.map(movie => (
        <li className={css.item} key={movie.id || Math.random()}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title || "Untitled Movie"}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;