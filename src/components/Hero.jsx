import React from "react"
import styled from "styled-components"
import theme from "../../config/theme"

const Container = styled.section`
  background-color: ${theme.colors.grey.dark};
  width: 100%;
  min-height: 50vh;
  padding: 2rem;
`
const FlexLg = styled.div`
  @media screen and (min-width: 767px) {
    display: flex;
    align-content: center;
    align-items: center;
  }
`
const Hero = ({ children }) => {
  return (
    <Container>
      <FlexLg>{children}</FlexLg>
    </Container>
  )
}

export default Hero
