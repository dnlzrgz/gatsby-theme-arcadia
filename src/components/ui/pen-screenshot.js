import styled from "styled-components"

const PenScreenshot = styled.img`
  margin-left: ${props => props.theme.spacing[2]};
  margin-top: ${props => props.theme.spacing[4]};
  margin-bottom: auto;
  border-radius: ${props => props.theme.radii[4]};
  height: 50%;
`
export default PenScreenshot
