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

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    },
  },
}

const Post = (props) => {
  const { title, bodyRaw = [], slug, morePosts } = props
  console.log(345, morePosts)
  if (!title || !bodyRaw) return <ErrorComponent />
  return (
    <Layout navigationBackground="white" size="narrow">
      <Heading>{title}</Heading>
      <div className="prose !mt-[30px] max-w-none font-body">
        <PortableText value={bodyRaw} components={ptComponents} />
      </div>
      <Share url={slug.current} />
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
