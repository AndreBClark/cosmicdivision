import React from 'react'
import { Figure } from './Figure'
import Code from './code'

const serializers = {
  types: {
    /* eslint-disable-next-line react/display-name */
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    code: Code,
  },
}

export default serializers
