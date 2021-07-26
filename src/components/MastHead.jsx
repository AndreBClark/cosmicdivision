import tw from 'twin.macro'
import React from 'react'
import Seo from 'components/Seo'

const MastHead = ({
  pagetitle,
  pageKeywords = [`blog`, `gatsby`, `javascript`, `react`],
  pageHeading,
  pageSubtitle,
  pageDate,
  location,
}) => {
  return (
    <>
      <Seo location={location} title={pagetitle} keywords={pageKeywords} />
      {pageHeading && <PageHeading>{pageHeading}</PageHeading>}
      <div tw="bg-sea-duo-100 w-full">
        {pageSubtitle && <Subtitle>{pageSubtitle}</Subtitle>}
        {pageDate && <Date>{pageDate}</Date>}
      </div>
    </>
  )
}

const PageHeading = tw.h1`mx-auto px-4 my-8 max-w-5xl`

const Date = tw.p`m-8 max-w-5xl`

const Subtitle = tw.h2`
  mx-auto block max-w-5xl px-8 text-lg font-heading capitalize font-semibold text-gray-800
  lg:(tracking-widest text-2xl px-4)

`

export default MastHead
