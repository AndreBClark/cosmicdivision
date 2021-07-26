import tw from 'twin.macro'

export const TextInput = tw.input`
  w-full block p-2 text-sea-uno-100 bg-sea-deep-700 border-2 border-gray-600 rounded-lg
  hocus:(bg-sea-deep-700 text-sea-deep border-primary)
`

export const Label = tw.label`
  block my-2
`

export const DualWrapper = tw.div`
  flex md:(justify-center)
`
