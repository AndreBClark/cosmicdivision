import React from "react";
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import lagoon from 'styles/lagoon.js'
export default function Code ({ node }) {
  if (!node || !node.code) { return null }
  const {language, code} = node 
  return (
    <SyntaxHighlighter
      style={lagoon}
      language={language || 'text'}>
      {code}
    </SyntaxHighlighter>
  )
}