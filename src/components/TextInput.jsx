import tw from 'twin.macro'

export const TextInput = tw.input`
  w-full block p-2 text-primary-100  bg-neutral-100 border-2 border-neutral-400 rounded-lg
  hocus:(bg-neutral-400 text-neutral-100 border-secondary-100)
`

export const Label = tw.label`
  block my-2
`

export const DualWrapper = tw.div`
  flex md:(justify-center)
`
