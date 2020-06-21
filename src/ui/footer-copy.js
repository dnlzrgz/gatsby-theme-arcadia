import styled from "styled-components"

const FooterCopy = styled.p`
  color: ${props => props.color || props.theme.colors.white};
  display: block;
  font-size: ${props => props.theme.fontSizes[1]};
  padding-left: ${props => props.theme.spacing[7]};
  padding-right: ${props => props.theme.spacing[7]};
  text-align: center;
`

export default FooterCopy
