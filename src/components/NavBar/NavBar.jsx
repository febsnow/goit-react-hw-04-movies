import React from "react";
import { NavLink } from "react-router-dom";
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
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styles.NavLink}
            activeClassName={styles.NavLinkActive}
            to="/movies"
          >
            Search
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
