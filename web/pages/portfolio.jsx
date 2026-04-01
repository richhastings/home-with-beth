import { addApolloState, initializeApollo } from '../data/apollo'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Heading from '../components/Heading'
import Container from '../components/Container'
import Pricing from '../components/Pricing'
import { allServicesQuery } from '../data/queries'
import { PortableText } from '@portabletext/react'
import { NextSeo } from 'next-seo'

const Index = ({ data }) => {
  const { allService, allAdditionalService, allLockup } = data
  return (
    <>
      <NextSeo title="Home with Beth | Portfolio" />
      <Layout hero={<Hero short title="Portfolio" />}>
        <Container size="narrow">
          <div className="prose mt-4 max-w-none font-body">
            {/* {JSON.stringify(allLockup[0].descriptionRaw)} */}
            {/* <PortableText value={allLockup[0].descriptionRaw} /> */}
            <p>Coming soon...</p>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: allServicesQuery,
    variables: { key: { eq: 'services' } },
  })

  const documentProps = addApolloState(apolloClient, {
    props: { data },
  })
  return { props: { ...documentProps.props } }
}

export default Index
