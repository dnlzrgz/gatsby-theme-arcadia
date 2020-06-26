import styled from "styled-components"

const Spacer = styled.div`
  height: ${props => props.theme.spacing[props.size] || props.theme.spacing[5]};
  width: ${props => props.theme.spacing[props.size] || props.theme.spacing[5]};
`

export default Spacer
