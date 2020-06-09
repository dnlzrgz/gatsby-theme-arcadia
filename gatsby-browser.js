import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import "normalize.css"

import Theme from "./src/theme/theme"

const GlobalStyle = createGlobalStyle`
  :root {
    color: ${props => props.theme.colors.darkGray};
    font-family: ${props => props.theme.fonts.default};
    font-size: 16px;
    line-height: ${props => props.theme.lineHeights.default};
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: ${props => props.theme.fonts.title};
    line-height: ${props => props.theme.lineHeights.title};
  }
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
