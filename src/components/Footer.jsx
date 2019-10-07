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
  font-size: .8rem;
  max-width: ${theme.maxWidth};
`
const Footer = () => {
  return (
    <FooterSection>
      <Inner>
        <p>
          Submit an 
        <a href="">
          Issue on Github
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
