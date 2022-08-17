import { addApolloState, initializeApollo } from '../../data/apollo'
import client from '../../client'
import { PortableText } from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'
import Layout from '../../components/Layout'
import Heading from '../../components/Heading'
import Share from '../../components/Share'
import Grid from '../../components/Grid'
import ErrorComponent from '../../components/Error'
import { indexPageQuery, blogPageQuery } from '../../data/queries'
import { format } from 'date-fns'
import Avatar from '../../components/Avatar'
import Container from '../../components/Container'
import Image from 'next/image'
import ptComponents from '../../components/ptComponents'
// import readingTime from 'reading-time'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const Post = (props) => {
  const { title, bodyRaw = [], slug, mainImage, morePosts, publishedAt } = props
  if (!title || !bodyRaw) return <ErrorComponent />
  // const time = readingTime(JSON.stringify(bodyRaw)).minutes
  return (
    <Layout navigationBackground="white">
      <Container size="narrow">
        <div className="mb-2 font-alt text-lg">
          <span>By Beth Hastings</span>
          <Avatar />
          <span className="px-2">|</span>
          <time className="ml-1">
            {format(new Date(publishedAt), 'do MMMM yyyy')}
          </time>
          {/* <span className="px-2">|</span> */}
          {/* <span>{Math.ceil(time)} mins</span> */}
        </div>
        <Heading>{title}</Heading>
        <div className="mt-4 lg:mt-8">
          <Image
            placeholder="blur"
            blurDataURL={urlFor(mainImage.asset.url)
              .width(1600)
              .height(900)
              .toString()}
            src={urlFor(mainImage.asset.url).width(1600).height(900).toString()}
            width={1600}
            height={900}
            sizes="(max-width:900px) calc(100vw - 32px), 832px"
          />
        </div>
        <div className="prose !mt-[30px] max-w-none font-body">
          <PortableText value={bodyRaw} components={ptComponents} />
        </div>
      </Container>
      <Share url={slug.current} />
      <hr />
      <Grid title="Latest posts" items={morePosts} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: blogPageQuery,
    variables: { slug: { current: { eq: context.params.slug } } },
  })

  const morePosts = await apolloClient.query({
    query: indexPageQuery,
  })

  const documentProps = addApolloState(apolloClient, {
    props: { ...data.allPost[0], morePosts: morePosts.data.allPost },
  })
  return { props: { ...documentProps.props } }
}

export default Post
