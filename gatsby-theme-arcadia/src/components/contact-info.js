import React from "react"
import copy from "copy-to-clipboard"

import useSiteMetadata from "../hooks/use-site-metadata"
import ContactContainer from "./contact-container"
import ContactEmail from "./contact-email"
import ContactCopy from "./contact-copy-btn"

const ContactInfo = () => {
  const { email } = useSiteMetadata()

  return (
    <ContactContainer>
      <ContactEmail href={`mailto:${email}`}>{email}</ContactEmail> Or{" "}
      <ContactCopy
        onClick={() => {
          copy(email, {
            format: "text/plain",
          })
        }}
      >
        Copy
      </ContactCopy>
    </ContactContainer>
  )
}

export default ContactInfo
