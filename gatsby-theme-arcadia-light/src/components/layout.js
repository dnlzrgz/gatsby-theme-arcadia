import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Hero from "./hero"
import Footer from "./footer"
import ContactInfo from "./contact-info"
import FooterLinks from "./footer-links"
import FooterCopyright from "./footer-copyright"
import GoUpBtn from "./go-up-btn"

const Layout = ({ children, title = "", description = "" }) => {
  const scroolToTop = () => {
    document.querySelector("body").scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <Header>
        <Hero title={title} description={description} />
      </Header>
      <main>{children}</main>
      <Footer>
        <ContactInfo />
        <FooterLinks />
        <FooterCopyright />
        <GoUpBtn onClick={scroolToTop}>Up</GoUpBtn>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
