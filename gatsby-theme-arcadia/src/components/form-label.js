import styled from "styled-components"

const FormLabel = styled.label`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);

  & span {
    color: red;
  }

  & span::before {
    content: "*";
    display: inline;
    padding-left: ${props => props.theme.spacing[2]};
  }
`

export default FormLabel
