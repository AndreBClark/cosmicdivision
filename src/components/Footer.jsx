import React from "react"
import styled from "styled-components"
import theme from "../../config/theme"

const FooterSection = styled.footer`
  background-color: ${props => props.theme.colors.bg};
  padding: 2rem;
`
const Inner = styled.div`
  margin: 0 auto;
  max-width: ${theme.maxWidth};
`
const Footer = () => {
  return (
    <FooterSection>
      <Inner>
        © {new Date().getFullYear()}, Built with {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Inner>
    </FooterSection>
  )
}

export default Footer
