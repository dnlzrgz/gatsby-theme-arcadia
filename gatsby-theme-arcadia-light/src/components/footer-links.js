import React from "react"

import useSiteMetadata from "../hooks/use-site-metadata"
import SocialLinks from "./social-links"
import SocialLink from "./social-link"

const FooterLinks = () => {
  const { externalLinks } = useSiteMetadata()

  return (
    <SocialLinks>
      {externalLinks.map((link, i) => {
        return (
          <SocialLink key={link.name} href={link.url}>
            {link.name}
          </SocialLink>
        )
      })}
    </SocialLinks>
  )
}

export default FooterLinks
