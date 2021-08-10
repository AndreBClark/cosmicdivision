import React from 'react'
import PortableText from '@sanity/block-content-to-react'
import serializers from './serializers'
import clientConfig from '../../client-config'
import tw from 'twin.macro'

const PortableBlock = ({ content, ...props }) => (
  <PortableText
    tw="prose prose-xl max-w-none"
    {...clientConfig.sanity}
    {...props}
    // Pass in block content straight from Sanity.io
    blocks={content}
    // Optionally override marks, decorators, blocks, etc. in a flat
    // structure without doing any gymnastics
    serializers={serializers}
  />
)

export default PortableBlock
