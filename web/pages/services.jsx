import { addApolloState, initializeApollo } from '../data/apollo'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Grid from '../components/Grid'
import Split from '../components/Split'
import HypeStrip from '../components/HypeStrip'
import Pricing from '../components/Pricing'
import { indexPageQuery } from '../data/queries'

const Index = ({ data }) => {
  const { allPost, allProject } = data
  // return (
  //   <Layout>
  //     <Hero tight title="Services" />
  //     <Split heading="How can I help?">
  //       <p>
  //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
  //         magni sunt rerum odio eos est odit voluptates! Sunt in, suscipit,
  //         alias eos accusantium vel quia officia ipsa nemo exercitationem
  //         asperiores!
  //       </p>
  //       <p>
  //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
  //         magni sunt rerum odio eos est odit voluptates! Sunt in, suscipit,
  //         alias eos accusantium vel quia officia ipsa nemo exercitationem
  //         asperiores!
  //       </p>
  //     </Split>

  //     <Pricing />
  //     <HypeStrip />
  //   </Layout>
  // )
  return null
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
