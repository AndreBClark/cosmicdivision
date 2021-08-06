import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import 'twin.macro'
import { mapEdgesToNodes } from '../lib/helpers'

import TransitionLink from 'components/Links'
import PortableText from 'lib/Portable'
import Panel from 'components/Panel'
import { PageView } from 'components/Views'


const page = {
  title: 'All Posts',
}

const Blog = ({ location }) => {
  return (
    <PageView
      location={location}
      title={page.title}
      pageHeading={page.title}>
      <PostList />
    </PageView>
  )
}


const PostList = () => {
  const data = useStaticQuery(PostsQuery)
  const postNodes = data && data.posts && mapEdgesToNodes(data.posts);

  return postNodes && postNodes.length > 0 && (
    <PostCard  />
  )
}


const PostCard = (props) => {
  const { _rawExcerpt, title, publishedAt, id, slug } = props;
  return (
    <Panel as="article" key={id}>
      <TransitionLink to={slug}>
        <h3 tw="text-primary-100">{title}</h3>
        <small tw="text-primary-100">{publishedAt}</small>
        <PortableText
          tw="text-primary-100">
          {_rawExcerpt}
        </PortableText>
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
`;
export default Blog
