import { gql } from '@apollo/client'
import { addApolloState, initializeApollo } from '../../data/apollo'
import client from '../../client'
import { PortableText } from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'
import Layout from '../../components/Layout'
import { allPostsQuery, blogPageQuery } from '../../data/queries'

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
  const { title = 'Missing title', categories = [], body = [] } = props
  // return (
  //   <Layout>
  //     <article>
  //       <p>{title}</p>
  //       <div>
  //         {categories &&
  //           categories.length &&
  //           categories.map((category) => category)}
  //       </div>
  //       <PortableText value={body} components={ptComponents} />
  //     </article>
  //   </Layout>
  // )
  return null
}

export async function getStaticProps(context) {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: blogPageQuery,
    variables: { slug: { current: { eq: context.params.slug } } },
  })

  const documentProps = addApolloState(apolloClient, {
    props: { ...data.allPost[0] },
  })
  return { props: { ...documentProps.props } }
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo()

  const posts = await apolloClient.query({
    query: allPostsQuery,
    variables: {},
  })

  const paths = posts.data.allPost.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return {
    paths,
    fallback: true,
  }
}

export default Post