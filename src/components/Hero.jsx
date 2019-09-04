import React from "react"
import styled from "styled-components"
import theme from "../../config/theme"

const Container = styled.section`
  background-color: ${theme.colors.grey.dark};
  width: 100%;
  min-height: 50vh;
  padding: 1rem 0;
  @media screen and (min-width: 767px) {
  display: flex;
  }
`

const Hero = ({ children }) => {
  return <Container>{children}</Container>
}

export default Hero
