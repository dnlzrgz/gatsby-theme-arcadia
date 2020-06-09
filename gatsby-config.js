module.exports = {
  siteMetadata: {
    title: "Gatsby Arcadia Starter",
    description: "",
    author: "@danielkvist",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-styled-components",
  ],
}
