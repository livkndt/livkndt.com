import React from 'react';
import Container from './container';

import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const About = ({ about }) => {
  return (
    <Container>
      {renderRichText(about, {
        renderNode: {
          [MARKS.BOLD]: (node, children) => <strong>{children}</strong>,
          [MARKS.ITALIC]: (node, children) => <i>{children}</i>,
          [MARKS.UNDERLINE]: (node, children) => <u>{children}</u>,
          [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
          [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
          [INLINES.HYPERLINK]: (node, children) => {
            const { uri } = node.data;
            return (
              <a href={uri} className="underline">
                {children}
              </a>
            );
          },
        },
      })}
    </Container>
  );
};

export default About;
