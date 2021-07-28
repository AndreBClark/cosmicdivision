import React from 'react'
import 'twin.macro'

import Navbar from './Navbar'
import Footer from './Footer'

const Base = ({ children }) => (
  <div tw="min-h-screen m-0 overflow-x-hidden flex flex-col bg-neutral-100">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Base
