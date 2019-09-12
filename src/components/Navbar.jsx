import React from "react"
import { Link } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import theme from "../../config/theme"
import SvgLogo from "./Svglogo"

const Header = styled.header`
  font-size: 1rem;
  font-weight: 600;
  border-bottom: solid ${theme.stroke} ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.grey.default};
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
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    padding: 0;
  }
`
const List = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding-left: 0;
  li {
    margin: 1.5rem 0;
  }
`

const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Nav>
          <Link to="/" id="logo" aria-label="Cosmic division Website Logo Home Button">
            <SvgLogo
              stroke={`none`}
              height={"2rem"}
              strokeWidth={"10px"}
              fill={theme.colors.primary}
            />
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
