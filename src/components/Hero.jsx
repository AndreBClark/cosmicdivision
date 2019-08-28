import React from "react"
import styled from "styled-components"
import theme from "../../config/theme"
import { rhythm, scale } from "../../config/typography"

const Container = styled.section`
  background-color: ${theme.colors.grey.dark};
  width: 100%;
  display: flex;
  min-height: 50vh;
`

const Hero = ({ children }) => {
  return <Container>{children}</Container>
}

export default Hero
