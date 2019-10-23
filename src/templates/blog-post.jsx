import React from "react"
import { Link, graphql } from "gatsby"
import Base from "../components/Base"
import SEO from "../components/SEO"
import Panel from "../components/Panel"
import ContentContainer from "../components/ContentContainer"
import styled from "styled-components"
import { liveRemarkForm } from "gatsby-tinacms-remark"
import { Wysiwyg } from "@tinacms/fields"
import { TinaField } from "@tinacms/form-builder"
import Button from "../components/button"
const Article = styled.article`
  *:not(li) + * {
    margin-bottom: calc(${props => props.theme.spacer} * 4);
  }
  h2 {
    margin-bottom: ${props => props.theme.spacer};
  }
`
const ArticleHeading = styled.h1`
  margin: calc(4 * ${props => props.theme.spacer});
  max-width: ${props => props.theme.maxWidth};
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin: ${props => props.theme.spacer};
  }
`
const SequentialLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`
const Date = styled.p`
  margin: calc(4 * ${props => props.theme.spacer});
  max-width: ${props => props.theme.maxWidth};
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin: ${props => props.theme.spacer};
  }
`
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    return (
      <Base location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <ContentContainer>
          <TinaField name="rawFrontmatter.title" Component={Wysiwyg}>
            <ArticleHeading>{post.frontmatter.title}</ArticleHeading>
          </TinaField>
          <Date>{post.frontmatter.date}</Date>
          <Panel>
            <TinaField name="rawMarkdownBody" Component={Wysiwyg}>
              <Article dangerouslySetInnerHTML={{ __html: post.html }} />
            </TinaField>
            <Button onClick={() => this.props.setIsEditing(p => !p)}>
              {this.props.isEditing ? "Preview" : "Edit"}
            </Button>
          </Panel>
          <Panel>
            <SequentialLinks>
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
            </SequentialLinks>
          </Panel>
        </ContentContainer>
      </Base>
    )
  }
}

export default liveRemarkForm(BlogPostTemplate)

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
      fileRelativePath
      rawFrontmatter
      rawMarkdownBody
    }
  }
`
