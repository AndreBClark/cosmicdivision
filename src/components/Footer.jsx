import React from "react"
import styled from "styled-components"
import theme from "../../config/theme"

const FooterSection = styled.footer`
  background-color: ${props => props.theme.colors.bg};
  padding: 2rem;
  margin-top: auto;
`
const Inner = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-size: .8rem;
  max-width: ${theme.maxWidth};
`
const Footer = () => {
  return (
    <FooterSection>
      <Inner>
        <p>
          Submit an
        <a href="https://github.com/AndreBClark/CosmicDivision/issues">
          &nbsp;Issue on Github
          </a>
        </p>
          
        <p>
        © {new Date().getFullYear()}, Built with {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        </p>
      </Inner>
    </FooterSection>
  )
}

export default Footer
