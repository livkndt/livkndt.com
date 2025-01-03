import React from 'react';
import { Link } from 'gatsby';

import * as styles from './navigation.module.css';

const Navigation = ({ navLinks }) => (
  <div className={styles.navigation}>
    <Link to="/" className={styles.logoLink}>
      <span>OK</span>
    </Link>
    <nav role="navigation" className={styles.nav} aria-label="Main">
      <input type="checkbox" id="nav-trigger" className={styles.navTrigger} />
      <label htmlFor="nav-trigger">
        <span className={styles.topBar} />
        <span className={styles.middleBar} />
        <span className={styles.bottomBar} />
      </label>

      <div className={styles.menu}>
        <ul className={styles.menuLinks}>
          <li>
            <Link to="/" activeClassName="active">
              Home
            </Link>
          </li>
          {navLinks && navLinks.map(link => (
            <li>
              <Link to={link.url} activeClassName="active">
                {link.shortTitle}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  </div>
);

export default Navigation;
