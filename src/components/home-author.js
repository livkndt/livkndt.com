import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import * as styles from './home-author.module.css';

const HomeAuthor = ({ image, title, bio }) => (
  <div className={styles.homeAuthor}>
    {image && <GatsbyImage className={styles.image} alt={title} image={image} />}
    <h1>{title}</h1>
    <span>{renderRichText(bio)}</span>
  </div>
);

export default HomeAuthor;
