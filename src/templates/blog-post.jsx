import React from 'react'
import { graphql } from 'gatsby'
import 'twin.macro'

import Panel from 'components/Panel'
import { PageContained } from 'components/PageBase'
const BlogPostTemplate = ({ location, data }) => {
  const post = data.markdownRemark;
  return (
    <PageContained
        location={location}
      pageHeading={post.frontmatter.title}
      pageSubtitle={post.frontmatter.description || post.excerpt}
      date={post.frontmatter.date}
    >
        <Panel>
          {/* <TinaField name="rawMarkdownBody" Component={Wysiwyg}> */}
          <Article dangerouslySetInnerHTML={{ __html: post.html }} />
          {/* </TinaField>
          {process.env.NODE_ENV !== 'production' && (
            <Btn onClick={() => setIsEditing(p => !p)}>
              {isEditing ? 'Preview' : 'Edit'}
            </Btn>
          )} */}
        </Panel>
      </ContentContainer>
    </>
  )
}
// const BlogTemplateOptions = {
//   fields: [
//     {
//       label: 'Title',
//       name: 'rawFrontmatter.title',
//       component: 'text',
//     },
//     {
//       name: 'frontmatter.draft',
//       component: 'toggle',
//       label: 'Draft',
//     },
//     {
//       label: 'Date Posted',
//       name: 'rawFrontmatter.date',
//       component: 'date',
//       dateFormat: 'MMMM DD YYYY',
//       timeFormat: false,
//     },
//     {
//       label: 'Body',
//       name: 'rawMarkdownBody',
//       component: 'markdown',
//     },
//   ],
// }

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
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
