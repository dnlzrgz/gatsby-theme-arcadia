import styled from "styled-components"

const Header = styled.header`
  align-items: center;
  background-color: ${props => props.theme.colors.main};
  background: ${props =>
    `linear-gradient(to bottom, ${props.theme.colors.main}, ${props.theme.colors.accent})`};
  display: grid;
  height: 100vh;
  justify-items: center;
  overflow: hidden;
`

export default Header
