import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeSections from "../components/home-sections"
import HomeForm from "../components/home-form"

import Spacer from "../components/spacer"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Spacer size={11} />
      <HomeSections />
      <HomeForm />
    </Layout>
  )
}

export default IndexPage
