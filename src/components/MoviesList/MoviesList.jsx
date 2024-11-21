import { Link } from "react-router-dom";
import css from './MoviesList.module.css'


const MoviesList = ({ movies }) => {

  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;