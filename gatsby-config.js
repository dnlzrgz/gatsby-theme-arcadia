module.exports = {
  siteMetadata: {
    title: "Gatsby Arcadia Starter",
    description: "",
    author: "@danielkvist",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          `roboto\:400,600,700`,
          `roboto mono\:400,600,700`,
          `roboto slab\:400,600,700`,
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-arcadia-starter",
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
