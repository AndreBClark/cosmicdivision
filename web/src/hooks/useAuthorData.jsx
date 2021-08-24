import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

const useAuthorData = () => {
  const data = useStaticQuery(graphql`
    {
      sanityAuthor(name: {eq: "Andre Clark"}) {
        name
        location
        role
        _rawBio(resolveReferences: {maxDepth: 10})
        image {
          alt
          asset {
            gatsbyImageData
          }
        }
        socials {
          devto
          github
          linkedin
        }
      }
    }
  `)
  const { image, _rawBio } = data.sanityAuthor;
  const author = {
    image: {
      alt: image.alt
    },
    bio: _rawBio,
    ...data.sanityAuthor,
  }
  author.image.data = getImage(image.asset);

  return author;
}

export default useAuthorData;
