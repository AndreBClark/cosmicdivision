import React from 'react'
import 'twin.macro'

import Navbar from './Navbar'
import Footer from './Footer'

const Base = ({ children }) => (
  <div tw="min-h-screen m-0 overflow-x-hidden flex flex-col bg-sea-deep">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Base
