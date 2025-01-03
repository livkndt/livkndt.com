import React from 'react';

import * as styles from './container.module.css';

const Container = ({ children, as = 'div', wide = false, fullWidthMobile = false }) => {
  const Tag = as;

  return (
    <Tag
      className={`${styles.container} ${wide && styles.wide} ${fullWidthMobile && styles.fullWidthMobile}`}
    >
      {children}
    </Tag>
  );
};

export default Container;
