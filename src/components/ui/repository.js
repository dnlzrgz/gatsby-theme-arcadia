import styled from "styled-components"

const Repository = styled.section`
  display: grid;
  padding: ${props => props.theme.spacing[5]};
  border-radius: ${props => props.theme.radii[3]};
  box-shadow: ${props => props.theme.radii[4]} ${props => props.theme.radii[4]}
      17px #d5d4d7,
    -${props => props.theme.radii[4]} -${props => props.theme.radii[4]} 17px
      #ffffff;
  max-width: 250px;
  justify-self: center;
`

export default Repository
