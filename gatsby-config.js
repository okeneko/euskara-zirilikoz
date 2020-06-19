module.exports = {
  siteMetadata: {
    title: `Euskara Zirilikoz`,
    description: `How I see the Basque alphabet if it was written in cyrillic.`,
    author: `@okeneko`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fbfbfb`,
        theme_color: `#fbfbfb`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        resolveJsonModule: true,
      },
    },
    `gatsby-plugin-styled-components`,
    // `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Fira Sans:400,500,700', 'Fira Mono:400,500,700', 'Roboto Mono:400,500,700'],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
