import styled from "styled-components"

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: ${props => props.theme.spacing[7]};
  max-width: ${props => props.theme.mediaQueries.xl};
  margin-left: auto;
  margin-right: auto;
`
export default SocialLinks
