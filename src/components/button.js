import React from "react"
import styled, { ThemeProvider } from "styled-components"
import theme from "../../config/theme"

const Button = props => (
  <ThemeProvider theme={theme}>
    <ButtonWrapper props={props}> {props.children} </ButtonWrapper>{" "}
  </ThemeProvider>
)

const ButtonWrapper = styled.button`
  border: none;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 10px 25px;
  cursor: pointer;
  text-transform: uppercase;
  display: block;
  letter-spacing: 2px;

  background: none;
  text-decoration: none;
  border-color: ${props => props.theme.primary};
  border: 3px solid;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSize};
  font-weight: ${props => props.theme.fontWeight};
  border-radius: ${props => props.theme.layoutConstants.radius};

  &:hover {
    text-decoration: none !important;
    color: ${props => props.theme.colors.bg};
    background-color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
  }
`

export default Button
