import { addApolloState, initializeApollo } from '../data/apollo'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '../components/Container'
import Heading from '../components/Heading'
import { contactPageQuery } from '../data/queries'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import classNames from 'classnames'
import { PortableText } from '@portabletext/react'

const Index = ({ data }) => {
  const [agreed, setAgreed] = useState(false)
  const { allLockup } = data
  console.log(data)
  return (
    <Layout
      hero={<Hero title="Contact" short />}
      darkNavigation
      overlayedNavigation
    >
      <Container size="narrow">
        <div className="text-center">
          <Heading>{allLockup[0].title}</Heading>
          <div className="prose mt-5 max-w-none font-body">
            <PortableText value={allLockup[0].descriptionRaw} />
          </div>
        </div>
        <div className="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="relative mx-auto max-w-3xl">
            <div className="prose max-w-none font-body"></div>
            <div className="mt-12">
              <form
                action="/thank-you"
                name="contact"
                method="POST"
                className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label
                    htmlFor="first-name"
                    className="text-gray-700 block text-sm font-medium"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="text-gray-700 block text-sm font-medium"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="text-gray-700 block text-sm font-medium"
                  >
                    Company
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      className="focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="text-gray-700 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="text-gray-700 block text-sm font-medium"
                  >
                    Phone Number
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <input
                      type="text"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      className="focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 block w-full rounded-md py-3 px-4"
                      placeholder="+1 (555) 987-6543"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-gray-700 block text-sm font-medium"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 block w-full rounded-md border py-3 px-4 shadow-sm"
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Switch
                        checked={agreed}
                        onChange={setAgreed}
                        className={classNames(
                          agreed ? 'bg-green' : 'bg-[#ddd]',
                          'border-transparent focus:ring-indigo-500 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2'
                        )}
                      >
                        <span className="sr-only">Agree to policies</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            agreed ? 'translate-x-5' : 'translate-x-0',
                            'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                          )}
                        />
                      </Switch>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-500 text-base">
                        By selecting this, you agree to the{' '}
                        <a
                          href="#"
                          className="text-gray-700 font-medium underline"
                        >
                          Privacy Policy
                        </a>{' '}
                        and{' '}
                        <a
                          href="#"
                          className="text-gray-700 font-medium underline"
                        >
                          Cookie Policy
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="border-transparent hover:bg-indigo-700 focus:ring-indigo-500 bg-green inline-flex w-full items-center justify-center rounded-md border px-6 py-3 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    Let's talk
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
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
