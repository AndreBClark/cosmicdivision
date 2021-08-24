import React from 'react'
import 'twin.macro'
import { GatsbyImage } from 'gatsby-plugin-image'

import { useAuthorData } from 'hooks'
import { Panel, View } from '@/containers'
import { Link, Btn } from '@/tokens'
import { Github, LinkedIn, Devto } from 'images/icons'

const socialIcons = [
  {
    label: 'Github',
    icon: <Github tw="w-6 h-6 text-neutral-100 fill-current" />,
  },
  {
    label: 'LinkedIn',
    icon: <LinkedIn />,
  },
  {
    label: 'Devto',
    icon: <Devto/>,
  },
]

function BioCard() {
  const { name, image, location, socials, role } = useAuthorData();
  return (
    <Panel tw="md:flex">
      <GatsbyImage
        image={image.data}
        aspectRatio={1}
        alt={image.alt}
        tw="rounded-xl mix-blend-luminosity
          md:(w-24  mr-4 mb-4 md:mb-0 flex-shrink-0)"
      />
      <View tw="justify-between">
        <p>{name} is a {role} and is based in {location}</p>
        <View tw="flex-row w-full">
          <Socials socials={socials} />
        </View>
      </View>
    </Panel>
  )
}

const Socials = ({ socials }) => {
  const socialArr = Object.values(socials);
  return socialArr.map((url, index) => (
    <Btn
      as={Link}
      external
      href={url}
      tw="mb-0"
      arialLabel={socialIcons[index].label}>
      {socialIcons[index].icon}
    </Btn>
  ))
}

export default BioCard
