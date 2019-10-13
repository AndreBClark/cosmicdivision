import React from "react"
import styled from "styled-components"

const FooterSection = styled.footer`
  background-color: ${props => props.theme.colors.bg};
  padding: ${props => props.theme.spacer * 4};
  margin-top: auto;
`
const Inner = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-size: .8rem;
  max-width: ${props => props.theme.maxWidth};
`
const Footer = () => {
  return (
    <FooterSection>
      <Inner>
        <p>
          Submit an &nbsp;
        <a  target="_blank" 
            rel="noopener noreferrer" 
            href="https://github.com/AndreBClark/CosmicDivision/issues/new/choose">
          Issue on Github
          </a>
        </p>
          
        <p>
        © {new Date().getFullYear()}, Built with 
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        </p>
      </Inner>
    </FooterSection>
  )
}

export default Footer
