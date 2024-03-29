import React from 'react'
import 'twin.macro'

import { Hero } from '@/sections'
import { PageView, View } from '@/containers'
import { BtnOutline, Btn, Link, HeadingOne, Subtitle } from '@/tokens'

const indexContent = {
  title: 'Home',
  heading: 'Cosmic Division',
  subtitle: 'Chronicling my Journey developing with jamstack',
  buttons: {
    primary: {
      link: '/blog/',
      text: 'Begin Reading',
    },
    secondary: {
      link: '/contact/',
      text: 'Get in Touch',
    },
  },
}

const IndexPage = ({ location }) => {
  const { title, heading, subtitle, buttons } = indexContent
  return (
    <PageView fullScreen location={location} pageTitle={title}>
      <Hero>
        <HeadingOne>{heading}</HeadingOne>
        <Subtitle>{subtitle}</Subtitle>
        <View tw="md:(flex-row justify-around)">
          <Btn as={Link} to={buttons.primary.link}>
            {buttons.primary.text}
          </Btn>
          <BtnOutline as={Link} to={buttons.secondary.link}>
            {buttons.secondary.text}
          </BtnOutline>
        </View>
      </Hero>
    </PageView>
  )
}

export default IndexPage
