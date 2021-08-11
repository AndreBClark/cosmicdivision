import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query siteMetadata {
        site {
          siteMetadata {
            title
            lang
            description
            authorBio {
              author
              location
            }
            social {
              github
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
