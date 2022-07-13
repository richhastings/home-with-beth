import { addApolloState, initializeApollo } from '../data/apollo'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Heading from '../components/Heading'
import Split from '../components/Split'
import Container from '../components/Container'
import Pricing from '../components/Pricing'
import { allServicesQuery } from '../data/queries'
import { PortableText } from '@portabletext/react'

const Index = ({ data }) => {
  const { allService, allAdditionalService, allLockup } = data
  return (
    <Layout
      hero={<Hero short title="Services" />}
      darkNavigation
      overlayedNavigation
    >
      <div className="text-center">
        <Container size="narrow">
          <Heading>{allLockup[0].title}</Heading>
          <div className="prose mt-5 max-w-none font-body">
            <PortableText value={allLockup[0].descriptionRaw} />
          </div>
        </Container>
      </div>

      <Pricing
        services={allService}
        additionalServices={allAdditionalService}
      />
    </Layout>
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
