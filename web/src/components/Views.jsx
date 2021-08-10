import React from 'react'
import tw from 'twin.macro'

import MastHead from 'components/MastHead'

export const PageView = ({ children, fullScreen, ...props }) => (
  <>
    <MastHead {...props} />
    <View css={fullScreen ? fullScreenStyle : constrainedStyle}>
      {children}
    </View>
  </>
)
export const View = tw.div`flex flex-col`
const fullScreenStyle = tw`h-full overflow-hidden`

const constrainedStyle = tw`max-w-5xl mx-auto h-full`
