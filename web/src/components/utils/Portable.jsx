import React from 'react'
import PortableText from '@sanity/block-content-to-react'
import serializers from 'lib/serializers'
import clientConfig from '../../../client-config'
import tw from 'twin.macro'

const Block = tw(PortableText)`prose prose-xl max-w-none`

const PortableBlock = ({ content, ...props }) => (
  <Block
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
