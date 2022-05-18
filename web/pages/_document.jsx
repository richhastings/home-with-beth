import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="crossOrigin"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
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
