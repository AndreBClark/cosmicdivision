import styled from "styled-components"
import { rhythm } from "../../config/typography"
import { Link } from 'gatsby'


export const OutlineLink = styled(Link)`
  padding: ${[rhythm(1 / 3), " ", rhythm(1)]};
  margin: ${rhythm(1 / 3)};
  text-transform: ${props => props.theme.fontFamily.logoCase};
  letter-spacing: ${props => props.theme.letterSpacing};
  background-color: none;
  border: ${props => props.theme.border} solid;
  border-color: ${props => props.theme.primary};
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontFamily.headingWeight};
  border-radius: ${props => props.theme.radius};
  font-family: ${props => props.theme.fontFamily.heading};

  &:hover {
    color: ${props => props.theme.colors.bg};
    background-color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
    cursor: pointer !important;
  }
`

export const SolidLink = styled(OutlineLink)`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.grey.default};
  border-color: ${props => props.theme.colors.primary};
  &:hover {
    color: ${props => props.theme.colors.primary};
    background-color: transparent;
  }`

export const OutlineBtn = styled.button`
  padding: ${[rhythm(1 / 3), " ", rhythm(1)]};
  margin: ${rhythm(1 / 3)};
  text-transform: ${props => props.theme.fontFamily.logoCase};
  letter-spacing: ${props => props.theme.letterSpacing};
  background-color: none;
  border: ${props => props.theme.border} solid;
  border-color: ${props => props.theme.primary};
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontFamily.headingWeight};
  border-radius: ${props => props.theme.radius};
  font-family: ${props => props.theme.fontFamily.heading};

  &:hover {
    color: ${props => props.theme.colors.bg};
    background-color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
    cursor: pointer !important;
  }
`

export const SolidBtn = styled(OutlineBtn)`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.grey.default};
  border-color: ${props => props.theme.colors.primary};
  &:hover {
    color: ${props => props.theme.colors.primary};
    background-color: transparent;
  }`

export const OutlineAnchor = styled.a`
  padding: ${[rhythm(1 / 3), " ", rhythm(1)]};
  margin: ${rhythm(1 / 3)};
  text-transform: ${props => props.theme.fontFamily.logoCase};
  letter-spacing: ${props => props.theme.letterSpacing};
  background-color: none;
  border: ${props => props.theme.border} solid;
  border-color: ${props => props.theme.primary};
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontFamily.headingWeight};
  border-radius: ${props => props.theme.radius};
  font-family: ${props => props.theme.fontFamily.heading};

  &:hover {
    color: ${props => props.theme.colors.bg};
    background-color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
    cursor: pointer !important;
  }
`

export const SolidAnchor = styled(OutlineBtn)`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.grey.default};
  border-color: ${props => props.theme.colors.primary};
  &:hover {
    color: ${props => props.theme.colors.primary};
    background-color: transparent;
  }`