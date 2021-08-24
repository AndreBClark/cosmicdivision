import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { theme } from 'twin.macro'


const Link = ({ external, children, ...props }) => (
  external ? (
    <a
      tw="transition-all bg-transparent text-secondary-100
      hover:(bg-secondary-100 text-neutral-100)"
      target="_blank"
      rel="noopener noreferrer"
      {...props}>
      {children}
    </a>
  )
  : (
    <AniLink
      cover
      bg={theme`colors.neutral.100`}
      direction="up"
      {...props}>
      {children}
    </AniLink>
  )
)


export default Link;