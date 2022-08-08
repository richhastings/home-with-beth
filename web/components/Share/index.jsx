import Button from '../Button'
import { useState } from 'react'
import Heading from '../Heading'

const Share = ({ url }) => {
  const formattedUrl = `https://homewithbeth.co.uk/blog/${url}`

  return (
    <div className="text-center">
      <div className="mb-4">
        <Heading size="sm">Share</Heading>
      </div>
      <div className="space-x-4">
        <Button
          target="blank"
          href={`https://www.facebook.com/sharer/sharer.php?&u=
        ${encodeURIComponent(formattedUrl)}`}
        >
          <svg width="24px" viewBox="0 0 24 24">
            <path
              d="M13.72 23V13H17l.55-3.85h-3.83V6.5c0-1.1.27-1.93 1.92-1.93h2.07V1.14c-.28 0-1.52-.14-2.89-.14-3 0-5.09 1.79-5.09 5.22v2.89H6.29V13h3.44v10z"
              fill="#4267B2"
            />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </Button>
        <Button
          href={`https://twitter.com/share?url=
      ${encodeURIComponent(formattedUrl)}`}
        >
          <svg width="24px" viewBox="0 0 24 24">
            <path
              d="M7.92 20.94A12.76 12.76 0 0020.76 8.1v-.59A9.06 9.06 0 0023 5.18a9 9 0 01-2.59.71 4.52 4.52 0 002-2.5 9.18 9.18 0 01-2.86 1.1 4.51 4.51 0 00-7.81 3.08 4.93 4.93 0 00.11 1 12.82 12.82 0 01-9.3-4.71 4.45 4.45 0 00-.61 2.27 4.51 4.51 0 002 3.75 4.45 4.45 0 01-2.05-.56v.06a4.52 4.52 0 003.61 4.45 4.48 4.48 0 01-2 .08A4.5 4.5 0 007.68 17a9 9 0 01-5.6 2A9.51 9.51 0 011 18.91a12.79 12.79 0 006.92 2"
              fill="#1DA1F2"
            />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </Button>
      </div>
    </div>
  )
}

export default Share
