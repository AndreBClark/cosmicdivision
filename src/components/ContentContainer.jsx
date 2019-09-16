import React from "react"
import styled from "styled-components"
import theme from "../../config/theme"

const Container = styled.main`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  height: 100%;
`

const ContentContainer = ({ children }) => {
  return <Container>{children}</Container>
}

export default ContentContainer
