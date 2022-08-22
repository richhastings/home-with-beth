import { useState, useEffect } from 'react'
import { addApolloState, initializeApollo } from '../data/apollo'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Grid from '../components/Grid'
import Split from '../components/Split'
import Holding, { launchDate } from '../components/Holding'
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
  const { allPost, allLockup, allQuote } = data
  const holding = compareAsc(launchDate(), new Date())
  if (holding > 0) return <Holding />

  return (
    <>
      <NextSeo title="Home with Beth" />
      <Layout
        navigationBackground="transparent"
        hero={
          <Hero
            title="Home with Beth"
            subtitle="​Interior styling and design"
            imgUrl="/images/hero.webp"
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
        </Split>
        <hr />
        <Split
          heading={allLockup[0].title}
          ctaUrl="/services"
          ctaText="View all services"
          imgComponent={
            <Image
              placeholder="blur"
              blurDataURL="/images/home-services.webp"
              src="/images/home-services.webp"
              alt="A curated arrangement of decorative items on a tabletop"
              width={1600}
              height={900}
              sizes="(max-width: 768px) calc(100vw - 32px), (max-width:1280px) calc(50vw - 128px), 574px"
            />
          }
        >
          <PortableText value={allLockup[0].descriptionRaw} />
        </Split>

        <hr />

        <Grid
          title="Latest posts"
          items={allPost}
          ctaText="View all posts"
          ctaUrl="/blog"
        />

        <hr />

        <QuotesCarousel items={allQuote} />
        <div className="text-center">
          <Button href="/testimonials">View all testimonials</Button>
        </div>
        {/* <Insta /> */}
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

// const Insta = () => {
//   const [feeds, setFeedsData] = useState([])
//   useEffect(() => {
//     // this is to avoid memory leaks
//     const abortController = new AbortController()

//     const token = IN NOTES
//

//     async function fetchInstagramPost() {
//       try {
//         axios
//           .get(
//             `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${12}&access_token=${token}`
//           )
//           .then((resp) => {
//             setFeedsData(resp.data.data)
//           })
//       } catch (err) {
//         console.log('error', err)
//       }
//     }

//     // manually call the fecth function
//     fetchInstagramPost()

//     return () => {
//       // cancel pending fetch request on component unmount
//       abortController.abort()
//     }
//   })

//   return feeds.map((feed) => <img src={feed.media_url} />)
// }
