import React from 'react'
import tw from 'twin.macro'
import { StaticImage } from "gatsby-plugin-image"

const Container = tw.div`
  h-screen-80 relative overflow-y-hidden
  before:(content absolute  z-20 h-120 bottom-0 w-full bg-gradient-to-t from-gray-800 to-transparent)
`



export const Content = tw.div`
  text-center z-20 h-full absolute top-0 flex flex-col justify-around md:justify-center items-center w-full
`

export const HeadingOne = tw.h1`
  font-heading text-primary font-bold text-6xl xl:text-8xl leading-tight tracking-widest uppercase
`
export const Subtitle = tw.h2`
  block max-w-full w-full px-8 bg-primary  text-lg font-heading capitalize font-semibold text-gray-800
  lg:(tracking-widest text-2xl mx-1 px-4)
`

const Hero = ({ children }) => {
  const backgroundImage = "../images/orbital-bw.jpg";
  return (
    <Container css={{
      maxHeight: 'calc(80vh - 50px)'
    }}>
      <StaticImage
        layout="fullWidth"
        objectFit="cover"
        loading="eager"
        alt=""
        src={backgroundImage}
        formats={["auto", "webp", "avif"]}
        placeholder="blurred"
      />
      <Content>
        {children}
      </Content>
    </Container>
  )
}



export default Hero