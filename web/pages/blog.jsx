import { addApolloState, initializeApollo } from '../data/apollo'
import Layout from '../components/Layout'
import { blogLandingPageQuery } from '../data/queries'
import Hero from '../components/Hero'
import Grid from '../components/Grid'
import HypeStrip from '../components/HypeStrip'

const Index = ({ data }) => {
  const { allPost } = data
  return (
    <Layout hero={<Hero short title="Blog" />}>
      <Grid items={allPost} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: blogLandingPageQuery,
  })
  const documentProps = addApolloState(apolloClient, {
    props: { data },
  })
  return { props: { ...documentProps.props } }
}

export default Index
