import styled from "styled-components"

const FormSubmit = styled.input`
  background-color: transparent;
  border-radius: ${props => props.theme.radii[3]};
  border: 2px solid ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.main};
  line-height: 0;
  margin-left: auto;
  margin-right: auto;
  padding: ${props => props.theme.spacing[5]};
  transition: background ${props => props.theme.transitions.default},
    color ${props => props.theme.transitions.default},
    transform ${props => props.theme.transitions.default};
  width: ${props => props.theme.spacing[19]};

  &:hover {
    background-color: ${props => props.theme.colors.main};
    color: ${props => props.theme.colors.white};
    transform: scale(1.1);
  }
`

export default FormSubmit
