import React from "react"

import useAllMdx from "../../hooks/use-all-mdx"
import HomeSection from "./home-section"

const HomeSections = () => {
  const mdxSections = useAllMdx()

  return (
    <>
      {mdxSections.map(section => (
        <HomeSection key={section.frontmatter.title} section={section} />
      ))}
    </>
  )
}

export default HomeSections
