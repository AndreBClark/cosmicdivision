import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import TemplateWrapper from "../components/Layout"
import SEO from "../components/SEO"
import Button from "../components/button"
import Hero from "../components/Hero"
import Panel from "../components/Panel"


const Logosvg = styled.img`
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
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
        <Logosvg
          style={{ margin: `0 auto` }}
          src="./GatsbyScene.svg"
          width="50%"
        />
        <Panel>
        <h1>
          Hey people
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to your new Gatsby website. You are on your home page.</p>
        <p>
          This starter comes out of the box with styled components and Gatsby's
          default starter blog running on Netlify CMS.
        </p>
        <p>Now go build something great!</p>
        <Link to="/blog/" style={{ textDecoration: "none" }}>
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
        </Panel>
        </Hero>
      </TemplateWrapper>
    )
  }
}

export default IndexPage
