import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import FooterCopy from "../ui/footer-copy"

const FooterCopyright = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            copy
          }
        }
      }
    `
  )

  return (
    <FooterCopy>
      {site.siteMetadata.copy ||
        `© - ${site.siteMetadata.title} ${new Date().getFullYear()}`}
    </FooterCopy>
  )
}

export default FooterCopyright
