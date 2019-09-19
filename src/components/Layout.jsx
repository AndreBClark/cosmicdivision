import React from "react"
import Navbar from "../components/Navbar"
import SEO from "./SEO"
import styled, { ThemeProvider } from "styled-components"
import theme from "../../config/theme"
import Footer from "./Footer"
import GlobalStyle from "./GlobalStyle"

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
