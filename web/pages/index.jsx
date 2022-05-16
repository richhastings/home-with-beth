import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import Layout from '../components/Layout'

const Index = (props) => {
  return (
    <Layout navItems={[]}>
      <div className="flex min-h-screen flex-wrap items-center justify-center bg-champagne">
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
    </Layout>
  )
}

export default Index
