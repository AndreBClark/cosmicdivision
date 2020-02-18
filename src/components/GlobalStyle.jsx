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

a, button {
  transition: all ${props => props.theme.transitions.normal};
  color: ${theme.colors.primary};
}
`
export default GlobalStyle
