/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import 'twin.macro'
import Panel from 'components/Panel'
import { theme } from 'twin.macro'


function BioCard() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Panel>
            <Container>
              <GatsbyImage
                image={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  marginRight: theme.spacer,
                  marginBottom: 0,
                  minWidth: 100,
                  borderRadius: `100%`,
                }}
                imgStyle={{
                  borderRadius: `9999px`,
                }}
              />
              <p>
                Written by <strong>{author}</strong> who lives and works in
                Spokane, Washington building useful things.
                {` `}
                <a href={`https://github.com/${social.github}`}>
                  You should follow him on Github
                </a>
              </p>
            </Container>
          </Panel>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    site {
      siteMetadata {
        author
        social {
          github
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
`

export default BioCard
