import styled from 'styled-components'
import tw from 'tailwind.macro'
import styled from 'emotion/'

export const Btn = styled.button`
${tw`block px-8 py-2 m-4 font-bold tracking-widest text-gray-500 uppercase border rounded-lg bg-primary border-primary font-heading`}
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

export const SmBtn = styled(Btn)`
${tw`text-xs`}
`
export const SmBtnOutline = styled(BtnOutline)`
  ${tw`text-xs`}
`
