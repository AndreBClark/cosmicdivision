import React from 'react'
import { BtnOutline, Btn } from '../components/button'
import Hero from '../components/Hero'
import Base from '../components/Base'
import SEO from '../components/SEO'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { rhythm } from '../../config/typography'
import { DualWrapper } from './contact'
import { Link } from 'gatsby'
const HeroInner = styled.div`
  text-align: center;
  margin: 0;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-left: auto;
    margin-right: auto;
  }
`
const HeadingOne = styled.h1`
  text-transform: ${props => props.theme.fontFamily.logoCase};
  ${tw`text-5xl`}
`
export const Subtitle = styled.h5`
  font-family: ${props => props.theme.fontFamily.heading};
  text-transform: ${props => props.theme.fontFamily.headingCase};
  font-weight: semibold;
  border-radius: ${rhythm(1 / 8)};
  margin: ${rhythm(1 / 4)};
  padding: ${rhythm(1 / 8)} ${rhythm(1)};
  color: ${props => props.theme.colors.bg};
  background-color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontFamily.headingWeight};
`

class IndexPage extends React.Component {
  render() {
    const siteTitle = `Cosmic Division`

    return (
      <Base location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Hero>
          <HeroInner>
            <HeadingOne>Cosmic Division Blog</HeadingOne>
            <Subtitle>Chronicling my Journey developing with jamstack</Subtitle>
            <DualWrapper>
              <Btn as={Link} to="/blog/">Begin Reading</Btn>
              <BtnOutline as={Link} to="/contact/">Get in Touch</BtnOutline>
            </DualWrapper>
          </HeroInner>
        </Hero>
      </Base>
    )
  }
}

export default IndexPage
