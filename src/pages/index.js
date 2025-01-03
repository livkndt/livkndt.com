import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import HomeAuthor from '../components/home-author';
import HomeLinks from '../components/home-links';
import SocialLinks from '../components/social-links';
import Layout from '../components/home-layout';
import Container from '../components/container';

class RootIndex extends React.Component {
  render() {
    const links = get(this, 'props.data.allContentfulHomeLink.nodes');
    const socialLinks = get(this, 'props.data.allContentfulSocialLink.nodes');
    const [author] = get(this, 'props.data.allContentfulPerson.nodes');

    return (
      <Layout location={this.props.location} author={author.name}>
        <Container>
          <HomeAuthor
            image={author.profilePicture.gatsbyImage}
            title={author.name}
            bio={author.shortBio}
          />
          <HomeLinks links={links} />
          <SocialLinks links={socialLinks} />
        </Container>
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulHomeLink(sort: { order: ASC }) {
      nodes {
        title
        url
        description
        isExternalLink
      }
    }
    allContentfulSocialLink(sort: { order: ASC }) {
      nodes {
        title
        url
        description
        flatIconClass
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
        profilePicture {
          gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 1180)
        }
      }
    }
  }
`;
