import styled from "styled-components"

const Pen = styled.section`
  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.radii[3]};
  box-shadow: -${props => props.theme.radii[4]} ${props => props.theme.radii[4]}
    ${props => props.theme.radii[4]} #d5d4d7;
  height: 21rem;
  margin-bottom: ${props => props.theme.spacing[7]};
  max-width: 250px;
  min-width: 250px;
  overflow: hidden;
  padding: ${props => props.theme.spacing[7]};
  position: relative;
  text-align: left;
  transition: transform ${props => props.theme.transitions.faster};

  &:first-child {
    margin-left: auto;
  }

  &:last-child {
    margin-right: auto;
  }

  &:hover {
    transform: translateY(-1rem);
  }

  &:hover ~ & {
    transform: translateX(130px);
  }

  &:not(:first-child) {
    margin-left: -130px;
  }
`

export default Pen
