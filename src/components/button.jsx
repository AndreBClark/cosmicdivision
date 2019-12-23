import styled from 'styled-components'
import { rhythm } from '../../config/typography'
import tw from 'tailwind.macro'

export const Btn = styled.button`
  ${tw`m-5`};
  display: block;
  padding: ${[rhythm(1 / 3), ' ', rhythm(1)]};
  text-transform: ${props => props.theme.fontFamily.logoCase};
  letter-spacing: ${props => props.theme.letterSpacing};
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.grey.default};
  border-color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontFamily.headingWeight};
  border-radius: ${props => props.theme.radius};
  font-family: ${props => props.theme.fontFamily.heading};
  border-color: ${props => props.theme.primary};
  border-width: ${props => props.theme.border};
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline;
  }
  &:hover {
    color: ${props => props.theme.colors.primary};
    background-color: transparent;
  }
`
export const BtnOutline = styled(Btn)`
  background: none;
  color: ${props => props.theme.colors.primary};
  &:hover {
    color: ${props => props.theme.colors.bg};
    background-color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
    cursor: pointer !important;
  }
`

export const BtnSimple = styled(Btn)`
  background: none;
  color: ${props => props.theme.colors.primary};
  ${tw`border-0`}
  &:hover {
    color: ${props => props.theme.colors.bg};
    background-color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
    cursor: pointer !important;
  }
`
