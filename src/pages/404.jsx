import React from 'react'
import { graphql, Link } from 'gatsby'
import SEO from '../components/SEO'
import ContentContainer from '../components/ContentContainer'
import Panel from '../components/Panel'
import { Btn } from '../components/button'

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <ContentContainer>
        <SEO location={this.props.location} title={`404: Not Found | ${siteTitle}`} />
        <h1>Not Found</h1>
        <Panel>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <Btn as={Link} to="/">
            GO HOME
          </Btn>
        </Panel>
      </ContentContainer>
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
