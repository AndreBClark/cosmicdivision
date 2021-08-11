import React from 'react'
import tw from 'twin.macro'
import { ExternalLink } from '@/tokens'

const Row = tw.footer`bg-neutral-100 md:p-8 mt-auto`

const Inner = tw.div`mx-auto flex justify-between text-sm max-w-5xl`

const Item = tw.p`my-4 mx-3 text-primary-100 `

const Footer = () => {
  return (
    <Row>
      <Inner>
        <Item>
          Submit an &nbsp;
          <ExternalLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/AndreBClark/CosmicDivision/issues/new/choose">
            Issue on Github
          </ExternalLink>
        </Item>
        <Item>
          © {new Date().getFullYear()}, Built with &nbsp;
          <ExternalLink href="https://www.gatsbyjs.org">Gatsby</ExternalLink>
        </Item>
      </Inner>
    </Row>
  )
}

export default Footer
