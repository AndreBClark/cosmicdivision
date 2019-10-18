import React from "react"
import styled, { ThemeProvider } from "styled-components"
import theme from "../../config/theme"

const Button = props => (
  <ThemeProvider theme={theme}>
    <ButtonWrapper props={props}>{props.children}</ButtonWrapper>
  </ThemeProvider>
)

const ButtonWrapper = styled.button`
  padding: 10px 25px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: none;
  border-color: ${props => props.theme.primary};
  border: 3px solid;
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontWeight};
  border-radius: ${props => props.theme.radius};
  font-family: ${props => props.theme.fontFamily.heading};

  &:hover {
    text-decoration: none !important;
    color: ${props => props.theme.colors.bg};
    background-color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
  }
`

export default Button
