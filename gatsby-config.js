require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'livkndt.com',
    description: 'Personal website of Olivia Knoedt',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/logo_green.png',
        lang: 'en',
        name: 'livkndt.com',
        short_name: 'livkndt.com',
        start_url: '/',
        background_color: '#ebe3da',
        theme_color: '#ebe3da',
        display: 'standalone',
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-7JDLFJP334'],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ['/preview/**'],
          delayOnRouteUpdate: 0,
        },
      },
    },
  ],
};
