import React from 'react'
import { graphql } from 'gatsby'
import 'twin.macro'

import Panel from 'components/Panel'
import { PageView } from 'components/Views'


const BlogPostTemplate = ({ props }) => {
  const { data, errors, location } = props;
  const post = data && data.post;
  return (
    <PageView
      location={location}
      pageHeading={post.title || "Untitled"}
      pageSubtitle={post._rawExcerpt || "No description"}
      date={post.publishedAt}>
      <Panel>
        {/* {_rawBody && <PortableText
          blocks={_rawBody}
          tw="prose xl:prose-xl max-w-none"
        />} */}
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
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      # _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`

export default BlogPostTemplate