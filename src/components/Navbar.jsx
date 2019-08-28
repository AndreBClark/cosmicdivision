import React from "react"
import { Link } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import { rhythm } from "../../config/typography"
import theme from "../../config/theme"
import SvgLogo from "./Svglogo"

const Header = styled.header`
  font-size: 20px;
  font-weight: 600;
  background-color: ${props => props.theme.colors.grey.default};
  li a {
    color: ${props => props.theme.colors.white};
    margin: 10px 25px;
  }
`

const Nav = styled.nav`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`
const List = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding-left: 0;
  li {
    margin: 20px 25px;
  }
`

const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Nav>
          <Link to="/" id="title" class="nav__item">
            <SvgLogo
              stroke={theme.colors.primary}
              height={"50px"}
              strokeWidth={"10px"}
              fill={`none`}
              style={{ margin: "1rem" }}
            />
          </Link>
          <List>
            <li>
              <Link to="blog">Blog</Link>
            </li>
            <li>
              <Link to="bio">Bio</Link>
            </li>
          </List>
        </Nav>
      </Header>
    </ThemeProvider>
  )
}

export default Navbar
