import tw from 'twin.macro'

export const TextInput = tw.input`
  w-full block p-2 text-gray-50 bg-gray border-2 border-gray-600 rounded-lg
  hocus:(bg-gray-400 text-gray-700 border-primary)
`


export const Label = tw.label`
  block my-2
`


export const DualWrapper = tw.div`
  flex md:(justify-center)
`
