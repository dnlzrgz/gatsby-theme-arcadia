import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import HomeSection from "./home-section"

const HomeSections = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            order
          }
          body
        }
      }
    }
  `)

  const mdxSections = data.allMdx.nodes
  const orderedMdxSections = mdxSections.sort((a, b) => a.order - b.order)

  return (
    <>
      {orderedMdxSections.map(section => (
        <HomeSection key={section.frontmatter.title} section={section} />
      ))}
    </>
  )
}

export default HomeSections
