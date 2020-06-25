const emoji = require("remark-emoji")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Gatsby Arcadia",
    description: "A modern and awesome starter for Gatsby.",
    author: "@danielkvist",
    email: "yourmail@yourmailprovider.com",
    siteUrl: "https://gatsby-arcadia.netlify.app/",
    netlifyForm: false,
    copy: "",
    externalLinks: [
      {
        name: "Twitter",
        url: "#",
      },
      {
        name: "Facebook",
        url: "#",
      },
      {
        name: "Instagram",
        url: "#",
      },
      {
        name: "Codepen",
        url: "#",
      },
      {
        name: "GitHub",
        url: "#",
      },
      {
        name: "GitLab",
        url: "#",
      },
    ],
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
        icon: "src/images/arcadia-icon.png",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-remark-images",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1035,
              sizeByPixelDesinity: true,
              remarkPlugins: [emoji],
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "sections",
        path: `${__dirname}/content/sections/`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: `${process.env.GITHUB_API_TOKEN}`,
        variables: {},
        graphQLQuery: `
        query {
          viewer {
            pinnedItems(first: 6) {
              edges {
                node {
                  ... on Repository {
                    id
                    name
                    description
                    url
                  }
                }
              }
            }
          }
        }
        `,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `${process.env.GOOGLE_ANALYTICS_KEY}`,
    //     head: false,
    //     anonymize: true,
    //     respectDNT: true,
    //     defer: true,
    //     sampleRate: 5,
    //     siteSpeedSampleRate: 10,
    //   },
    // },
  ],
}
