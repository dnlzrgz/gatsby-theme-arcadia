const emoji = require("remark-emoji")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteMetadata = {
  title: "Gatsby Arcadia",
  description: "A modern and awesome starter for Gatsby.",
  author: "@danielkvist",
  email: "yourmail@yourmailprovider.com",
  siteUrl: "https://gatsby-arcadia.netlify.app/",
  netlifyForm: false,
  copy: "",
  codepen: [
    {
      name: "React Calculator",
      description: "A short description.",
      image: "calculator.png",
      url: "#",
    },
    {
      name: "React Calendar Component",
      description: "A short description.",
      image: "calendar.png",
      url: "#",
    },
    {
      name: "Magic Bonfire",
      description: "A short description.",
      image: "magic-bonfire.png",
      url: "#",
    },
    {
      name: "React Markdown Editor",
      description: "A short description.",
      image: "markdown.png",
      url: "#",
    },
    {
      name: "Pomodoro w/ React Context",
      description: "A short description.",
      image: "pomodoro.png",
      url: "#",
    },
    {
      name: "Sign in/Sing Up form",
      description: "A short description.",
      image: "signin-singup.jpg",
      url: "#",
    },
  ],
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
}

const plugins = [
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
      icon: "./static/images/icon.png",
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
  process.env.GITHUB_API_TOKEN && {
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
  process.env.GOOGLE_ANALYTICS_KEY && {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: `${process.env.GOOGLE_ANALYTICS_KEY}`,
      head: false,
      anonymize: true,
      respectDNT: true,
      defer: true,
      sampleRate: 5,
      siteSpeedSampleRate: 10,
    },
  },
].filter(Boolean)

module.exports = {
  siteMetadata,
  plugins,
}
