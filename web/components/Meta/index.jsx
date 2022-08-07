import React, { FC } from 'react'

const Meta = ({
  manifestPath = 'manifest.json',
  seoTitle,
  description,
  url,
  imageUrl,
}) => {
  const baseUrl = 'https://homewithbeth.co.uk'

  console.log(111, seoTitle)

  return (
    <>
      <title>{`${seoTitle}`}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={description} />
      <meta name="application-name" content="Home with Beth" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${baseUrl}${url}/`} />
      <meta property="og:site_name" content={`${baseUrl}${url}/`} />
      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />
      <meta property="twitter:url" content={`${baseUrl}${url}/`} />
      <link rel="canonical" href={`${baseUrl}${url}/`} />
      <link rel="manifest" href={manifestPath} />
    </>
  )
}

export default Meta
