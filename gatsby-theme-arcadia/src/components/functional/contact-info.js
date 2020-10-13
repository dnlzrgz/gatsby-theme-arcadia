import React from "react"
import copy from "copy-to-clipboard"

import useSiteMetadata from "../../hooks/use-site-metadata"
import ContactContainer from "../ui/contact-container"
import ContactEmail from "../ui/contact-email"
import ContactCopy from "../ui/contact-copy-btn"

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