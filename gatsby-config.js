module.exports = {
  siteMetadata: {
    title: "Ariel Kaplan",
    titleTemplate: "%s | Portland, OR",
    description: "Partner dancing, Web development, and other creative endeavors",
    url: "https://www.arielkaplan.com",
    twitterUsername: "@arielhkaplan",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-scss-typescript',
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: './src/utils/typography',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-transformer-remark',
      plugins: ['gatsby-remark-typescript']
    }
  ]
};
