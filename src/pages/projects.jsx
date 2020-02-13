import React from 'react'
import Base from '../components/Base'
import ContentContainer from '../components/ContentContainer'
import Panel from '../components/Panel'
import { SmBtnOutline, SmBtn } from '../components/button'
import tw from 'tailwind.macro'
import styled from 'styled-components'
const Flex = styled.div`
  ${tw`flex justify-between w-56 max-w-full`}
`
const Item = styled.div`
  border-bottom-width: 4px;
  ${tw`pb-6 mb-8 border-primary`}
  & p {
    ${tw`py-3`}
  }
`
const Projects = () => {
  return (
    <Base>
      <ContentContainer>
        <h1>Projects</h1>
        <Panel>
          <Item>
            <h2>Companion Dice</h2>
            <p>Dice Rolling app for Playing Table Top Games</p>
            <Flex>
              <SmBtnOutline
                as="a"
                href="https://github.com/AndreBClark/companiondice"
              >
                Github Repo
              </SmBtnOutline>
              <SmBtn as="a" href="https://companiondice.netlify.com/">
                Live Demo
              </SmBtn>
            </Flex>
            <hr />
          </Item>
          <Item>
            <h2>Real Estate Dribbble sprint</h2>
            <p>
              One Day project to recreate a website mockup from a Dribbble Shot
            </p>
            <Flex>
              <SmBtnOutline
                as="a"
                href="https://github.com/AndreBClark/dribbble-realestate"
              >
                Github Repo
              </SmBtnOutline>
              <SmBtn
                href="https://dribbblechallenge-realestate.netlify.com/"
                as="a"
              >
                Live Demo
              </SmBtn>
            </Flex>
            <hr />
          </Item>
          <Item>
            <h2>DSCVR Portfolio Project</h2>
            <p>
              project to create College Portfolio Site for North Idaho College
              Graphic Design Program
            </p>
            <Flex>
              <SmBtnOutline as="a" href="https://github.com/AndreBClark/dscvr">
                Github Repo
              </SmBtnOutline>
              <SmBtn as="a" href="https://dscvr2019.netlify.com/">
                Live Demo
              </SmBtn>
            </Flex>
            <hr />
          </Item>
        </Panel>
      </ContentContainer>
    </Base>
  )
}
export default Projects