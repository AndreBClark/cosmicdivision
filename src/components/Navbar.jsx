import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Logo from '../images/logo.svg'
import tw from 'tailwind.macro'

const Header = styled.header`
  font-family: ${props => props.theme.fontFamily.heading};
  font-weight: ${props => props.theme.fontFamily.headingWeight};
  letter-spacing: ${props => props.theme.tracking};
  border-bottom: solid
    ${props => [props.theme.stroke, props.theme.colors.primary]};
  background-color: ${props => props.theme.colors.grey.dark};
`

const Nav = styled.nav`
  max-width: ${props => props.theme.maxWidth};
  ${tw`leading-tight mx-1 my-2`}
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    ${tw`mx-auto`}
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
    flex: 1 0;
  }
`

const Navbar = () => {
  return (
    <Header>
      <Nav>
        <Link
          to="/"
          id="logo"
          aria-label="Cosmic division Website Logo Home Button"
        >
          <Logo width="48" />
          <span>Cosmic Division</span>
        </Link>
        <List>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/bio">Bio</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
        </List>
      </Nav>
    </Header>
  )
}

export default Navbar
