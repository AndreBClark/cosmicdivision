import tw from 'twin.macro'

export const Btn = tw.button`
  block p-2 m-2 mb-4
  md:(px-20 m-4)
  font-heading font-bold tracking-widest uppercase
  text-gray bg-primary border-primary
  border-2 rounded-lg
  hover:(text-primary bg-transparent cursor-pointer)
`
export const BtnOutline = tw(Btn)`
  bg-transparent text-primary border-primary
  hover:(text-gray-700 bg-primary) 
  active:(text-gray-700 bg-primary) 
`

export const BtnSimple = tw(Btn)`
  bg-transparent text-primary border-transparent
  hover:(border-primary)
`

export const SmBtn = tw(Btn)`text-xs`

export const SmBtnOutline = tw(BtnOutline)`text-xs`
