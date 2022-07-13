import { addApolloState, initializeApollo } from '../data/apollo'
import Layout from '../components/Layout'
// import Heading from '../components/Heading'
import Hero from '../components/Hero'
import { projectLandingPageQuery } from '../data/queries'
import HypeStrip from '../components/HypeStrip'
import Grid from '../components/Grid'

const ProjectLandingPage = ({ data }) => {
  const { allProject } = data
  return (
    <Layout
      hero={<Hero title="Projects" short />}
      darkNavigation
      overlayedNavigation
    >
      <Grid variant="cover" items={allProject} />
    </Layout>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: projectLandingPageQuery,
  })
  const documentProps = addApolloState(apolloClient, {
    props: { data },
  })
  return { props: { ...documentProps.props } }
}

export default ProjectLandingPage
