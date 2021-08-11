import React from 'react'
import 'twin.macro'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import useSiteMetadata from 'hooks/useSiteMetaData'

import { Panel } from '@/containers'
import { ExternalLink } from '@/tokens'
function BioCard() {
  const { social, authorBio } = useSiteMetadata()
  const data = useStaticQuery(BioImagedata)
  const image = getImage(data.file)
  const { author, location } = authorBio

  return (
    <Panel tw="md:flex">
      <GatsbyImage
        image={image}
        aspectRatio={1}
        transformOptions={{
          grayscale: true,
        }}
        alt={`headshot of ${author}, the creator of this site`}
        tw="rounded-xl mix-blend-luminosity md:(w-24  mr-4 mb-4 md:mb-0 flex-shrink-0)"
      />
      <p tw="text-sm md:text-xl">
        Written by <strong>{author}</strong> who lives and works in {location}{' '}
        building useful things. You should follow him on{' '}
        <ExternalLink href={`https://github.com/${social.github}`}>
          Github
        </ExternalLink>
      </p>
    </Panel>
  )
}

const BioImagedata = graphql`
  {
    file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export default BioCard
