import styled from "styled-components"

const SocialLink = styled.a`
  color: ${props => props.color || props.theme.colors.white};
  padding: ${props => props.theme.spacing[3]};
  text-decoration: none;
  transition: color ${props => props.theme.transitions.default};

  &:hover {
    color: ${props => props.theme.colors.main};
  }
`
export default SocialLink
