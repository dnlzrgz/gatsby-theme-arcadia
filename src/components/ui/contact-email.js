import styled from "styled-components"

const ContactEmail = styled.a`
  color: ${props => props.theme.colors.darkGray};
  text-decoration: none;
  transition: color ${props => props.theme.transitions.default};
  margin-right: ${props => props.theme.spacing[3]};

  &:hover {
    color: ${props => props.theme.colors.main};
  }
`

export default ContactEmail
