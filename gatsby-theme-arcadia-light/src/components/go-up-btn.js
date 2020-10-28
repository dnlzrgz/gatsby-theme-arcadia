import styled from "styled-components"

const GoUpBtn = styled.button`
  position: absolute;
  border-radius: ${props => props.theme.radii[3]};
  border: 2px solid ${props => props.theme.colors.gray};
  background-color: ${props => props.theme.colors.gray};
  padding: ${props => props.theme.spacing[4]};
  bottom: ${props => props.theme.spacing[4]};
  right: ${props => props.theme.spacing[4]};
  transition: background ${props => props.theme.transitions.default},
    color ${props => props.theme.transitions.default},
    transform ${props => props.theme.transitions.default},
    border ${props => props.theme.transitions.default};

  &:hover {
    background-color: ${props => props.theme.colors.main};
    color: ${props => props.theme.colors.white};
    border: 2px solid ${props => props.theme.colors.main};
    transform: scale(1.1);
  }

  @media (max-width: ${props => props.theme.mediaQueries.sm}) {
    padding: ${props => props.theme.spacing[3]};
  }
`

export default GoUpBtn
