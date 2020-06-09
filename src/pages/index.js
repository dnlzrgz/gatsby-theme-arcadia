import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Title = styled.h1`
  text-align: center;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Title>{data.site.siteMetadata.title}</Title>
      <p>lorem ipsum </p>
    </Layout>
  )
}

export default IndexPage
