module.exports = {
  siteMetadata: {
    title: "Ariel Kaplan",
    titleTemplate: "%s | Portland, OR",
    description: "Partner dancing, Web development, and other creative endeavors",
    url: "https://www.arielkaplan.com",
    twitterUsername: "@arielhkaplan",
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ariel Kaplan',
        short_name: 'Ariel Kaplan',
        start_url: '/',
        background_color: '#f9faf4',
        theme_color: '#c1cfa0',
        display: 'minimal-ui',
        icon: `src/images/favicon.png`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          breakpoints: [576, 768, 992, 1200],
          placeholder: 'blurred',
        }
      }
    },
    `gatsby-plugin-styled-components`,
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
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          'gatsby-remark-typescript',
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
    },
    'gatsby-transformer-sharp'
  ]
};
