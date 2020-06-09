import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    color: ${props => props.theme.colors.darkGray};
    font-family: ${props => props.theme.fonts.default};
    font-size: 16px;
    line-height: ${props => props.theme.lineHeights.default};
  }

  body,
  html {
    height: 100%;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: ${props => props.theme.fonts.title};
    line-height: ${props => props.theme.lineHeights.title};
  }
`

export default GlobalStyle
