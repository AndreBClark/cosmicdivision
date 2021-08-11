import React from 'react'
import tw from 'twin.macro'
import { Seo } from '@/utils'

const MastHead = ({
  pageKeywords = [`blog`, `gatsby`, `javascript`, `react`],
  pageTitle,
  pageSubtitle,
  pageDate,
  location,
}) => (
  <>
    {pageTitle && (
      <Seo
        location={location}
        title={pageTitle}
        keywords={pageKeywords}
        description={pageSubtitle}
      />
    )}
    {pageTitle && <PageHeading>{pageTitle}</PageHeading>}
    {(pageSubtitle || pageDate) && (
      <div tw="bg-secondary-100  w-full">
        {pageSubtitle && <Subtitle>{pageSubtitle}</Subtitle>}
        {pageDate && <Date>{pageDate}</Date>}
      </div>
    )}
  </>
)

const PageHeading = tw.h1`mx-auto px-4 my-8 max-w-5xl`

const Date = tw.p`m-8 max-w-5xl`

const Subtitle = tw.h2`
  mx-auto block max-w-5xl px-8 py-1 text-lg font-heading capitalize font-semibold text-gray-800
  lg:(tracking-widest text-2xl px-4)

`

export default MastHead
