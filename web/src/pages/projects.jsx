import React from 'react'
import tw from 'twin.macro'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { Panel, PageView } from '@/containers'
import { SmBtnOutline, SmBtn, Link } from '@/tokens'

const page = {
  title: 'Projects',
  subtitle: 'Projects',
  keywords: [`blog`, `gatsby`, `javascript`, `react`],
}

const Projects = () => {
  const { title, subtitle, keywords } = page
  return (
    <PageView
      pageTitle={title}
      pageKeywords={keywords}
      pageHeading={title}
      pageSubtitle={subtitle}>
      <ProjectList />
    </PageView>
  )
}

const ProjectList = () => {
  const data = useStaticQuery(projectImages)
  const imageArray = data.allFile.nodes
  return projectsListArray.map((project, index) => {
    const image = getImage(imageArray[index])
    return (
      <Panel>
        <h2 tw="block text-2xl md:hidden">{project.name}</h2>
        <Item>
          <GatsbyImage
            image={image}
            alt={`Screenshot of ${project.name} ${project.type}`}
            tw="rounded-lg md:(w-1/3 object-center p-4 flex-grow-1 flex-shrink-0)"
          />
          <ProjectDetail projectProps={project} />
        </Item>
      </Panel>
    )
  })
}

const ProjectDetail = ({ projectProps }) => {
  const { name, description, demoUrl, repo, creationDate, status } =
    projectProps
  return (
    <Detail>
      <div>
        <h2 tw="hidden md:(block)">{name}</h2>
        <h3 tw="inline-block">{creationDate}</h3>{' '}
        <span tw="text-neutral-400 bg-secondary-100  px-2 pt-1 rounded m-4">
          {status}
        </span>
        <p tw="py-3 xl:text-2xl">{description}</p>
      </div>
      <div tw="-ml-4 flex">
        <SmBtn as={Link} tw="mb-2 md:(mb-0 px-12)" href={demoUrl}>
          Live Demo
        </SmBtn>
        <SmBtnOutline as={Link} tw="mb-2 md:(mb-0 px-12)" href={repo}>
          Github Repo
        </SmBtnOutline>
      </div>
    </Detail>
  )
}


const Detail = tw.div`
  flex flex-col justify-between
  md:(w-2/3 ml-8)
`

const Flex = tw.div`flex flex-col md:(max-w-full flex-row)`

const Item = tw(Flex)`
  justify-between w-full
`

const projectsListArray = [
  {
    name: 'Companion Dice',
    description: 'Dice Rolling app for Playing Table Top Games',
    creationDate: '2020',
    status: 'On Hold',
    type: 'Mobile Application',
    demoUrl: 'https://companiondice.netlify.com/',
    repo: 'https://github.com/AndreBClark/companiondice',
  },
  {
    name: 'DSCVR Portfolio',
    description:
      'project to create College Portfolio Site for North Idaho College Graphic Design Program',
    creationDate: 'Spring 2019',
    status: 'Completed',
    type: 'Website',
    demoUrl: 'https://dscvr2019.netlify.com/',
    repo: 'https://github.com/AndreBClark/dscvr',
  },
  {
    name: 'Real Estate Dribbble sprint',
    description:
      'One Day project to recreate a website mockup from a Dribbble Shot',
    type: 'Website',
    creationDate: '2020',
    status: 'Completed',
    demoUrl: 'https://dribbblechallenge-realestate.netlify.com/',
    repo: 'https://github.com/AndreBClark/dribbble-rea../dscvr.pnglestate',
  },
]

export const projectImages = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "projects" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 512, height: 512)
        }
      }
    }
  }
`

export default Projects
