import { Link } from "gatsby"
import React from "react"
import Button from "../components/button"
import Hero from "../components/Hero"
import Base from "../components/Base"
import SEO from "../components/SEO"
import styled from "styled-components"
import tw from 'tailwind.macro'
const HeroInner = styled.div`
  text-align: center;
  margin: 0;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin: 0 auto;
  }
`
const HeadingOne = styled.h1`
  text-transform: ${props => props.theme.fontFamily.logoCase};
  ${tw`text-5xl`}
`
const Subtitle = styled.p`
  letter-spacing: ${props => props.theme.letterSpacing};
  font-family: ${props => props.theme.fontFamily.heading};
  text-transform: ${props => props.theme.fontFamily.headingCase};
  font-weight: semibold;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.bg};
  background-color: ${props => props.theme.colors.primary};
  }
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
            <Link to="/blog/" style={{ textDecoration: "none" }}>
              <Button marginTop="35px">Begin Reading</Button>
            </Link>
          </HeroInner>
        </Hero>
      </Base>
    )
  }
}

export default IndexPage
