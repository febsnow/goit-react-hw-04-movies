import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.Nav}>
      <ul className={styles.NavList}>
        <li>
          <NavLink
            className={styles.NavLink}
            activeClassName={styles.NavLinkActive}
            exact
            to={routes.home}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styles.NavLink}
            activeClassName={styles.NavLinkActive}
            exact
            to={routes.movies}
          >
            Search
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
