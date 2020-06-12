import React from "react"
import PropTypes from "prop-types"

import Header from "../ui/header"
import Hero from "./hero"

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <Hero />
      </Header>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
