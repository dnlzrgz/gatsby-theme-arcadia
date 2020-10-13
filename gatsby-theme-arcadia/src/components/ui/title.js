import styled from "styled-components"

const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  display: block;
  padding-left: ${props => props.theme.spacing[5]};
  padding-right: ${props => props.theme.spacing[5]};
  text-align: center;
  text-transform: uppercase;
`

export default Title
