import React from 'react'
import { graphql } from 'gatsby'
import 'twin.macro'

import Panel from '@/containers/Panel'
import { PageView } from '@/containers/Views'
import PortableBlock from '@/utils/Portable'
import { toPlainText } from 'lib/helpers'

const BlogPostTemplate = (props) => {
  const { data, errors, location } = props
  const post = data && data.post
  return (
    <PageView
      location={location}
      pageHeading={errors ? 'graphql error' : post.title || 'Untitled'}
      pageSubtitle={toPlainText(post._rawExcerpt) || 'No description'}
      date={post.publishedAt}>
      <Panel>
        {post._rawBody && (
          <PortableBlock
            content={post._rawBody}
          />
        )}
      </Panel>
    </PageView>
  )
}

export const pageQuery = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      # mainImage {
      #   ...SanityImage
      #   alt
      # }
      title
      slug {
        current
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`

export default BlogPostTemplate