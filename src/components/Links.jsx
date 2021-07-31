import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import tw, { theme } from 'twin.macro'
export default function TransitionLink(props) {
  return (
    <AniLink
      swipe
      bg={theme`colors.neutral.100`}
      direction="top"
      entryOffset={100}
      {...props}>
      {props.children}
    </AniLink>
  )
}

export const LinkExternal = tw.a`
  transition-all bg-transparent text-secondary-100
  hover:(bg-secondary-100 text-neutral-100)
`