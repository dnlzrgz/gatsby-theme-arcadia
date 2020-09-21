import styled from "styled-components"

const ContactContainer = styled.div`
  color: ${props => props.theme.colors.darkGray};
  padding: ${props => props.theme.spacing[3]};
  position: absolute;
  right: 0;
  top: -75px;
`

export default ContactContainer
