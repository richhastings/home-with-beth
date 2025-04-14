export default () => (
  <head>
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
  </head>
)
