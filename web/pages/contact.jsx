import { addApolloState, initializeApollo } from '../data/apollo'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Button from '../components/Button'
import Field from '../components/Field'
import { contactPageQuery } from '../data/queries'
import { PortableText } from '@portabletext/react'
import { NextSeo } from 'next-seo'
import { NetlifyForm } from 'react-netlify-forms'

const Index = ({ data }) => {
  const { allLockup } = data
  return (
    <>
      <NextSeo title="Home with Beth | Contact" />
      <Layout hero={<Hero title="Contact" short />}>
        <Container size="narrow">
          <div className="text-center">
            <Heading>{allLockup[0].title}</Heading>
            <div className="prose mt-4 max-w-none font-body">
              <PortableText value={allLockup[0].descriptionRaw} />
            </div>
          </div>
          <div>
            <div className="mt-12">
              <NetlifyForm name="enquiry" action="/thank-you">
                {({ handleChange, success, error }) => (
                  <>
                    <Field
                      name="firstname"
                      label="First name"
                      handleChange={handleChange}
                    />
                    <Field
                      name="lastname"
                      label="Last name"
                      handleChange={handleChange}
                    />
                    <Field
                      type="email"
                      name="email"
                      label="Email address"
                      handleChange={handleChange}
                    />
                    <Field
                      type="select"
                      name="product"
                      label="Enquiry"
                      handleChange={handleChange}
                    />
                    <Field
                      type="textarea"
                      name="message"
                      label="Message"
                      handleChange={handleChange}
                    />

                    <div className="col-span-3 text-center">
                      <Button type="submit">Submit</Button>
                    </div>
                  </>
                )}
              </NetlifyForm>
              {/* <form
                action="/thank-you"
                name="enquiry"
                method="POST"
                className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                netlify
              >
                <input type="hidden" name="form-name" value="enquiry" />
                <input
                  type="text"
                  name={'first-name'}
                  id={'last-name'}
                  className="block w-full rounded border-lightgrey p-3 px-4 font-body"
                />
                
              </form> */}
            </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: contactPageQuery,
    variables: { key: { eq: 'contact' } },
  })
  const documentProps = addApolloState(apolloClient, {
    props: { data },
  })
  return { props: { ...documentProps.props } }
}

export default Index
