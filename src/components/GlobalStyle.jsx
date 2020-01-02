import { createGlobalStyle } from 'styled-components'
import theme from '../../config/theme'
import tw from 'tailwind.macro'
import Preflight from './Preflight'
import 'typeface-fira-sans'
import 'typeface-orbitron'

const GlobalStyle = createGlobalStyle`
html {
  min-height: 100%;
  overflow-y: auto;
}
${Preflight}
h1, .h1 {
  ${tw`text-4xl`}
}
h2, .h2 {
  ${tw`text-3xl`}
}
h3, .h3 {
  ${tw`text-2xl`}
}
h4, .h4 {
  ${tw`text-xl`}
}
h5, .h5 {
  ${tw`text-lg`}
}
h6, .h6 {
  ${tw`text-base`}
}
svg path {
  fill: ${theme.colors.primary}
}
h1,h2,h3,h4,h5,h6 {
  font-family: ${theme.fontFamily.heading};
  font-weight: ${theme.fontFamily.headingWeight};
}

*::selection {
  background-color: ${theme.colors.primary};
  color: ${theme.colors.bg};
}
a:hover {
  transition: all ${theme.transitions.normal}
}
a, button {
  transition: all ${props => props.theme.transitions.normal};
  color: ${theme.colors.primary};
}
`
export default GlobalStyle
