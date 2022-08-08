import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US" dir="ltr">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="crossOrigin"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;700&display=swap"
            rel="stylesheet"
          />
          <script
            async
            defer
            src="https://www.googletagmanager.com/gtag/js?id=G-GMD49GJSJK"
          />
          <script
            defer
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-GMD49GJSJK');`,
            }}
          />
          {[16, 32].map((size) => (
            <link
              key={`favicon-${size}`}
              rel="icon"
              type="image/png"
              sizes={`${size}x${size}`}
              href={`/meta/favicon-${size}.png`}
            />
          ))}

          {[256, 192, 144, 96, 72, 48].map((size) => (
            <link
              key={`icon${size}`}
              rel="icon"
              sizes={`${size}x${size}`}
              href={`/meta/icon-${size}.png`}
            />
          ))}

          {[180, 152, 120, 76].map((size) => (
            <link
              key={`appleTouchIcon${size}`}
              rel="apple-touch-icon"
              sizes={`${size}x${size}`}
              href={`/meta/apple-touch-icon-${size}.png`}
            />
          ))}
        </Head>
        <body>
          <Main id="main" />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
