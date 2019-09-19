import { Link } from "gatsby"
import React from "react"
import Button from "../components/button"
import Hero from "../components/Hero"
import TemplateWrapper from "../components/Layout"
import SEO from "../components/SEO"
import styled from "styled-components"
// import SvgLogo from "../components/Svglogo"

const HeroInner = styled.div`
  text-align: center;
  margin: 0 auto;
`
const HeadingOne = styled.h1`
  font-size: 5rem;
  line-height: 1;
  margin-bottom: 0;
const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: semi-bold;
  text-shadow: black 3px 3px 3px;
  margin-bottom: 3rem;
  text-transform: capitalize;
  font-family: ${props => props.theme.fontFamily.mono};
`

class IndexPage extends React.Component {
  render() {
    const siteTitle = `Cosmic Division`

    return (
      <TemplateWrapper location={this.props.location} title={siteTitle}>
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
          {/* <SvgLogo
            fill={"none"}
            stroke={theme.colors.primary}
            strokeWidth={`4px`}
            height={"40vh"}
          /> */}
        </Hero>
      </TemplateWrapper>
    )
  }
}

export default IndexPage
