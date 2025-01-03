import React from 'react';
import { Link } from 'gatsby';

import * as styles from './home-links.module.css';

const HomeLinks = ({ links }) => (
  <ul className={styles.homeLinks}>
    {links.map(link => {
      const button = (
        <button className={styles.button52}>
          <span>{link.title}</span>
        </button>
      );
      return (
        <li>
          {link.isExternalLink ? (
            <a href={link.url} target="_blank" rel="noreferrer" title={link.description}>
              {button}
            </a>
          ) : (
            <Link to={link.url}>{button}</Link>
          )}
        </li>
      );
    })}
  </ul>
);

export default HomeLinks;
