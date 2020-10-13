import React from "react"
import { ThemeProvider } from "styled-components"
import "normalize.css"

import Theme from "./src/theme/theme"
import GlobalStyle from "./src/theme/global-style"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
