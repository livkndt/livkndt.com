import React from 'react';

import * as styles from './social-links.module.css';

const SocialLinks = ({ links }) => (
  <ul className={styles.socialLinks}>
    {links.map(links => (
      <li>
        <a href={links.url} target="_blank" rel="noreferrer" title={links.description}>
          <span className={styles.iconText}>
            <i class={`fi ${links.flatIconClass}`}></i>
            <span>{links.title}</span>
          </span>
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
