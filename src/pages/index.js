import React from "react"

import Layout from "../components/functional/layout"
import SEO from "../components/functional/seo"
import HomeSections from "../components/functional/home-sections"
import HomeForm from "../components/functional/home-form"
import HomeRepositories from "../components/functional/home-repositories"

import Spacer from "../components/ui/spacer"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Spacer size={11} />
      <HomeSections />
      <HomeRepositories />
      <HomeForm />
    </Layout>
  )
}

export default IndexPage
