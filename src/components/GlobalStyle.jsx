import { createGlobalStyle } from "styled-components"
import theme from "../../config/theme"
import Preflight from "./Preflight"

const GlobalStyle = createGlobalStyle`
html {
  min-height: 100%;
${Preflight}
}
body {
  font-family: ${theme.fontFamily.sans};
  background-color: ${theme.colors.bg};
  box-sizing: border-box;
  margin: 0;
  font-size: ${theme.baseFontSize};
  line-height:1.6;
}
h1,h2,h3,h4,h5,h6 {
  font-family: ${theme.fontFamily.heading};
  font-weight: ${theme.fontFamily.headingWeight};
}

*::selection {
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.bg};
}

a, button {
  transition: all ${props => props.theme.transitions.normal};
}
`
export default GlobalStyle