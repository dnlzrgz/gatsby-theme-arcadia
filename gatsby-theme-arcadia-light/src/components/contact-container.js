import styled from "styled-components"

const ContactContainer = styled.div`
  align-items: center;
  justify-content: flex-end;
  display: flex;
  color: ${props => props.theme.colors.darkGray};
  padding: ${props => props.theme.spacing[3]};
  position: absolute;
  width: 100%;
  top: -75px;

  @media (max-width: ${props => props.theme.mediaQueries.sm}) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    place-items: center;
    top: -105px;
  }
`

export default ContactContainer
