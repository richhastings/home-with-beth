import { addApolloState, initializeApollo } from '../data/apollo'
import Layout from '../components/Layout'
import { aboutPageQuery } from '../data/queries'
import Hero from '../components/Hero'
import Split from '../components/Split'
import HypeStrip from '../components/HypeStrip'

const Index = ({ data }) => {
  // const { allNavigation, allFooterNavigation } = data
  // return (
  //   <Layout>
  //     <Hero tight title="About" />
  //     <Split heading="Hi, I'm Beth!" imgUrl="/images/beth.jpg">
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
  //     <HypeStrip />
  //   </Layout>
  // )

  return null
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: aboutPageQuery,
  })
  const documentProps = addApolloState(apolloClient, {
    props: { data },
  })
  return { props: { ...documentProps.props } }
}

export default Index
