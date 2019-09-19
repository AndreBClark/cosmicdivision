import React from "react"
import Navbar from "../components/Navbar"
import SEO from "./SEO"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import theme from "../../config/theme"
import Footer from "./Footer"

const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}
body {
  font-family: ${props => props.theme.fontFamily.sans};
  background-color: ${props => props.theme.colors.grey.dark};
  box-sizing: border-box;
  margin: 0;
  font-size: ${props => props.theme.baseFontSize}
}
* {
  box-sizing: inherit;
}

*::selection {
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.bg};
}
`

const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  margin: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
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
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </div>
  )
}

export default Layout
