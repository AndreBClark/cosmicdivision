import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Base from "../components/Base"
import SEO from "../components/SEO"
import PageHeading from "../components/PageHeading"
import ContentContainer from "../components/ContentContainer"
import PanelHover from "../components/PanelHover"
import { withPlugin } from 'react-tinacms'
import { createRemarkButton } from 'gatsby-tinacms-remark'

const PostCard = styled.article`
  p {
    color: ${props => props.theme.colors.white};
  }
`
class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Base location={this.props.location} title={siteTitle}>
        <SEO title="All Posts" />
        <ContentContainer>
          <PageHeading>All Posts</PageHeading>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Link to={`${node.fields.slug}`}>
                <PanelHover>
                  <PostCard key={node.fields.slug}>
                    <h3>{title}</h3>
                    <small>{node.frontmatter.date}</small>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </PostCard>
                </PanelHover>
              </Link>
            )
          })}
        </ContentContainer>
      </Base>
    )
  }
}
const CreateBlogPlugin = createRemarkButton({
  label: 'Add New Blog',
  fields: [
    {
      name: 'title',
      label: 'Title',
      component: 'text',
    },
  ],
  filename: ({ title }) => {
    const slug = title.replace(/\s+/g, '-')
      .replace(/&/g, '-and-')
      // eslint-disable-next-line
      .replace(/[^\w\-]+/g, '')
      // eslint-disable-next-line
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '')
      .toLowerCase()

    return `content/blog/${slug}.md`
  },
  frontmatter: ({ title }) => ({
    title,
    date: new Date(),
  }),
  body: () => `I forgot to put content here. whoops.`,
})

export default withPlugin(Blog, CreateBlogPlugin)


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { title: { ne: "" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
