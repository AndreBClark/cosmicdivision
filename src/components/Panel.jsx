import React from "react"
import styled from "styled-components"
import theme from "../../config/theme"

const Container = styled.section`
  background-color: ${theme.colors.overlay.middle};
  padding: 4vmin;
  margin: 1rem auto;
  height: 100%;
  border-left: solid ${theme.stroke} ${props => props.theme.colors.primary};
  @media screen and (min-width: 760px) {
    border-radius: ${theme.radius};
  }
`
const Panel = ({ children }) => {
  return <Container>{children}</Container>
}
export default Panel
