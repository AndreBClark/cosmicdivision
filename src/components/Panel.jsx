import React from "react"
import styled from "styled-components"

const Frame = styled.section`
  background-color: ${props => props.theme.colors.overlay.middle};
  padding: 4vmin;
  margin: ${props => props.theme.spacer};
  height: 100%;
  border-left: solid ${props => props.theme.stroke}
    ${props => props.theme.colors.primary};
  ul {
    margin-left: 1.5rem;
  }
  @media screen and (min-width: 760px) {
    border-radius: ${props => props.theme.radius};
    padding: 4vmin 6vmin;
  }
`

const Panel = ({ children, className }) => (
  <Frame className={className}>{children}</Frame>
)
export default Panel
