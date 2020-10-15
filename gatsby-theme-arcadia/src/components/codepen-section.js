import styled from "styled-components"

const CodepenSection = styled.section`
  display: flex;
  margin-bottom: ${props => props.theme.spacing[10]};

  &::-webkit-scrollbar {
    background: ${props => props.theme.colors.gray};
    height: ${props => props.theme.spacing[1]};
    width: ${props => props.theme.spacing[1]};
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.main};
    border-radius: ${props => props.theme.radii[5]};
  }

  &::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.gray};
    height: ${props => props.theme.spacing[3]};
    width: ${props => props.theme.spacing[3]};
  }

  @media (max-width: ${props => props.theme.mediaQueries.xl}) {
    overflow-x: scroll;
  }
`

export default CodepenSection
