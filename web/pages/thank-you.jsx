import { addApolloState, initializeApollo } from '../data/apollo'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { contactPageQuery } from '../data/queries'
import Button from '../component  s/Button'

const Index = () => {
  return (
    <Layout hero={<Hero title="Thank you" short />} noHype>
      <div className="overflow-hidden bg-white h-full">
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="prose mb-8 max-w-none px-4 font-alt text-3xl">
            Thank you for contacting me, I'll be in touch soon!
          </div>
          <Button href="/">Back to homepage</Button>
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
