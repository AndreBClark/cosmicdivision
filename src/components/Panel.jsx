import React from "react"
import styled from "styled-components"
import theme from "../../config/theme"
import { rhythm } from "../../config/typography"

const Container = styled.section`
  background-color: ${theme.colors.overlay.middle};
  padding: ${rhythm(1)};
  border-radius: ${theme.layoutConstants.radius};
  margin: 2rem auto;

  max-width: ${rhythm(24)};
`;

const Panel = ({ children }) => {
  return (
    <Container>
        {children}
    </Container>
  )
}

export default Panel