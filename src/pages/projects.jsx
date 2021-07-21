import React from 'react'
import ContentContainer from '../components/ContentContainer'
import Panel from '../components/Panel'
import { SmBtnOutline, SmBtn } from '../components/button'
import tw from 'twin.macro'
import Seo from '../components/Seo'
import PageHeading from '../components/PageHeading'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
const Flex = styled.div`
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    ${tw`flex max-w-full`}
  }
`
const ButtonContainer = styled(Flex)`
  a {
    ${tw`mb-2`}
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    ${tw`justify-between w-56`}
  }
`
const Item = styled(Flex)`
  border-bottom-width: 4px;
  ${tw`justify-between w-full pb-6 mb-8 border-primary`}
`

const Thumbnail = styled(Img)`
  ${tw`w-full p-4 mb-4 rounded-lg`}
  flex: 1 0 15%;
  img {
    object-position: 0 center !important;
  }
`
const Description = styled(Flex)`
  flex: 0 5 85%;
  ${tw`flex-col content-start justify-between w-full xl:px-4`}
  h2 {
    ${tw`-mt-1`}
  }
  p {
    ${tw`py-3`}
  }
`
const Projects = ({ props }) => {
  const { dscvr, companiondice, dribbble01 } = useStaticQuery(graphql`
    query {
      dscvr: file(relativePath: { eq: "dscvr.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 312) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      companiondice: file(relativePath: { eq: "companiondice.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 312) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      dribbble01: file(relativePath: { eq: "dribbble01.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 312) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <>
      <Seo
        title={'Projects'}
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <ContentContainer>
        <PageHeading>Projects</PageHeading>
        <Panel>
          <Item>
            <Thumbnail
              fluid={companiondice.childImageSharp.fluid}
              alt="dscvr project"
            />
            <Description>
              <h2>Companion Dice</h2>
              <p>Dice Rolling app for Playing Table Top Games</p>
              <ButtonContainer>
                <SmBtn
                  as="a"
                  target="_blank"
                  rel="noopener"
                  href="https://companiondice.netlify.com/">
                  Live Demo
                </SmBtn>
                <SmBtnOutline
                  as="a"
                  target="_blank"
                  rel="noopener"
                  href="https://github.com/AndreBClark/companiondice">
                  Github Repo
                </SmBtnOutline>
              </ButtonContainer>
              <hr />
            </Description>
          </Item>
          <Item>
            <Thumbnail
              fluid={dribbble01.childImageSharp.fluid}
              alt="dribbble Challenge"
            />
            <Description>
              <h2>Real Estate Dribbble sprint</h2>
              <p>
                One Day project to recreate a website mockup from a Dribbble
                Shot
              </p>
              <ButtonContainer>
                <SmBtn
                  rel="noopener"
                  target="_blank"
                  href="https://dribbblechallenge-realestate.netlify.com/"
                  as="a">
                  Live Demo
                </SmBtn>
                <SmBtnOutline
                  as="a"
                  target="_blank"
                  rel="noopener"
                  href="https://github.com/AndreBClark/dribbble-realestate">
                  Github Repo
                </SmBtnOutline>
              </ButtonContainer>
              <hr />
            </Description>
          </Item>
          <Item>
            <Thumbnail
              fluid={dscvr.childImageSharp.fluid}
              alt="dscvr project"
              className="w-full"
            />
            <Description>
              <h2>DSCVR Portfolio Project</h2>
              <p>
                project to create College Portfolio Site for North Idaho College
                Graphic Design Program
              </p>
              <ButtonContainer>
                <SmBtn
                  as="a"
                  target="_blank"
                  rel="noopener"
                  href="https://dscvr2019.netlify.com/">
                  Live Demo
                </SmBtn>
                <SmBtnOutline
                  as="a"
                  target="_blank"
                  rel="noopener"
                  href="https://github.com/AndreBClark/dscvr">
                  Github Repo
                </SmBtnOutline>
              </ButtonContainer>
              <hr />
            </Description>
          </Item>
        </Panel>
      </ContentContainer>
    </>
  )

const Detail = tw.div`
  flex flex-col justify-between
  md:(w-2/3 ml-8)
`

const Flex = tw.div`flex flex-col md:(max-w-full flex-row)`


const Item = tw(Flex)`
  justify-between w-full
`

}
export default Projects
