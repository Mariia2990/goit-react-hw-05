import { NavLink } from 'react-router-dom';

import css from './Header.module.css';
import clsx from 'clsx'

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};


const Header = () => {
  return (
      <header className={css.header}>
        <div className={css.wrapper}>

          <nav>
            <ul className={css.nav}>
              <li>
                <NavLink
                  to="/"
                  className={ buildLinkClass } >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies"
                  className={ buildLinkClass }>
                  Movies
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  );
};

export default Header