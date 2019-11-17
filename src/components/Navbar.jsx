import React from "react"
import { Link } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import theme from "../../config/theme"
import SvgLogo from "./Svglogo"

const Header = styled.header`
  font-family: ${props => props.theme.fontFamily.heading};
  font-weight: ${props => props.theme.fontFamily.headingWeight};
  letter-spacing: ${props => props.theme.tracking};
  border-bottom: solid ${props => [
    props.theme.stroke,  
    props.theme.colors.primary
    ]};
  background-color: ${props => props.theme.colors.grey.dark};
`

const Nav = styled.nav`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    span {
      display: none;
      padding: 0 1.5rem;
      text-transform: ${props => props.theme.fontFamily.logoCase};
    }
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    ${tw`mx-auto`}
    justify-content: space-between;
    & > * {
      flex: 1 1 auto;
    }
    a span {
      display: inline;
    }
  }
`
const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
    flex: 1 2 auto;

  li {
    margin-block-end: 0;
    a {
      color: ${props => props.theme.colors.white};
    }
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: space-between;
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
              <Link to="/Bio">Bio</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </List>
        </Nav>
      </Header>
    </ThemeProvider>
  )
}

export default Navbar
