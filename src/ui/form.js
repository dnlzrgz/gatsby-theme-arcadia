import styled from "styled-components"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.theme.mediaQueries.sm};
  padding: ${props => props.theme.spacing[3]};
`

export default Form
