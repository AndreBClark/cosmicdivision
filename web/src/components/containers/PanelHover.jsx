import tw from 'twin.macro'
import Panel from './Panel'

const PanelHover = tw(Panel)`
  opacity-80 hover:(-translate-y-1 opacity-100)
`

export default PanelHover
