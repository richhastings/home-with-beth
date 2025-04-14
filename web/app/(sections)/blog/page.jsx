import Container from '../../../components/Container'
import Grid from '../../../components/Grid'
import Hero from '../../../components/Hero'
import HypeStrip from '../../../components/HypeStrip'
import { getAllPosts, getPage } from '../../../lib/api'

const BlogPage = async () => {
  const posts = await getAllPosts(12)
  const page = await getPage('blog')
  return (
    <>
      <Hero short title={page?.title} />
      <Container>
        <Grid className="my-16" items={posts}></Grid>
      </Container>
      <HypeStrip
        title={page?.hypeStripTitle}
        buttonLabel={page?.hypeStripButtonLabel}
        buttonUrl={page?.hypeStripButtonUrl}
      />
    </>
  )
}

export default BlogPage
