import React from 'react'
import { graphql } from 'gatsby'
import TransitionLink from 'components/Links'
import Panel from 'components/Panel'
import { Btn } from 'components/button'
import { PageContained } from 'components/PageBase'

import useSiteMetadata from 'hooks/useSiteMetaData'

const NotFoundPage = ({ location }) => {
  const { title } = useSiteMetadata()

  return (
    <PageContained
      location={location}
      pageTitle={`404: Not Found | ${title}`}
      pageHeading="Error 404: Path Not Found"
      pageSubtitle="You just hit a route that doesn&#39;t exist... the sadness.">
      <Panel>
        <TransitionLink as={Btn} to="/">
          GO HOME
        </TransitionLink>
      </Panel>
    </PageContained>
  )
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
