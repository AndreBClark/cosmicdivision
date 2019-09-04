import React from "react"
import { Link, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import Bio from "../components/bio"
import TemplateWrapper from "../components/Layout"
import SEO from "../components/SEO"
import Button from "../components/button"

import theme from "../../config/theme"
import Panel from "../components/Panel"
import ContentContainer from "../components/ContentContainer"

const PostCard = styled.article`
  padding: 3vmin;
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
      <TemplateWrapper location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <ContentContainer>
          <div style={{ margin: "20px 0 40px" }}>
            <Bio />
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <ThemeProvider theme={theme}>
                  <Link to={`${node.fields.slug}`}>
                    <Panel>
                      <PostCard key={node.fields.slug}>
                        <h3>{title}</h3>
                        <small>{node.frontmatter.date}</small>
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              node.frontmatter.description || node.excerpt,
                          }}
                        />
                      </PostCard>
                    </Panel>
                  </Link>
                </ThemeProvider>
              )
            })}
          </div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button marginTop="85px">Go Home</Button>
          </Link>
        </ContentContainer>
      </TemplateWrapper>
    )
  }
}

export default Blog

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
