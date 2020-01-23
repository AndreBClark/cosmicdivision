import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import theme from '../../config/theme'
import ContentContainer from './ContentContainer'
import BackgroundImage from 'gatsby-background-image'

const Container = styled(BackgroundImage)`
  background-color: ${theme.colors.grey.dark};
  width: 100%;
  min-height: 75vh;
  text-align: center;
  background-size: cover;
  background-position: center center;
  display: flex;
  align-items: center;
  @media screen and (min-width: 769px) {
    padding: 4rem;
    min-height: 80vh;
  }
`
const FlexLg = styled.div`
  display: flex;
  align-content: center;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: space-between;
  }
`
const Hero = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "orbital-bw.jpg" }) {
          childImageSharp {
            fluid(quality: 75, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      mobile: file(relativePath: {eq: "orbital-bw.jpg"}) {
        childImageSharp {
            fluid(quality: 100, maxWidth: 412) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = [
        `linear-gradient(0deg, rgba(18, 18, 18, 1) 5%, rgba(18, 18, 18, 0) 25%, rgba(18, 18, 18, 0) 50%)`,
        data.desktop.childImageSharp.fluid,
      ]
      return (
        <Container Tag="section" fluid={imageData} backgroundColor={`#040e18`}>
          <ContentContainer>
            <FlexLg>{children}</FlexLg>
          </ContentContainer>
        </Container>
      )
    }}
  />
)

export default Hero
