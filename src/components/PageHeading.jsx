import styled from 'styled-components'

const PageHeading = styled.h1`
  margin: calc(4 * ${props => props.theme.spacer});
  max-width: ${props => props.theme.maxWidth};
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin: ${props => props.theme.spacer};
  }
`

export default PageHeading
