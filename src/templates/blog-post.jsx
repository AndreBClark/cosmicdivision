import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/Seo'
import Panel from '../components/Panel'
import ContentContainer from '../components/ContentContainer'
import { styled } from 'twin.macro'
import PageHeading from '../components/PageHeading'
import theme from '../../config/theme'

const Article = styled.article`
  *:not(li) + * {
    margin-bottom: calc(${theme.spacer} * 4);
  }
  h2 {
    margin-bottom: ${theme.spacer};
  }
`

// const SequentialLinks = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   list-style: none;
//   padding: 0;
// `
const Date = styled.p`
  margin: calc(4 * ${theme.spacer});
  max-width: ${theme.maxWidth};
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin: ${theme.spacer};
  }
`
const BlogPostTemplate = ({
  data,
  // pageContext,
  location
}) => {
  const post = data.markdownRemark
  // const siteTitle = useSiteMetadata()
  // const { previous, next } = pageContext
  return (
    <>
      <Seo
        location={location}
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <ContentContainer>
        <PageHeading>{post.frontmatter.title}</PageHeading>
        <Date>{post.frontmatter.date}</Date>
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
