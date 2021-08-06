import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import 'twin.macro'
import { PageContained } from 'components/PageBase'


const page = {
  title: "All Posts",
  }

const Blog = ({ location }) => {
    return (
    <PageContained
      location={location}
      title={page.title}
      pageHeading={page.title}
    >
      <PostList />
    </PageContained>
  )
}

const PostList = () => {
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
