import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import useSiteMetaData from 'hooks/useSiteMetaData'

const Seo = ({ description, keywords, title, lang }) => {
  const site = useSiteMetaData()

  const metaDescription = description || site.description

  return (
    <Helmet
      htmlAttributes={{
        lang: site.lange || lang
      }}
      title={title}
      titleTemplate={`${site.title} | %s`}>
      <meta charSet="utf-8" />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={site.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={site.url} />
      <meta name="og:site_name" content={site.title} />
      <meta name="og:locale" content="en_US" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:site" content={site.title} />
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  keywords: [`blog`, `gatsby`, `javascript`, `react`],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
}

export default Seo
