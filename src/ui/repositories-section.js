import styled from "styled-components"

const RepositoriesSection = styled.section`
  display: grid;
  gap: ${props => props.theme.spacing[7]};
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.theme.mediaQueries.xl};
  padding-left: ${props => props.theme.spacing[7]};
  padding-right: ${props => props.theme.spacing[7]};

  @media (max-width: ${props => props.theme.mediaQueries.md}) {
    grid-template-columns: 1fr;
  }
`

export default RepositoriesSection
