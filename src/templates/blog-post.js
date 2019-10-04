import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import TemplateWrapper from "../components/Layout"
import SEO from "../components/SEO"
import { rhythm, scale } from "../../config/typography"
import Panel from "../components/Panel"
import ContentContainer from "../components/ContentContainer"
import styled from 'styled-components'
import theme from "../../config/theme"

const Article = styled.article`
*:not(li) + * {
	margin-bottom: calc(4 * ${theme.spacer});
}
h2 {
margin-bottom: calc(.5 * ${theme.spacer});
}

ul {
  /* margin-top: calc(-3 * ${theme.spacer}) */
}
`
const ArticleHeading = styled.h1`
  margin: ${theme.spacer};
  max-width: ${theme.maxWidth};
`

const Date = styled.p`
  padding: 0 ${theme.spacer};
`
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <TemplateWrapper location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <ContentContainer>
          <ArticleHeading>{post.frontmatter.title}</ArticleHeading>
            <Date>
              {post.frontmatter.date}
            </Date>
          <Panel>
            <Article dangerouslySetInnerHTML={{ __html: post.html }} />
          </Panel>
          <Bio />
          <Panel>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={`${previous.fields.slug}`} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={`${next.fields.slug}`} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </Panel>
        </ContentContainer>
      </TemplateWrapper>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
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
