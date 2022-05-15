import Link from 'next/link'
import groq from 'groq'
import client from '../client'

const Index = ({ posts }) => {
  return (
    <div className="bg-champagne flex min-h-screen flex-wrap items-center justify-center">
      <div className="text-center">
        <h1 className="w-full font-display text-8xl">Home with Beth</h1>
        <p className="font-body">Coming Summer 2022</p>
      </div>
      {/* {posts.length > 0 && posts.map(
          ({ _id, title = '', slug = '', publishedAt = '' }) =>
            slug && (
              <li key={_id}>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  <a>{title}</a>
                </Link>{' '}
              </li>
            )
        )} */}
    </div>
  )
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post"] | order(publishedAt desc)
    `)
  return {
    props: {
      posts,
    },
  }
}

export default Index
