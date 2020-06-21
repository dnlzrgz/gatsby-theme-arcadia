import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SocialLinks from "../ui/social-links"
import SocialLink from "../ui/social-link"

const FooterLinks = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            externalLinks {
              name
              url
            }
          }
        }
      }
    `
  )

  return (
    <SocialLinks>
      {site.siteMetadata.externalLinks.map((link, i) => {
        return <SocialLink href={link.url}>{link.name}</SocialLink>
      })}
    </SocialLinks>
  )
}

export default FooterLinks
