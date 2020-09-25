module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cinemeye Vision Studio`,
        short_name: `C.V. Studio`,
        description: `Cinematography & Media Production`,
        start_url: `/`,
        background_color: `#1f1f1f`,
        theme_color: `#1f1f1f`,
        display: `minimal-ui`,
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
    // `gatsby-plugin-offline`,
  ],
};
