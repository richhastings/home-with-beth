import Stack from '../../../components/Stack'
import Container from '../../../components/Container'
import Hero from '../../../components/Hero'
import { getAllQuotes, getPage } from '../../../lib/api'
import HypeStrip from '../../../components/HypeStrip'

const TestimonialsPage = async () => {
  const quotes = await getAllQuotes(2)
  const page = await getPage('testimonials')
  return (
    <>
      <Hero short title={page?.title} />
      <Container size="narrow">
        <Stack divided>
          {quotes.map(({ longText, author }, i) => (
            <div className="w-full">
              <div className="mx-auto w-full max-w-3xl">
                <p className="prose mb-2 max-w-none font-body">{longText}</p>
                <p className="font-alt">{author}</p>
              </div>
            </div>
          ))}
        </Stack>
      </Container>
      <HypeStrip
        title={page?.hypeStripTitle}
        buttonLabel={page?.hypeStripButtonLabel}
        buttonUrl={page?.hypeStripButtonUrl}
      />
    </>
  )
}

export default TestimonialsPage
