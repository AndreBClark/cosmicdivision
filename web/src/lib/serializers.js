import React from 'react'
import { Figure } from '@/utils/Figure'
import { Code, InlineCode } from '@/utils/Code'

const serializers = {
  marks: {
    code: InlineCode,
  },
  types: {
    /* eslint-disable-next-line react/display-name */
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    code: Code,
  },
}

export default serializers