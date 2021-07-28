import tw from 'twin.macro'

export const TextInput = tw.input`
  w-full block p-2 text-sea-uno-100 bg-sea-deep border-2 border-sea-deep-700 rounded-lg
  hocus:(bg-sea-deep-700 text-sea-deep border-sea-duo)
`

export const Label = tw.label`
  block my-2
`

export const DualWrapper = tw.div`
  flex md:(justify-center)
`
