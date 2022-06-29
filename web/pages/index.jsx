import { addApolloState, initializeApollo } from '../data/apollo'
import Layout from '../components/Layout'
// import Hero from '../components/Hero'
// import Grid from '../components/Grid'
// import Split from '../components/Split'
// import Features from '../components/Features'
// import HypeStrip from '../components/HypeStrip'
import Holding from '../components/Holding'
import { indexPageQuery } from '../data/queries'

const Index = ({ data }) => {
  const { allPost, allProject } = data
  return (
    <Layout overlayedNavigation>
      {/* <Hero
        title="Home with Beth"
        subtitle="​Interior styling and design"
        imgUrl="/images/hero.jpg"
      />
      <Split heading="Services" ctaUrl="/services" ctaText="View all services">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
          magni sunt rerum odio eos est odit voluptates! Sunt in, suscipit,
          alias eos accusantium vel quia officia ipsa nemo exercitationem
          asperiores!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
          magni sunt rerum odio eos est odit voluptates! Sunt in, suscipit,
          alias eos accusantium vel quia officia ipsa nemo exercitationem
          asperiores!
        </p>
      </Split>
      <Grid
        columns="2"
        variant="cover"
        title="Latest projects"
        items={allProject}
        ctaText="View all projects"
        ctaUrl="/projects"
      />
      <Grid
        title="Latest posts"
        items={allPost}
        ctaText="View all posts"
        ctaUrl="/blog"
      />
      <HypeStrip /> */}
      <Holding />
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
