import React from 'react'
import { graphql } from 'gatsby'
import 'twin.macro'

import Panel from 'components/Panel'
import { PageView } from 'components/Views'


const BlogPostTemplate = ({ location, data }) => {
  const post = data.markdownRemark
  return (
    <PageView
      location={location}
      pageHeading={post.frontmatter.title}
      pageSubtitle={post.frontmatter.description || post.excerpt}
      date={post.frontmatter.date}>
      <Panel>
        <article
          tw="prose xl:prose-xl max-w-none"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Panel>
    </PageView>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

export default BlogPostTemplate
