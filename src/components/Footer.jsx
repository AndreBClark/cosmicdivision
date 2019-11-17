import React from 'react'
import styled from 'styled-components'

const Row = styled.footer`
  background-color: ${props => props.theme.colors.bg};
  padding: ${props => props.theme.spacer * 4};
  margin-top: auto;
`
const Inner = styled.div`
  margin: 0 auto;
  @media screen and (min-width: ${props => props.theme.breakpoints.phone}){
  }
  display: flex;
  justify-content: space-between;
  font-size: .8rem;
  max-width: ${props => props.theme.maxWidth};
`

const Item = styled.p`
  margin: calc(2 * ${props => props.theme.spacer})
          calc(1.5 * ${props => props.theme.spacer});
`
const Footer = () => {
  return (
    <Row>
      <Inner>
        <Item>
          Submit an &nbsp;
        <a  target="_blank" 
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
