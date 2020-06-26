import styled from "styled-components"

const SectionContent = styled.main`
  font-size: ${props => props.theme.fontSizes[5]};
  max-width: 75ch;
  padding: ${props => props.theme.spacing[7]};
  text-align: center;

  @media (max-width: ${props => props.theme.mediaQueries.md}) {
    font-size: ${props => props.theme.fontSizes[4]};
  }
`

export default SectionContent
