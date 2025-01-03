import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Hero from '../components/hero';
import About from '../components/about';
import Container from '../components/container';

class AboutIndex extends React.Component {
  render() {
    const navLinks = get(this, 'props.data.allContentfulHomeLink.nodes');
    const [author] = get(this, 'props.data.allContentfulPerson.nodes');

    return (
      <Layout location={this.props.location} navLinks={navLinks}>
        <Seo title={`About ${author.name}`} />
        <Container wide fullWidthMobile>
          <Hero title={`About ${author.name}`} image={author.heroImage.gatsbyImage} />
        </Container>
        <Container>
          <About about={author.fullBio} />
        </Container>
      </Layout>
    );
  }
}

export default AboutIndex;

export const pageQuery = graphql`
  query AboutQuery {
    allContentfulHomeLink(filter: { isExternalLink: { eq: false } }, sort: { order: ASC }) {
      nodes {
        title
        shortTitle
        url
        description
      }
    }
    allContentfulPerson(filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }) {
      nodes {
        name
        shortBio {
          raw
        }
        fullBio {
          raw
        }
        title
        company
        heroImage: image {
          gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 1440)
        }
      }
    }
  }
`;
