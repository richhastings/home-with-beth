import '../styles/global.css'

import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../data/apollo'

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
