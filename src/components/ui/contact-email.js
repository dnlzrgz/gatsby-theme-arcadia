import styled from "styled-components"

const ContactEmail = styled.a`
  color: ${props => props.theme.colors.darkGray};
  padding: ${props => props.theme.spacing[3]};
  position: absolute;
  right: 0;
  text-decoration: none;
  top: -55px;
  transition: color ${props => props.theme.transitions.default};

  &:hover {
    color: ${props => props.theme.colors.main};
  }
`

export default ContactEmail
