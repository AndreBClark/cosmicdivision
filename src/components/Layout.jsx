import React from "react"
import Navbar from "../components/Navbar"
import SEO from "./SEO"
// import Panel from "../components/Panel"
// import Footer from '../components/Footer'
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import theme from "../../config/theme"
import Typography, { rhythm, scale } from "../../config/typography"

const GlobalStyle = createGlobalStyle`
body {
  font-family: ${props => props.theme.fontFamily.mono};
  background-color: ${props => props.theme.colors.bg};
  margin: 0;
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
}
* {
  box-sizing: inherit;
}
`

const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  margin: 0;
  overflow: hidden;
`

const Layout = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <GlobalStyle />
          <SEO />
          <Navbar />
          <main>{children}</main>
          {/* <Footer /> */}
        </Wrapper>
      </ThemeProvider>
    </div>
  )
}

export default Layout
