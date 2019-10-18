import React from "react"
import styled from "styled-components"

const Button = props => (
    <ButtonWrapper props={props}>{props.children}</ButtonWrapper>
)

const ButtonWrapper = styled.button`
  padding: 10px 25px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: none;
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
