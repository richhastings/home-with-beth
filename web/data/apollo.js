import { useMemo } from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import merge from 'deepmerge'
import isEqual from 'lodash.isequal'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'
const isServer = typeof window === 'undefined'
const windowApolloState = !isServer && window.__NEXT_DATA__.apolloState

function createIsomorphLink() {
  const { HttpLink } = require('@apollo/client/link/http')
  return new HttpLink({
    uri: 'https://6mrehaoy.api.sanity.io/v1/graphql/production/default',
    credentials: 'same-origin',
  })
}

function createApolloClient() {
  const defaultOptions = {
    query: {
      fetchPolicy: isServer ? 'no-cache' : 'cache-and-network',
      errorPolicy: 'all',
    },
  }

  return new ApolloClient({
    ssrMode: isServer,
    link: createIsomorphLink(),
    cache: new InMemoryCache().restore(windowApolloState || {}),
    defaultOptions,
  })
}

export function initializeApollo(initialState = null) {
  let apolloClient
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    })

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data)
  }

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(pageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME]
  const store = useMemo(() => initializeApollo(state), [state])
  return store
}

export function addApolloState(client, pageProps) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}
