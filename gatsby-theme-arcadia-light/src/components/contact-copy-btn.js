import styled from "styled-components"

const ContactCopy = styled.button`
  background-color: ${props => props.theme.colors.gray};
  border-radius: ${props => props.theme.radii[3]};
  border: 2px solid ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.drakGray};
  line-height: 0;
  margin-left: ${props => props.theme.spacing[3]};
  margin-right: ${props => props.theme.spacing[7]};
  padding: ${props => props.theme.spacing[4]};
  transition: background ${props => props.theme.transitions.default},
    color ${props => props.theme.transitions.default},
    transform ${props => props.theme.transitions.default},
    border ${props => props.theme.transitions.default};

  &:hover {
    background-color: ${props => props.theme.colors.darkGray};
    color: ${props => props.theme.colors.white};
    border: 2px solid ${props => props.theme.colors.darkGray};
    transform: scale(1.1);
  }

  @media (max-width: ${props => props.theme.mediaQueries.sm}) {
    margin: 0;
  }
`

export default ContactCopy
