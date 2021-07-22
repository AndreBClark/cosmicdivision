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


function PageList() {
  const Pages = usePageList();
  const deSlug = useDesluggify();

  return (
        <List>
      {Pages.map(({ node }) => (
          <li>
          <NavButton
            to={node.path}
            as={AniLinkDefault}
          >
          {deSlug(node.path)}
        </NavButton>
          </li>
      ))}
        </List>
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
