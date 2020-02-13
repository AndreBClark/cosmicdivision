import styled from 'styled-components'

const Panel = styled.section`
  background-color: ${props => props.theme.colors.overlay.middle};
  padding: 4vmin;
  margin: ${props => props.theme.spacer};
  border-left: solid
    ${props => [props.theme.stroke, props.theme.colors.primary]};
  ul {
    margin-left: 1.5rem;
  }
  @media screen and (min-width: 760px) {
    border-radius: ${props => props.theme.radius};
    padding: 4vmin 6vmin;
  }
`

export default Panel
