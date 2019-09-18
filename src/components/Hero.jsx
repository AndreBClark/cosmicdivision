import React from "react"
import styled from "styled-components"
import theme from "../../config/theme"
import ContentContainer from "./ContentContainer"
import Background from "../../content/assets/orbital-bw.jpg"

const Container = styled.section`
  background-color: ${theme.colors.grey.dark};
  width: 100%;
  min-height: 50vh;
  padding: 0.25rem;
  background-image: linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25), rgba(0,0,0,0.25), rgba(0,0,0,1)),
  url(${Background});
  background-size: cover;
  background-position: center center;
  @media screen and (min-width: 769px) {
    padding: 4rem;
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
