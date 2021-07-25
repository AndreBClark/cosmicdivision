import React from 'react'
import tw from 'twin.macro'

const Row = tw.footer`bg-gray-800 md:p-8 mt-auto`

const Inner = tw.div`mx-auto flex justify-between text-sm max-w-screen-xl`

const Item = tw.p`my-4 mx-3 text-gray-50`

const Footer = () => {
  return (
    <Row>
      <Inner>
        <Item>
          Submit an &nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/AndreBClark/CosmicDivision/issues/new/choose">
            Issue on Github
          </a>
        </Item>

        <Item>
          © {new Date().getFullYear()}, Built with &nbsp;
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Item>
      </Inner>
    </Row>
  )
}

export default Footer
