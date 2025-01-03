import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Seo from '../components/seo';
import Layout from '../components/layout';
import Hero from '../components/hero';
import ArticlePreview from '../components/article-preview';
import Container from '../components/container';

class BlogIndex extends React.Component {
  render() {
    const navLinks = get(this, 'props.data.allContentfulHomeLink.nodes');
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes');

    return (
      <Layout location={this.props.location} navLinks={navLinks}>
        <Seo title="Blog" />
        <Hero title="Blog" />
        <ArticlePreview posts={posts} />
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulHomeLink(filter: { isExternalLink: { eq: false } }, sort: { order: ASC }) {
      nodes {
        title
        shortTitle
        url
        description
      }
    }
    allContentfulBlogPost(sort: { publishDate: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 424, height: 312)
        }
        description {
          raw
        }
      }
    }
  }
`;
