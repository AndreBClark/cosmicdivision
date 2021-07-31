import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import 'twin.macro'

import TransitionLink from 'components/Links'
import Panel from 'components/Panel'
import { ViewContent } from 'components/Views'

const page = {
  title: 'All Posts',
}

const Blog = ({ location }) => {
  return (
    <ViewContent
      location={location}
      title={page.title}
      pageHeading={page.title}>
      <PostList />
    </ViewContent>
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
    <TransitionLink to={slug}>
      <h3 tw="text-primary-100">{title}</h3>
      <small tw="text-primary-100">{date}</small>
      <p tw="text-primary-100"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </TransitionLink>
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
