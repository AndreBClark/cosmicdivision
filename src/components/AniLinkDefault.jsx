import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { theme } from 'twin.macro'
export default function AniLinkDefault(props) {
  return (
    <AniLink
      paintDrip
      hex={theme`colors.neutral.100`}
      direction="top"
      entryOffset={100}
      {...props}>
      {props.children}
    </AniLink>
  )
}
