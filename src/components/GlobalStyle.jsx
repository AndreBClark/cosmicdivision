import { createGlobalStyle } from 'styled-components'
import theme from '../../config/theme'
import tw from 'twin.macro'

const GlobalStyle = createGlobalStyle`
html, body {
  min-height: 100%;
  overflow-y: auto;
}
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
  fill: ${tw`text-primary`}
}

a, button {
  transition: all ${props => props.theme.transitions.normal};
  color: ${theme.colors.primary};
}
`
export default GlobalStyle
