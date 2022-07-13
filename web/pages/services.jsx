import { addApolloState, initializeApollo } from '../data/apollo'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Heading from '../components/Heading'
import Split from '../components/Split'
import Container from '../components/Container'
import Pricing from '../components/Pricing'
import { indexPageQuery } from '../data/queries'

const Index = ({ data }) => {
  const { allPost, allProject } = data
  return (
    <Layout
      hero={<Hero short title="Services" />}
      darkNavigation
      overlayedNavigation
    >
      <div className="text-center">
        <Container size="narrow">
          <Heading>How can I help?</Heading>
          <div className="prose mt-5 max-w-none font-body">
            <p>
              I offer a range of different services to help you with your
              interior projects - from the small to the big time! Whether you
              just need some inspiration, you have a tight budget but big
              ambitions, or you need ideas to change a layout that doesn't work,
              I can help. If there's something you're not sure about,{' '}
              <a href="/contact">please get in touch!</a>
            </p>
          </div>
        </Container>
      </div>

      <Pricing />
    </Layout>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: indexPageQuery,
  })

  const documentProps = addApolloState(apolloClient, {
    props: { data },
  })
  return { props: { ...documentProps.props } }
}

export default Index
