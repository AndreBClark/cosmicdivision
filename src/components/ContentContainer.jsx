import React from "react"
import styled from "styled-components"
import theme from "../../config/theme"
const Container = styled.main`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  height: 100%;
`
const FlexLg = styled.div`
  @media screen and (min-width: 767px) {
    display: flex;
    align-content: center;
    align-items: center;
  }
`
const ContentContainer = ({ children }) => {
  return (
    <Container>
      <FlexLg>{children}</FlexLg>
    </Container>
  )
}

export default ContentContainer
