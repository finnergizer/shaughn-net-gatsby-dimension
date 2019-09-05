module.exports = {
  siteMetadata: {
    title: "Shaughn Finnerty - Full Stack Software Developer",
    author: "Shaughn Finnerty",
    description: "A portfolio website for myself."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/shaughn-favicon.ico', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}