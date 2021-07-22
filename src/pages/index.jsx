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
                swipe
                direction="left"
                entryOffset={100}
                as={AniLink}
                to="/blog/">
                Begin Reading
              </Btn>
              <BtnOutline
                swipe
                direction="left"
                entryOffset={100}
                as={AniLink}
                to="/contact/">
                Get in Touch
              </BtnOutline>
            </DualWrapper>
        </Hero>
    </PageFullWidth>
)}

export default IndexPage
