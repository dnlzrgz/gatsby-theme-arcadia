import React from "react"

import HeroBackground from "./hero-background"
import HeroTitle from "./hero-title"

const Hero = ({ title = "", description = "" }) => {
  return (
    <>
      <HeroBackground />
      <HeroTitle title={title} description={description} />
    </>
  )
}

export default Hero
