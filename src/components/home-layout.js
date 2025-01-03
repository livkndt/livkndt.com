import React from 'react';

import './variables.css';
import './global.css';
import Seo from './seo';
import Footer from './footer';

class Template extends React.Component {
  render() {
    const { children, author } = this.props;

    return (
      <>
        <Seo />
        <main>{children}</main>
        <Footer author={author} />
      </>
    );
  }
}

export default Template;
