import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import useSiteMetadata from "../hooks/use-site-metadata"

function SEO({ lang, meta, title }) {
  const {
    title: siteTitle,
    description,
    siteUrl,
    author: siteAuthor,
    seo: { title: seoTitle, description: seoDescription, twitter: seoAuthor },
  } = useSiteMetadata()

  const metaTitle = seoTitle || siteTitle
  const metaDescription = seoDescription || description
  const metaAuthor = seoAuthor || siteAuthor

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${metaTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `${siteUrl}/og-image/index.png`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: metaAuthor,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
