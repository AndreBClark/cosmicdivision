import React from "react"
import Navbar from "../components/Navbar"
import SEO from "./SEO"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import theme from "../../config/theme"

const GlobalStyle = createGlobalStyle`
body {
  font-family: ${props => props.theme.fontFamily.sans};
  background-color: ${props => props.theme.colors.bg};
  box-sizing: border-box;
  margin: 0;
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
        </Wrapper>
      </ThemeProvider>
    </div>
  )
}

export default Layout
