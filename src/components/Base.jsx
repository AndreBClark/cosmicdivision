import React from 'react'
import Navbar from './Navbar'
import Seo from './Seo'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../../config/theme'
import Footer from './Footer'
import GlobalStyle from './GlobalStyle'

const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  margin: 0;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.bg};
`

const Base = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <Seo />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

export default Base
