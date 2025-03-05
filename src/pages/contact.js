import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Hero from '../components/hero';
import Container from '../components/container';
import ContactForm from '../components/contact-form';

class ContactIndex extends React.Component {
  render() {
    const navLinks = get(this, 'props.data.allContentfulHomeLink.nodes');
    const [author] = get(this, 'props.data.allContentfulPerson.nodes');

    return (
      <Layout location={this.props.location} navLinks={navLinks}>
        <Seo title={`Contact ${author.name}`} />
        <Container wide fullWidthMobile>
          <Hero title={`Contact ${author.name}`} />
        </Container>
        <Container>
          <ContactForm />
        </Container>
      </Layout>
    );
  }
}

export default ContactIndex;

export const pageQuery = graphql`
  query ContactQuery {
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
