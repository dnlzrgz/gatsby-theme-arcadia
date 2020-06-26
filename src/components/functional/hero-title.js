import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Title from "../ui/title"
import TitleContainer from "../ui/title-container"
import Description from "../ui/description"

const HeroTitle = ({ title = "", description = "" }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  return (
    <TitleContainer>
      <Title>{title || site.siteMetadata.title}</Title>
      <Description>{description || site.siteMetadata.description}</Description>
    </TitleContainer>
  )
}

export default HeroTitle
