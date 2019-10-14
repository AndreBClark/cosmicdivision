import React from "react"
import styled from "styled-components"
import theme from "../../config/theme"
import ContentContainer from "./ContentContainer"
import Background from "../images/orbital-bw.jpg"

const Container = styled.section`
  background-color: ${theme.colors.grey.dark};
  width: 100%;
  min-height: 75vh;
  text-align: center;
  background-image: url(${Background});
  background-size: cover;
  background-position: center center;
  display: flex;
  align-items: center;
  @media screen and (min-width: 769px) {
    padding: 4rem;
    min-height: 80vh;
  }
`
const FlexLg = styled.div`
  @media screen and (min-width: 767px) {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }
`
const Hero = ({ children }) => {
  return (
    <Container>
      <ContentContainer>
        <FlexLg>{children}</FlexLg>
      </ContentContainer>
    </Container>
  )
}

export default Hero
