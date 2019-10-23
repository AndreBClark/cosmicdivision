import styled from "styled-components"
import Panel from "./Panel"
const PanelHover = styled(Panel)`
  opacity: 0.7;
  transition: all ${props => props.theme.transitions.normal};
  &:hover {
    transform: translateY(-4px);
    opacity: 1;
  }
`
export default PanelHover
