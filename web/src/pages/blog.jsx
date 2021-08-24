import React from 'react'
import 'twin.macro'
import { format } from 'date-fns'
import { graphql, useStaticQuery } from 'gatsby'
import { mapEdgesToNodes, getBlogUrl } from 'lib/helpers'

import { mapEdgesToNodes, getBlogUrl } from 'lib'
import { Panel, PageView } from '@/containers'
import { Link } from '@/tokens'

const page = {
  title: 'All Posts',
}

const Blog = ({ location }) => (
  <PageView location={location} pageTitle={page.title} pageHeading={page.title}>
    <PostList />
  </PageView>
)

const PostList = () => {
  const data = useStaticQuery(PostsQuery)
  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
    postNodes &&
    postNodes.length > 0 &&
    postNodes.map((post) => <PostCard {...post} />)
  )
}

const PostCard = (props) => {
  const { _rawExcerpt, title, publishedAt, id, slug } = props
  return (
    <Panel as="article" key={id}>
      <Link to={getBlogUrl(publishedAt, slug.current)}>
        <h3 tw="text-primary-100">{title}</h3>
        <small tw="text-primary-100">
          {format(new Date(publishedAt), 'MMMM Mo, yyyy')}
        </small>
        {_rawExcerpt ? (
          <PortableBlock
            content={_rawExcerpt}
            tw="text-primary-100"></PortableBlock>
        ) : (
          <p>no Excerpt</p>
        )}
      </Link>
    </Panel>
  )
}

export const PostsQuery = graphql`
  {
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          # mainImage {
          #   ...SanityImage
          #   alt
          # }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`
export default Blog
