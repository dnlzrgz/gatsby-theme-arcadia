import React from "react"

import Header from "../components/header"
import Hero from "../components/hero"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404" />
    <Header>
      <Hero title="404" description="You seem lost." />
    </Header>
  </>
)

export default NotFoundPage
