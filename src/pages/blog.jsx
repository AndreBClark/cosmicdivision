import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import 'twin.macro'

import AniLinkDefault from 'components/AniLinkDefault'
import Panel from 'components/Panel'
import { PageContained } from 'components/PageBase'

const page = {
  title: 'All Posts',
}

const Blog = ({ location }) => {
  return (
    <PageContained
      location={location}
      title={page.title}
      pageHeading={page.title}>
      <PostList />
    </PageContained>
  )
}

const PostList = () => {
  const data = useStaticQuery(PostsQuery)
  const posts = data.allMarkdownRemark.edges

  return posts.map(({ node }) => {
    const title = node.frontmatter.title || node.fields.slug
    return (
      <PostCard
        slug={node.fields.slug}
        key={node.fields.slug}
        date={node.frontmatter.date}
        description={node.frontmatter.description || node.excerpt}
        title={title}
      />
    )
  })
}

const PostCard = ({ key, slug, date, description, title }) => (
  <Panel as="article" key={key}>
    <AniLinkDefault to={slug}>
      <h3>{title}</h3>
      <small tw="text-sea-uno-100">{date}</small>
      <p
        tw="text-sea-uno-100"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </AniLinkDefault>
  </Panel>
)

export const PostsQuery = graphql`
  {
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
