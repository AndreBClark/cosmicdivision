import React from "react"
import { Link } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import theme from "../../config/theme"
import SvgLogo from "./Svglogo"

const Header = styled.header`
  font-family: ${props => props.theme.fontFamily.heading};
  font-size: 1rem;
  font-weight: 600;
  border-bottom: solid ${props => props.theme.stroke} ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.grey.dark};
  li a {
    color: ${props => props.theme.colors.white};
    margin: 10px 25px;
  }
`

const Nav = styled.nav`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 1rem;
  a {
    display: flex;
    align-items: center;
    h3 {
      display: none;
      padding: 0 1.5rem;
      font-size: 2rem;
      margin-bottom: 0;
    text-transform: ${theme.fontFamily.logoCase};
    }
  }
  @media screen and (min-width: ${theme.breakpoints.phone}) {
    justify-content: space-between;
    padding: 0;
    a h3 {
      display: inline;
    }
  }
`
const List = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding-left: 0;
  li {
    margin: 1rem 0;
  }
`

const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Nav>
          <Link
            to="/"
            id="logo"
            aria-label="Cosmic division Website Logo Home Button"
          >
            <SvgLogo
              stroke={`none`}
              strokeWidth={"10px"}
              fill={theme.colors.primary}
              height={`2rem`}
            />
            <h3>Cosmic Division</h3>
          </Link>
          <List>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/bio">Bio</Link>
            </li>
          </List>
        </Nav>
      </Header>
    </ThemeProvider>
  )
}

export default Navbar
