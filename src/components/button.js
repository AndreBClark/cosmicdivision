import React from "react"
import styled, { ThemeProvider }from "styled-components"
import theme from '../../config/theme'

const Button = props => (
<ThemeProvider theme={theme}>
  <ButtonWrapper props={props}>{props.children}</ButtonWrapper>
</ThemeProvider>
)

const ButtonWrapper = styled.button`
  display: block;
  border: none;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 10px 25px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;

  background: none;
  text-decoration: none;
  border-color: ${props => props.theme.primary};
  border: 3px solid;
  color: ${props => props.theme.colors.primary || "rgb(255, 255, 255)"};
  font-size: ${props => props.theme.fontSize || "15px"};
  font-weight: ${props => props.theme.fontWeight || "600"};
  border-radius: ${props => props.theme.radius || "6px"};
  margin-top: ${props => props.theme.marginTop};
  margin-bottom: ${props => props.props.marginBottom};

  &:hover {
    color: ${props => props.theme.colors.grey.dark};
    background-color: ${props => props.theme.colors.primaryLight};
    border-color: ${props => props.theme.colors.primaryLight}; 
    box-shadow: inset 0 0 100px 100px; 
  }
`

export default Button
