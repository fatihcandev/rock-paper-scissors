module.exports = {
  siteMetadata: {
    title: `Rock Paper Scissors`,
    description: `A simple rock-paper-scissors game with additional choices. Test your guessing skills now! This is a challenge by Frontend Mentor.`,
    author: `@fatihcandev`,
    image: `${__dirname}/src/images/meta-image.jpg`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rock-paper-scissors`,
        short_name: `rps`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
