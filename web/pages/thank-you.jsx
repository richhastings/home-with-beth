import { addApolloState, initializeApollo } from '../data/apollo'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { contactPageQuery } from '../data/queries'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import classNames from 'classnames'

const Index = ({ data }) => {
  const [agreed, setAgreed] = useState(false)
  return (
    <Layout>
      <Hero title="Thank you" tight />
      <div className="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="relative mx-auto max-w-3xl">
          <div className="prose max-w-none font-body">
            Thank you for contacting me.
          </div>
          <a
            href="/"
            className="border-transparent hover:bg-indigo-700 focus:ring-indigo-500 mt-8 inline-flex w-full items-center justify-center rounded-md border bg-green px-6 py-3 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Go to the homepage
          </a>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: contactPageQuery,
  })
  const documentProps = addApolloState(apolloClient, {
    props: { data },
  })
  return { props: { ...documentProps.props } }
}

export default Index
