import React from 'react';
import 'twin.macro'

import MastHead from 'components/MastHead'


export const PageContained = ({...props }) => (
  <>
    <MastHead {...props} />
    <PageContainer>
      {props.children}
    </PageContainer>
  </>
)


export const PageFullWidth = ({ ...props }) => (
  <>
    <MastHead {...props} />
    {props.children}
  </>
)

const PageContainer = ({ children }) => (
  <div tw="max-w-7xl mx-auto h-full">
    {children}
  </div>
)