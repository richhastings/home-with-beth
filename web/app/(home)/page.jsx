import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import Grid from '../../components/Grid'
import Split from '../../components/Split'
import Image from 'next/image'
import Button from '../../components/Button'
import QuotesCarousel from '../../components/QuotesCarousel'
import { getPage, getAllPosts, getAllQuotes } from '../../lib/api'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import HypeStrip from '../../components/HypeStrip'
import Container from '../../components/Container'
import Stack from '../../components/Stack'

const Index = async () => {
  const page = await getPage('/')
  const posts = await getAllPosts(9)
  const quotes = await getAllQuotes(5)

  return (
    <>
      <Hero title={page.title} subtitle={page.strapline} imgKey="hero" />
      <Container>
        <Stack divided>
          <Split
            heading={page.subtitle}
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
            {documentToReactComponents(page?.description?.json, {})}
          </Split>
          <Split
            heading={page.additionalSubtitle}
            ctaUrl={page.additionalButtonUrl}
            ctaText={page.additionalButtonLabel}
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
            {documentToReactComponents(page?.additionalDescription?.json, {})}
          </Split>
          <Grid
            title="Latest posts"
            items={posts}
            ctaText="View all posts"
            ctaUrl="/blog"
          />
          <QuotesCarousel items={quotes} />
        </Stack>
      </Container>
      <HypeStrip
        title={page.hypeStripTitle}
        buttonLabel={page.hypeStripButtonLabel}
        buttonUrl={page.hypeStripButtonUrl}
      />
      {/* <Insta /> */}
    </>
  )
}

// export async function getStaticProps() {
//   const apolloClient = initializeApollo()
//   const { data } = await apolloClient.query({
//     query: indexPageQuery,
//     variables: { key: { eq: 'home' } },
//   })

//   const about = await apolloClient.query({
//     query: indexPageQuery2,
//     variables: { key: { eq: 'about' } },
//   })

//   const documentProps = addApolloState(apolloClient, {
//     props: { data, about },
//   })
//   return { props: { ...documentProps.props } }
// }

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
