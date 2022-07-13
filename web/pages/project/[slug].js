// import { gql } from '@apollo/client'
import { addApolloState, initializeApollo } from '../../data/apollo'
import client from '../../client'
import { PortableText } from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import { allProjectsQuery, projectPageQuery } from '../../data/queries'
import Hero from '../../components/Hero'
import Image from 'next/image'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)

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
        <div className="image my-8">
          <Image
            width={16}
            height={9}
            alt={value.alt}
            src={urlFor(value).width(1920).height(1080).url()}
            sizes={`(max-width: ${fullConfig.theme.screens.md}) calc(100vw - 32px), ${fullConfig.theme.maxWidth['3xl']}`}
          />
          {/* <img src={urlFor(value).width(1920).height(1080).url()} /> */}
        </div>
      )
    },
  },
}

const Project = (props) => {
  const { title = 'Missing title', bodyRaw = [], mainImage } = props

  return (
    <Layout
      hero={<Hero short imgUrl={mainImage.asset.url} title={title} />}
      size="narrow"
      overlayedNavigation
    >
      {/* <div>
          {categories &&
            categories.length &&
            categories.map((category) => category)}
        </div> */}
      {/* <<div className="prose mx-auto max-w-3xl px-4 py-8 font-body lg:py-16">> */}
      <div className="prose max-w-none font-body">
        <PortableText value={bodyRaw} components={ptComponents} />
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: projectPageQuery,
    variables: { slug: { current: { eq: context.params.slug } } },
  })

  const documentProps = addApolloState(apolloClient, {
    props: { ...data.allProject[0] },
  })
  return { props: { ...documentProps.props } }
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo()

  const projects = await apolloClient.query({
    query: allProjectsQuery,
    variables: {},
  })

  const paths = projects.data.allProject.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return {
    paths,
    fallback: true,
  }
}

export default Project
