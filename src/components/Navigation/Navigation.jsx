import { NavLink } from 'react-router-dom';
import css from './Navigate.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" className={css.link} activeClassName={css.active}>Home</NavLink>
      <NavLink to="/movies" className={css.link} activeClassName={css.active}>Movies</NavLink>
    </nav>
  );
};

export default Navigation;