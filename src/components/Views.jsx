import React from 'react'
import tw from 'twin.macro'

import MastHead from 'components/MastHead'

export const ViewContent = ({children,  ...props }) => (
  <>
    <MastHead {...props} />
    <PageContainer>{children}</PageContainer>
  </>
)

export const ViewFull = ({ children, ...props }) => (
  <>
    <MastHead {...props} />
    <View tw="h-full">{children}</View>
  </>
)

export const View = tw.div`flex flex-col`

const PageContainer = tw(View)`max-w-5xl mx-auto h-full`