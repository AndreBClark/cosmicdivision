import React from 'react'
import 'twin.macro'

import { Navbar, Footer } from '@/sections'

const Base = ({ children }) => (
  <div tw="min-h-screen m-0 flex flex-col bg-neutral-100">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Base
