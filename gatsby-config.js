module.exports = {
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
    `gatsby-transformer-remark`,
  ]
};
