import '../styles/global.css'

import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../data/apollo'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)
  return (
    <ApolloProvider client={apolloClient}>
      <DefaultSeo
        description="Home with Beth. Interior styling and design in the heart of Sherwood Forest in Nottinghamshire, UK."
        canonical="https://www.homewithbeth.co.uk/"
        openGraph={{
          url: 'https://www.homewithbeth.co.uk/',
          title: 'Home with Beth',
          description:
            'Interior styling and design in the heart of Sherwood Forest in Nottinghamshire, UK.',
          images: [
            {
              url: 'https://homewithbeth.co.uk/meta/og.jpg',
              width: 800,
              height: 600,
              alt: 'Home with Beth',
              type: 'image/jpeg',
            },
          ],
          site_name: 'Home with Beth',
          type: 'website',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
