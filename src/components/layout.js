import React from "react"
import { Link } from "gatsby"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"

import { rhythm, scale } from "../utils/typography"
import theme from "../../config/theme"

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => props.theme.colors.bg};
  color: ${props => props.theme.colors.primary};
  margin: 0;
  text-rendering: optimizeLegibility;
}
a {
  color: ${props => props.theme.colors.white}
}`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to='/'
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <ThemeProvider theme={theme}>
          <Wrapper style={{
            
          }}>
          <GlobalStyle/>
            <div
              style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(24),
                padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
              }}
            >
              <header>{header}</header>
              <main>{children}</main>
            </div>
            <Footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </Footer>
          </Wrapper>
      </ThemeProvider>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
