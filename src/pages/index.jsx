import React from 'react'
import { BtnOutline, Btn } from '../components/button'
import Hero from '../components/Hero'
import Seo from '../components/Seo'
import { HeroInner, HeadingOne, Subtitle } from '../components/Hero'
import { DualWrapper } from '../components/TextInput'
import AniLink from 'gatsby-plugin-transition-link/AniLink'


class IndexPage extends React.Component {
  render() {
    return (
      <>
        <Seo
          location={this.props.location}
          title={'Home'}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Hero>
          <HeroInner>
            <HeadingOne>Cosmic Division Blog</HeadingOne>
            <Subtitle>Chronicling my Journey developing with jamstack</Subtitle>
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
          </HeroInner>
        </Hero>
      </>
    )
  }
}

export default IndexPage
