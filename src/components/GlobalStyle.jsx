import { createGlobalStyle } from 'styled-components'
import theme from '../../config/theme'
import tw from 'tailwind.macro'
import 'typeface-fira-sans'
import 'typeface-orbitron'
import '../styles/entry.scss'

const GlobalStyle = createGlobalStyle`
svg path {
  fill: ${tw`text-primary`}
}


*::selection {
  background-color: ${theme.colors.primary};
  color: ${tw`text-gray-500`};
}
a, button {
  transition: all ${props => props.theme.transitions.normal};
  color: ${theme.colors.primary};
}
`
export default GlobalStyle
