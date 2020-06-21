import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ContactEmail from "../ui/contact-email"

const ContactInfo = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            email
          }
        }
      }
    `
  )

  return (
    <ContactEmail href={`mailto:${site.siteMetadata.email}`}>
      {site.siteMetadata.email}
    </ContactEmail>
  )
}

export default ContactInfo
