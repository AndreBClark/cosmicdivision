import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import 'twin.macro'
import { mapEdgesToNodes, getBlogUrl } from 'lib/helpers'

import TransitionLink from 'components/Links'
import { format } from 'date-fns'
import Panel from 'components/Panel'
import { PageView } from 'components/Views'
import PortableBlock from '../lib/Portable'

const page = {
  title: 'All Posts',
}

const Blog = ({ location }) => {
  return (
    <PageView location={location} title={page.title} pageHeading={page.title}>
      <PostList />
    </PageView>
  )
}

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
      <TransitionLink to={getBlogUrl(publishedAt, slug.current)}>
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
      </TransitionLink>
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
