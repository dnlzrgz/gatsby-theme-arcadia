import styled from "styled-components"

const Description = styled.p`
  color: ${props => props.theme.colors.white};
  display: block;
  font-size: ${props => props.theme.fontSizes[5]};
  padding-left: ${props => props.theme.spacing[7]};
  padding-right: ${props => props.theme.spacing[7]};
  text-align: center;

  @media (max-width: ${props => props.theme.mediaQueries.md}) {
    font-size: ${props => props.theme.fontSizes[4]};
  }
`

export default Description
