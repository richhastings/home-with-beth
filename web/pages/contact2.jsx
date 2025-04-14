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
import { useState } from 'react'

import { Formik, Form } from 'formik'
import * as Yup from 'yup'

const Index = ({ data }) => {
  const { allLockup } = data

  const [submitted, setSubmitted] = useState(false)
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    product: '',
    message: '',
  })

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    product: Yup.string().required('Required'),
    message: Yup.string().required('Required'),
  })

  return (
    <>
      <NextSeo title="Home with Beth | Contact" />
      <Layout hero={<Hero title={submitted ? 'Thank you' : 'Contact'} short />}>
        <Container size="narrow">
          {submitted ? (
            <div className="min-h-[200px] text-center">
              <div className="prose mt-4 max-w-none font-body">
                <p>Thank you for contacting me, I'll be in touch soon!</p>
                <p>
                  <strong>Name</strong> <br />
                  {contactFormData?.name}
                </p>
                <p>
                  <strong>Email</strong> <br />
                  {contactFormData?.email}
                </p>
                <p>
                  <strong>Product</strong> <br />
                  {contactFormData?.product}
                </p>
                <p>
                  <strong>Message</strong> <br />
                  {contactFormData?.message}
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center">
                <Heading>{allLockup[0].title}</Heading>
                <div className="prose mt-4 max-w-none font-body">
                  <PortableText value={allLockup[0].descriptionRaw} />
                </div>
              </div>
              <div>
                <div className="mt-12">
                  <Formik
                    initialValues={{
                      name: '',
                      email: '',
                      product: 'Inspire me!',
                      message: '',
                    }}
                    validationSchema={ContactFormSchema}
                    onSubmit={async (values) => {
                      const response = await fetch('/api/email', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(values),
                      })
                      if (response.status === 200) {
                        setSubmitted(true)
                        setContactFormData(values)
                      }
                    }}
                  >
                    {({ errors, values }) => (
                      <Form>
                        <div className="my-4 grid grid-cols-3 gap-4">
                          <Field name="name" label="First name" />
                          <Field
                            type="email"
                            name="email"
                            label="Email address"
                          />
                          <Field type="select" name="product" label="Enquiry" />
                          <Field
                            type="textarea"
                            name="message"
                            label="Message"
                          />
                        </div>

                        <p className="mb-4 font-body text-[#f00]">
                          {Object.keys(errors).length !== 0 &&
                            `Please fill in the following fields: ${Object.keys(
                              errors
                            )}`}
                        </p>
                        <Button>Send Message</Button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </>
          )}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
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
