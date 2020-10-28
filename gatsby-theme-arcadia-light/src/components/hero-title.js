import React from "react"

import useSiteMetadata from "../hooks/use-site-metadata"
import Title from "./title"
import TitleContainer from "./title-container"
import Description from "./description"

const HeroTitle = ({ title = "", description = "" }) => {
  const { title: siteTitle, description: siteDescription } = useSiteMetadata()

  return (
    <TitleContainer>
      <Title>{title || siteTitle}</Title>
      <Description>{description || siteDescription}</Description>
    </TitleContainer>
  )
}

export default HeroTitle
