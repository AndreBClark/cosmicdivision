import React from 'react'
import tw from 'twin.macro'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Panel from 'components/Panel'
import { SmBtnOutline, SmBtn } from 'components/button'
import { PageContained } from 'components/PageBase'
  }


const Projects = () => {
  const { title, heading, subtitle, keywords } = page;
  return (
    <PageContained
      pagetitle={title}
      pageKeywords={keywords}
      pageHeading={heading}
      pageSubtitle={subtitle}
    >
      <ProjectList />
    </PageContained>
)}
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
      </div>
    </Detail>
  )
}
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
