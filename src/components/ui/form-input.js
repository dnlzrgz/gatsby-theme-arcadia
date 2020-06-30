import styled from "styled-components"

const FormInput = styled.input`
  background-color: ${props => props.theme.colors.pureWhite};
  border-radius: ${props => props.theme.radii[3]};
  border: 1px solid ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.drakGray}
  line-height: 0;
  outline: none;
  padding: ${props => props.theme.spacing[3]};
  transition: border ${props => props.theme.transitions.default};

  &:hover,
  &:focus {
    border-color: ${props => props.theme.colors.main};
  }
`

export default FormInput
