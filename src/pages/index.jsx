import React from 'react'
import { BtnOutline, Btn } from '../components/button'
import Hero from '../components/Hero'
import Seo from '../components/Seo'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const HeroInner = styled.div`
  text-align: center;
  margin: 0;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-left: auto;
    margin-right: auto;
  }
`
const HeadingOne = styled.h1`
  ${tw`text-5xl`}
  text-transform: ${props => props.theme.fontFamily.logoCase};
`
export const Subtitle = styled.h2`
${tw`text-lg`}
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
    return (
      <>
        <Seo
          location={this.props.location}
          title={home}
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
