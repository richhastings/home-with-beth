import { useState, useEffect } from 'react'
import { addApolloState, initializeApollo } from '../data/apollo'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Grid from '../components/Grid'
import Split from '../components/Split'
import { indexPageQuery, indexPageQuery2 } from '../data/queries'
import { PortableText } from '@portabletext/react'
// import axios from 'axios'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import compareAsc from 'date-fns/compareAsc'
import QuotesCarousel from '../components/QuotesCarousel'
import ptComponents from '../components/ptComponents'
import Button from '../components/Button'

const Index = ({ data, about }) => {
  const { allLockup } = data
  return (
    <>
      <NextSeo title="Home with Beth" />
      <Layout
        navigationBackground="transparent"
        hero={
          <Hero
            title="Home with Beth"
            subtitle="Content creation for home, lifestyle and motherhood"
            imgKey="hero"
          />
        }
      >
        <Split
          heading={about.data.allLockup[0].title}
          imgComponent={
            <Image
              placeholder="blur"
              blurDataURL="/images/about.webp"
              src="/images/about.webp"
              alt="Beth standing at a front door"
              width={1600}
              height={900}
              sizes="(max-width: 768px) calc(100vw - 32px), (max-width:1280px) calc(50vw - 128px), 574px"
            />
          }
        >
          <PortableText
            value={about.data.allLockup[0].descriptionRaw}
            components={ptComponents}
          />
          <PortableText value={allLockup[0].descriptionRaw} />
        </Split>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: indexPageQuery,
    variables: { key: { eq: 'home' } },
  })

  const about = await apolloClient.query({
    query: indexPageQuery2,
    variables: { key: { eq: 'about' } },
  })

  const documentProps = addApolloState(apolloClient, {
    props: { data, about },
  })
  return { props: { ...documentProps.props } }
}

export default Index
