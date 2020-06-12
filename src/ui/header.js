import styled from "styled-components"

const Header = styled.header`
  height: 100vh;
  background-color: ${props => props.theme.colors.main};
  background: ${props =>
    `linear-gradient(to bottom, ${props.theme.colors.main}, ${props.theme.colors.accent})`};
`

export default Header
