import { addApolloState, initializeApollo } from '../data/apollo'
import Layout from '../components/Layout'
import { aboutPageQuery } from '../data/queries'
import Hero from '../components/Hero'
import Split from '../components/Split'
import { PortableText } from '@portabletext/react'

const Index = ({ data }) => {
  const { allLockup } = data
  return (
    <Layout hero={<Hero short title="About" />}>
      <Split heading={allLockup[0].title} imgUrl="/images/beth.jpg">
        <PortableText value={allLockup[0].descriptionRaw} />
      </Split>
    </Layout>
  )
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: aboutPageQuery,
    variables: { key: { eq: 'about' } },
  })
  const documentProps = addApolloState(apolloClient, {
    props: { data },
  })
  return { props: { ...documentProps.props } }
}

export default Index
