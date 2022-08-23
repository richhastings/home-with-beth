import { addApolloState, initializeApollo } from '../data/apollo'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { allTestimonialsQuery } from '../data/queries'
import { NextSeo } from 'next-seo'
import { Quote } from '../components/QuotesCarousel'

const Index = ({ data }) => {
  const { allTestimonial } = data
  return (
    <>
      <NextSeo title="Home with Beth | Testimonials" />
      <Layout hero={<Hero short title="Testimonials" />}>
        {allTestimonial.map(({ name, location, body }, i) => {
          return (
            <>
              <div className="w-full">
                <div className="mx-auto w-full max-w-3xl">
                  <p className="prose mb-2 max-w-none font-body">{body}</p>
                  <p className="font-alt">
                    {name}, {location}
                  </p>
                </div>
              </div>
              {i !== allTestimonial.length - 1 && (
                <hr className="mx-auto w-full max-w-3xl" />
              )}
            </>
          )
        })}
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: allTestimonialsQuery,
  })

  const documentProps = addApolloState(apolloClient, {
    props: { data },
  })
  return { props: { ...documentProps.props } }
}

export default Index
