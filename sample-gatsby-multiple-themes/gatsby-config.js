/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Your Site Title`,
    description: `A description for your blazing fast site, using multiple themes!`,
    author: 'Your name',
    menuLinks: [
      {
        name: `Blog`,
        url: `/`,
      },
      {
        name: `Notes`,
        url: `/notes`,
      },
    ],
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/ryico_`,
      },
      {
        name: `Github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
  plugins: [
    `@pauliescanlon/gatsby-mdx-embed`,
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/`,
      },
    },
    {
      resolve: `gatsby-theme-notes`,
      options: {
        basePath: `/notes`,
      },
    },
  ],
}
