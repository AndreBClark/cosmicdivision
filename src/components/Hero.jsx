import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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
        alt='orbital photo overlooking Earth at night taken from the International Space Station'
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

export const HeadingOne = tw.h1`
  my-12 font-heading text-secondary-100  font-bold text-6xl leading-tight tracking-widest uppercase
  xl:text-8xl
`
export const Subtitle = tw.h2`
  block max-w-full w-full px-8 bg-secondary-100   text-lg font-heading capitalize font-semibold text-gray-800 pb-2 pt-1
  lg:(tracking-widest text-2xl mx-1 px-4)
`

const HeroImageData = graphql`
{
  file(relativePath: {eq: "orbital-deep.webp"}) {
    childImageSharp {
      gatsbyImageData
    }
  }
}
`


export default Hero