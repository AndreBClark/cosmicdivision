import React from 'react'
import { BtnOutline, Btn } from '../components/button'
import Hero from '../components/Hero'
import Seo from '../components/Seo'
import { HeroInner, HeadingOne, Subtitle } from '../components/Hero'
import { DualWrapper } from '../components/TextInput'
import AniLink from 'gatsby-plugin-transition-link/AniLink'


const IndexPage = ({ location }) => {
  const { heading, subtitle, buttons } = indexContent;
  return(
    <PageFullWidth
      location={location}
          title={'Home'}
    >
        <Hero>
        <HeadingOne>{heading}</HeadingOne>
        <Subtitle>{subtitle}</Subtitle>
            <DualWrapper>
              <Btn
            as={AniLinkDefault}
            to={buttons.primary.link}>
            {buttons.primary.text}
              </Btn>
              <BtnOutline
            as={AniLinkDefault}
            to={buttons.secondary.link}>
            {buttons.secondary.text}
              </BtnOutline>
            </DualWrapper>
        </Hero>
    </PageFullWidth>
)}

export default IndexPage
