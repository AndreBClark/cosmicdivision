import React from 'react'
import { BtnOutline, Btn } from 'components/button'
import Hero from 'components/Hero'
import { HeadingOne, Subtitle } from 'components/Hero'
import { DualWrapper } from 'components/TextInput'
import AniLinkDefault from 'components/AniLinkDefault'
import { PageFullWidth } from 'components/PageBase'

const indexContent = {
  heading: "Cosmic Division",
  subtitle: "Chronicling my Journey developing with jamstack",
  buttons: {
    primary: {
      link: "/blog/",
      text: "Begin Reading",
    },
    secondary: {
      link: "/contact/",
      text: "Get in Touch",
    },
  }
}


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
