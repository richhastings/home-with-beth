import Link from 'next/link'
import groq from 'groq'
import client from '../client'

const Index = ({posts}) => {
    return (
      <div>
        <h1 className="text-3xl font-bold underline">Home with Beth</h1>
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
        posts
      }
    }
}

export default Index