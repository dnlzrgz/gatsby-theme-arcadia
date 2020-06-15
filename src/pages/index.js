import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sections from "../components/sections"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Sections />
    </Layout>
  )
}

export default IndexPage
