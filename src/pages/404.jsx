import React from "react"
import { graphql } from "gatsby"

import TemplateWrapper from "../components/Base"
import SEO from "../components/SEO"
import ContentContainer from "../components/ContentContainer"
import Panel from "../components/Panel"
import Button from "../components/button"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <TemplateWrapper location={this.props.location} title={siteTitle}>
        <ContentContainer>
          <SEO title="404: Not Found" />
          <h1>Not Found</h1>
          <Panel>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            <Button>GO HOME</Button>
          </Panel>
        </ContentContainer>
      </TemplateWrapper>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
