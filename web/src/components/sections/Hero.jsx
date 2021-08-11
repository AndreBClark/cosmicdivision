import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import tw from 'twin.macro'

const Hero = ({ children }) => {
  const data = useStaticQuery(HeroImageData)
  const image = getImage(data.file)
  return (
    <Container>
      <GatsbyImage
        layout="fullWidth"
        objectFit="cover"
        loading="eager"
        aspectRatio={16 / 9}
        imgStyle={{ mixBlendMode: 'screen' }}
        image={image}
        alt="orbital photo overlooking Earth at night taken from the International Space Station"
        tw="static"
      />
      <Content>{children}</Content>
    </Container>
  )
}

const Container = tw.div`
  h-screen-75 relative overflow-y-hidden
  before:(content absolute  z-10 h-108 bottom-0 w-full bg-gradient-to-t from-neutral-100 to-transparent)
`

const Content = tw.div`
  text-center z-20 h-full absolute top-0 flex flex-col justify-between md:justify-center items-center w-full
`

const HeroImageData = graphql`
  {
    file(relativePath: { eq: "orbital-deep.webp" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export default Hero
