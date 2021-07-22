import React from 'react'
import tw from 'twin.macro'

import usePageList from 'hooks/usePageList'

import AniLinkDefault from 'components/AniLinkDefault'
import { BtnSimple } from 'components/button'
import Logo from 'images/logo.svg'

    }
  }

  )
    }



const Navbar = () => {
  return (
    <Header>
      <Nav>
        <AniLink
          swipe
          direction="left"
          entryOffset={100}
          to="/"
          id="logo"
          aria-label="Cosmic division Website Logo Home Button">
          <Logo width="48" />
          <span>Cosmic Division</span>
        </AniLink>
        <List>
          <li>
            <AniLink swipe direction="left" entryOffset={100} to="/blog">
              Blog
            </AniLink>
          </li>
          <li>
            <AniLink swipe direction="left" entryOffset={100} to="/projects">
              Projects
            </AniLink>
          </li>
          <li>
            <AniLink swipe direction="left" entryOffset={100} to="/contact">
              Contact
            </AniLink>
          </li>
        </List>
      </Nav>
    </Header>
  )
}

const NavButton = tw(BtnSimple)`
  md:(mx-2 px-8)
`

const HeaderStyle = tw.header`
  font-heading font-black text-primary tracking-widest border-primary bg-gray-700 border-b-4 px-4 xl:px-0
`

const Nav = tw.nav`
  leading-tight flex justify-around items-center md:(mx-auto justify-between max-w-screen-xl)
`


const List = tw.ul`
  text-xs flex justify-around items-center text-gray-50
  md:(justify-between text-base)
`



export default Navbar
