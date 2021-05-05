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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-transformer-remark',
      plugins: ['gatsby-remark-typescript']
    },
  ]
};
