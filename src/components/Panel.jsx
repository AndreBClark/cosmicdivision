import React from "react"
import styled from "styled-components"
import theme from "../../config/theme"
import { rhythm } from "../../config/typography"

const Container = styled.section`
  background-color: ${theme.colors.overlay.middle};
  padding: ${theme.spacer};
  border-radius: ${theme.radius};
  margin: 1rem auto;
  max-width: ${theme.maxWidth};
  height: 100%;
`
const Panel = ({ children }) => {
  return <Container>{children}</Container>
}
export default Panel
