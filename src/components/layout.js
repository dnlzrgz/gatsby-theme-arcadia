import React from "react"
import PropTypes from "prop-types"

import Header from "../ui/header"
import HeroAnimation from "./hero-background"

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <HeroAnimation />
      </Header>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
