module.exports = {
  siteMetadata: {
    title: "Gatsby Arcadia",
    description: "A modern and awesome starter for Gatsby.",
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
        background_color: "#c7166f",
        theme_color: "#c7166f",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-styled-components",
  ],
}
