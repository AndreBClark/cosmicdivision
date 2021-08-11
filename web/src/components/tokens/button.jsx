import tw from 'twin.macro'

export const Btn = tw.button`
  block p-2 m-2
  md:(px-20 m-4)
  font-heading font-bold tracking-widest uppercase
  text-neutral-100 bg-secondary-100  border-secondary-100
  border-2 rounded-lg
  hover:(text-secondary-100  bg-transparent cursor-pointer)
`
export const BtnOutline = tw(Btn)`
  bg-transparent text-secondary-100  border-secondary-100
  hover:(text-neutral-100 bg-secondary-100 ) 
  active:(text-neutral-100 bg-secondary-100 ) 
`

export const BtnSimple = tw(Btn)`
  bg-transparent text-secondary-100  border-transparent
  hover:(border-secondary-100)
`

export const SmBtn = tw(Btn)`text-xs`

export const SmBtnOutline = tw(BtnOutline)`text-xs`
