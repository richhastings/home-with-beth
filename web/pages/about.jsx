import { addApolloState, initializeApollo } from '../data/apollo'
import Layout from '../components/Layout'
import { aboutPageQuery } from '../data/queries'
import Hero from '../components/Hero'
import Split from '../components/Split'
import { PortableText } from '@portabletext/react'
import { NextSeo } from 'next-seo'
import Image from 'next/image'

const Index = ({ data }) => {
  const { allLockup } = data
  return (
    <>
      <NextSeo title="Home with Beth | About" />
      <Layout hero={<Hero short title="About" />}>
        <Split
          heading={allLockup[0].title}
          imgComponent={
            <Image
              placeholder="blur"
              blurDataURL="/images/about.jpg"
              src="/images/about.jpg"
              alt="Headshot of Beth and Nina the greyhound"
              width={1600}
              height={1600}
              sizes="(max-width: 768px) calc(100vw - 32px), (max-width:1280px) calc(50vw - 128px), 574px"
            />
          }
        >
          <PortableText value={allLockup[0].descriptionRaw} />
        </Split>
      </Layout>
    </>
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
