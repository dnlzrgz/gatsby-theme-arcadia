const path = require("path")

require("dotenv").config({
  path: `../.env.${process.env.NODE_ENV}`,
})

const siteMetadata = {
  title: "Arcadia",
  description: "A modern theme for Gatsby to show your work.",
  author: "@danielkvist",
  email: "yourmail@yourmailprovider.com",
  siteUrl: "https://gatsby-arcadia.netlify.app/",
  netlifyForm: false,
  copy: "",
  seo: {
    title: "Gatsby Arcadia Theme",
    description:
      "A modern and awesome theme for Gatsby designed for web developers and with accessibility, performance and customization in mind.",
    twitter: "@danielkvist_",
  },
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
  "gatsby-plugin-offline",
  "gatsby-plugin-sitemap",
  {
    resolve: "gatsby-theme-arcadia",
    options: {
      sectionsPath: path.join(__dirname, "content", "sections"),
      githubToken: `${process.env.GITHUB_API_TOKEN}`,
    },
  },
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "dkvist.com",
      short_name: "dkvist",
      start_url: "/",
      background_color: "#c7166f",
      theme_color: "#c7166f",
      display: "minimal-ui",
      icon: "./static/images/icon.png",
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
      sampleRate: 4,
      siteSpeedSampleRate: 9,
    },
  },
].filter(Boolean)

module.exports = {
  siteMetadata,
  plugins,
}
