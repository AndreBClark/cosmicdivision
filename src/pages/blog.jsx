import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import SEO from '../components/SEO'
import PageHeading from '../components/PageHeading'
import ContentContainer from '../components/ContentContainer'
import PanelHover from '../components/PanelHover'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
const PostCard = styled.article`
  p {
    color: ${props => props.theme.colors.white};
  }
`
class Blog extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <>
        <SEO location={this.props.location} title={`All Posts`} />
        <ContentContainer>
          <PageHeading>All Posts</PageHeading>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <PanelHover>
                <PostCard key={node.fields.slug}>
                  <AniLink
                    swipe
                    direction="left"
                    entryOffset={100}
                    to={node.fields.slug}>
                    <h3>{title}</h3>
                    <small>{node.frontmatter.date}</small>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </AniLink>
                </PostCard>
              </PanelHover>
            )
          })}
        </ContentContainer>
      </>
    )
  }
}

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
export default Blog
