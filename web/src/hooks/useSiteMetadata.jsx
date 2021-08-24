import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const site = useStaticQuery(
    graphql`
      query SiteMetadata {
        sanitySiteSettings {
          id
          description
          keywords
          lang
          title
          url
          author {
            name
          }
        }
      }
    `
  )
  return site.sanitySiteSettings
}

export default useSiteMetadata
