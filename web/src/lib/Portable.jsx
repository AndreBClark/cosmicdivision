import React from 'react'
import PortableText from '@sanity/block-content-to-react'
import serializers from './serializers'
import clientConfig from '../../client-config'

const PortableBlock = ({ content, ...props }) => (
  <div>
    <PortableText
      // Pass in block content straight from Sanity.io
      blocks={content}
      // Optionally override marks, decorators, blocks, etc. in a flat
      // structure without doing any gymnastics
      serializers={serializers}
      {...clientConfig.sanity}
      {...props}
    />
  </div>
)

export default PortableBlock
