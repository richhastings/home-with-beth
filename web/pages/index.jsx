import { addApolloState, initializeApollo } from '../data/apollo'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Grid from '../components/Grid'
import Split from '../components/Split'
import { indexPageQuery } from '../data/queries'
import { PortableText } from '@portabletext/react'

const Index = ({ data }) => {
  const { allPost, allProject, allLockup } = data
  return (
    <Layout
      hero={
        <Hero
          title="Home with Beth"
          subtitle="​Interior styling and design"
          imgUrl="/images/hero.jpg"
        />
      }
      overlayedNavigation
    >
      <Split
        heading={allLockup[0].title}
        ctaUrl="/services"
        ctaText="View all services"
      >
        <PortableText value={allLockup[0].descriptionRaw} />
      </Split>
      <hr />
      <Grid
        columns="2"
        variant="cover"
        title="Latest projects"
        items={allProject}
        ctaText="View all projects"
        ctaUrl="/projects"
      />
      <hr />
      <Grid
        title="Latest posts"
        items={allPost}
        ctaText="View all posts"
        ctaUrl="/blog"
      />
      {/* <Holding /> */}
    </Layout>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: indexPageQuery,
    variables: { key: { eq: 'home' } },
  })

  const documentProps = addApolloState(apolloClient, {
    props: { data },
  })
  return { props: { ...documentProps.props } }
}

export default Index
