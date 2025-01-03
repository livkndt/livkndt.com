# Olivia's Personal Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/ace1221f-cdaa-47eb-b334-8c03e9a6ebd4/deploy-status)](https://app.netlify.com/sites/livkndt/deploys)

View Blog: https://livkndt.netlify.app/

<hr/>

This is a [Gatsby](http://gatsbyjs.com/) blog powered by [Contentful](https://www.contentful.com) and published using [Netlify](https://www.netlify.com/).

This repo was developed from the starter project https://github.com/contentful/starter-gatsby-blog.

## Features

- Simple content model and structure. Easy to adjust to your needs.
- Use the [synchronization feature](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/synchronization) of our [Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/).
- Responsive/adaptive images via [gatsby-plugin-image](https://www.gatsbyjs.org/packages/gatsby-plugin-image/) and our [Images API](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/synchronization/initial-synchronization-of-entries-of-a-specific-content-type).

## Getting started

See our [official Contentful getting started guide](https://www.contentful.com/developers/docs/tutorials/general/get-started/).

### Set up of the needed content model and create a configuration file

This project comes with a Contentful setup command `npm run setup`.

This command will ask you for a space ID, and access tokens for the Contentful Management and Delivery API and then import the needed content model into the space you define and write a config file (`./.contentful.json`).

`npm run setup` automates that for you but if you want to do it yourself rename `.contentful.json.sample` to `.contentful.json` and add your configuration in this file.

## Crucial Commands

### `npm run dev`

Run the project locally with live reload in development mode.

### `npm run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `npm run serve`

Spin up a production-ready server with your blog. Don't forget to build your page beforehand.
