import React from 'react'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import lagoon from 'styles/lagoon.js'
import tw from 'twin.macro'
export function Code({ node }) {
  if (!node || !node.code) {
    return null
  }
  const { language, code } = node
  return (
    <SyntaxHighlighter
      style={lagoon}
      wrapLines={true}
      language={language || 'javascript'}>
      {code}
    </SyntaxHighlighter>
  )
}

export const InlineCode = ({ ...props }) => (
  <LagoonHighlighter
    language="javascript"
    style={lagoon}
    tw="inline font-mono"
    PreTag={InlinePre}
  >
    {props.children}
  </LagoonHighlighter>
)

const InlinePre = tw.pre`(py-1  px-1)!`
const LagoonHighlighter = tw(SyntaxHighlighter)`inline font-mono`