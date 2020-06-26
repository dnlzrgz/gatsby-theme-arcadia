import styled from "styled-components"

const ProjectLink = styled.a`
  color: ${props => props.theme.colors.darkGray};
  display: block;
  line-height: 0;
  outline: none;
  padding: ${props => props.theme.spacing[3]};
  position: relative;
  text-decoration: none;
  transition: color ${props => props.theme.transitions.default} ease;

  &:before {
    background-color: ${props => props.theme.colors.main};
    border-radius: 100%;
    content: "";
    display: block;
    height: ${props => props.theme.fontSizes[4]};
    left: 0;
    opacity: 0.5;
    padding: ${props => props.theme.spacing[1]};
    position: absolute;
    top: 0;
    transition: all ${props => props.theme.transitions.default} ease;
    width: ${props => props.theme.fontSizes[4]};
  }

  &:hover:before {
    border-radius: ${props => props.theme.radii[3]};
    opacity: 0.9;
    width: 90%;
  }

  &:hover {
    color: ${props => props.theme.colors.white};
  }
`
export default ProjectLink
