import React from "react"
import styled from "styled-components"

const Button = props => (
  <ButtonWrapper {...props} onclick={props}>
    {props.children}
  </ButtonWrapper>
)

const ButtonWrapper = styled.button`
  padding: 0.5em 1.5em;
  text-transform: ${props => props.theme.fontFamily.logoCase};
  letter-spacing: ${props => props.theme.letterSpacing};
  background: none;
  border: ${props => props.theme.border} solid;
  border-color: ${props => props.theme.primary};
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontWeight};
  border-radius: ${props => props.theme.radius};
  font-family: ${props => props.theme.fontFamily.heading};

  &:hover {
    color: ${props => props.theme.colors.bg};
    background-color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
    cursor: pointer !important;
  }
`

export default Button
