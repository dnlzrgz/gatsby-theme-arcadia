import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import copy from "copy-to-clipboard"

import ContactContainer from "../ui/contact-container"
import ContactEmail from "../ui/contact-email"
import ContactCopy from "../ui/contact-copy-btn"

const ContactInfo = () => {
  const [copied, setCopy] = useState(false)

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
    <ContactContainer>
      <ContactEmail href={`mailto:${site.siteMetadata.email}`}>
        {site.siteMetadata.email}
      </ContactEmail>{" "}
      Or{" "}
      <ContactCopy
        onClick={() => {
          copy(site.siteMetadata.email, {
            format: "text/plain",
          })
          setCopy(true)
        }}
      >
        {copied ? "Copied!" : "Copy"}
      </ContactCopy>
    </ContactContainer>
  )
}

export default ContactInfo
