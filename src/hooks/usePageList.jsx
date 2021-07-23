import { useStaticQuery, graphql } from 'gatsby'

const usePageList = () => {
  const data = useStaticQuery(
    graphql`
      query PageList {
        allSitePage(
          filter: {componentChunkName: {glob: "component---src-pages-*-jsx", ne: "component---src-pages-404-jsx"}}
          limit: 3
          sort: {order: ASC, fields: id}
          skip: 1
        ) {
          edges {
            node {
              path
            }
          }
        }
      }
    `
  )
  return data.allSitePage.edges;
}

export default usePageList
