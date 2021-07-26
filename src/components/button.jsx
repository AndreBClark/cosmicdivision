import tw from 'twin.macro'

export const Btn = tw.button`
  block p-2 m-2 mb-4
  md:(px-20 m-4)
  font-heading font-bold tracking-widest uppercase
  text-gray bg-sea-duo-100 border-primary
  border-2 rounded-lg
  hover:(text-sea-duo-100 bg-transparent cursor-pointer)
`
export const BtnOutline = tw(Btn)`
  bg-transparent text-sea-duo-100 border-primary
  hover:(text-sea-deep bg-sea-duo-100) 
  active:(text-sea-deep bg-sea-duo-100) 
`

export const BtnSimple = tw(Btn)`
  bg-transparent text-sea-duo-100 border-transparent
  hover:(border-primary)
`

export const SmBtn = tw(Btn)`text-xs`

export const SmBtnOutline = tw(BtnOutline)`text-xs`
