import { createGlobalStyle } from "styled-components"
import theme from "../../config/theme"

const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}
body {
  font-family: ${theme.fontFamily.sans};
  background-color: ${theme.colors.bg};
  box-sizing: border-box;
  margin: 0;
  font-size: ${theme.baseFontSize};
  line-height:1.6;
}
* {
  box-sizing: inherit;
}

*::selection {
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.bg};
}
`
export default GlobalStyle
