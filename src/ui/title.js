import styled from "styled-components"

const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  text-align: center;
  text-transform: uppercase;
  display: block;
  padding-left: ${props => props.theme.spacing[5]};
  padding-right: ${props => props.theme.spacing[5]};
`

export default Title
