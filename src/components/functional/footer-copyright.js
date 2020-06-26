import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Spacer from "../ui/spacer"
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
    <>
      <Spacer size={5} />
      <FooterCopy>
        {site.siteMetadata.copy ||
          `© - ${site.siteMetadata.title} ${new Date().getFullYear()}`}
      </FooterCopy>
      <Spacer size={9} />
    </>
  )
}

export default FooterCopyright
