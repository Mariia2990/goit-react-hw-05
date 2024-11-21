import { Link } from "react-router-dom";
import css from './MoviesList.module.css'


const MoviesList = ({ movies }) => {

  return (
    <ul className={css.list}>
      {movies.map(movie => (
  <li key={movie.id || Math.random()}>
    <Link to={`/movies/${movie.id || ""}`}>{movie.title || "Untitled Movie"}</Link>
  </li>
))}
    </ul>
  );
};

export default MoviesList;