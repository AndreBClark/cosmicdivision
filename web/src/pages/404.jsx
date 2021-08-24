import React from 'react'
import { graphql } from 'gatsby'
import { Link, Btn } from '@/tokens'
import { Panel, PageView } from '@/containers'

import { useSiteMetadata } from 'hooks'

const NotFoundPage = ({ location }) => {
  const { title } = useSiteMetadata()

  return (
    <PageView
      location={location}
      pageTitle={`404: Not Found | ${title}`}
      pageHeading="Error 404: Path Not Found"
      pageSubtitle="You just hit a route that doesn&#39;t exist... the sadness.">
      <Panel>
        <Link as={Btn} to="/">
          GO HOME
        </Link>
      </Panel>
    </PageView>
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
