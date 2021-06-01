module.exports = {
  siteMetadata: {
    title: "Ariel Kaplan",
    titleTemplate: "%s | Portland, OR",
    description: "Partner dancing, Web development, and other creative endeavors",
    url: "https://www.arielkaplan.com",
    twitterUsername: "@arielhkaplan",
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        breakpoints: [576, 768, 992, 1200],
        placeholder: 'blurred',
      }
    },
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
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-codepen",
            options: {
              theme: "dark",
              height: 500,
              defaultTab: "css,result"
            }
          }
        ]
      }
    }
  ]
};
