require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-playground`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area:
        apiToken: process.env.GATSBY_DATOCMS_API,
        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cinemeye Vision Studio`,
        short_name: `Cinemeye Vision`,
        description: `Cinematography & Media Production`,
        start_url: `/`,
        background_color: `#1f1f1f`,
        theme_color: `#1f1f1f`,
        display: `fullscreen`,
        icon: `src/images/favicon.png`,
        icons: [
          {
            src: `/icons/android-icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `/icons/maskable-icon-196x196.png`,
            type: `image/png`,
            sizes: `196x196`,
            purpose: `maskable any`,
          },
          {
            src: `/icons/android-icon-192x192.png`,
            type: `image/png`,
            sizes: `192x192`,
          },
          {
            src: `/icons/apple-icon-180x180.png`,
            type: `image/png`,
            sizes: `180x180`,
          },
          {
            src: `/icons/favicon-32x32.png`,
            type: `image/png`,
            sizes: `32x32`,
          },
          {
            src: `/icons/favicon-16x16.png`,
            type: `image/png`,
            sizes: `16x16`,
          },
        ],
        // This path is relative to the root of the site.
      },
    },
    ///// this (optional) plugin enables PWA + Offline functionality
    ///// To learn more, visit: https://gatsby.dev/offline
    ///// Important: For the web app manifest to be cached,
    ///// we’ll need to list gatsby-plugin-manifest
    ///// BEFORE gatsby-plugin-offline.
    `gatsby-plugin-offline`,
  ],
};
