import React from 'react'
import 'twin.macro'
import { StaticImage } from 'gatsby-plugin-image'

import useSiteMetadata from 'hooks/useSiteMetaData'
import Panel from 'components/Panel'
import { theme } from 'twin.macro'


function BioCard() {
  const { social, authorBio } = useSiteMetadata();
  
  const { author, location } = authorBio;

  return (
    <Panel tw="md:flex">
      <StaticImage
        src="../images/profile-pic.jpg"
        aspectRatio={1}
        formats={["AUTO", "WEBP", "AVIF"]}
        transformOptions={{
          grayscale: true,
        }}
        alt={`headshot of ${author}, the creator of this site`}
        tw='rounded-xl md:(w-24  mr-4 mb-4 md:mb-0 flex-shrink-0)'
      />
      <p tw="text-sm md:text-xl">Written by <strong>{author}</strong> who lives and works in {location} building useful things. You should follow him on {' '}
        <a href={`https://github.com/${social.github}`}>
          Github
        </a>
      </p>
    </Panel>
  )
}


export default BioCard