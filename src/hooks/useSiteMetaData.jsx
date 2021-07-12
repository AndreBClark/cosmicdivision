import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query siteMetadata {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  return site.siteMetadata
}
export default useSiteMetadata
