import React from 'react';

import Container from './container';

import * as styles from './footer.module.css';

const Footer = ({ author }) => (
  <Container as="footer">
    <div className={styles.container}>
      Designed & built by {author} using <a href="https://contentful.com/">Contentful</a> and{' '}
      <a href="https://gatsbyjs.com">Gatsby</a> &middot;{' '}
      <a href="https://github.com/livkndt/livkndt.com">Source</a>
    </div>
  </Container>
);

export default Footer;
