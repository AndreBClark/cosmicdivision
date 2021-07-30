import React from 'react'
import 'twin.macro'

import MastHead from 'components/MastHead'

export const PageContained = ({ ...props }) => (
  <>
    <MastHead {...props} />
    <PageContainer>{props.children}</PageContainer>
  </>
)

export const PageFullWidth = ({ ...props }) => (
  <>
    <MastHead {...props} />
    <div tw="h-full">
      {props.children}
    </div>
  </>
)

const PageContainer = ({ children }) => (
  <div tw="max-w-5xl mx-auto h-full">{children}</div>
)
