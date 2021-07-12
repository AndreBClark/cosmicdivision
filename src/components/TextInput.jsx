import tw, { styled } from 'twin.macro'
import { rhythm } from '../../config/typography'
import { breakpoints } from '../../config/theme'

export const TextInput = styled.input`
  ${tw`block p-2 text-white bg-gray-300 border-2 border-gray-300 rounded-lg w-72`};
  :hover,
  :focus {
    ${tw`bg-gray-600 border-primary`}
  }
`
export const Label = styled.label`
  ${tw`block my-2`}
`
export const DualWrapper = styled.div`
  margin-top: ${rhythm(1)};
  margin-bottom: ${rhythm(1)};
  @media screen and (min-width: ${breakpoints.tablet}) {
    * + * {
      margin: ${rhythm(2 / 3)};
    }
  }
`
