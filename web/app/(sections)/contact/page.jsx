import Hero from '../../../components/Hero'
import React from 'react'
import { getPage } from '../../../lib/api'
import Container from '../../../components/Container'
import HypeStrip from '../../../components/HypeStrip'
import ContactForm from '../../../components/ContactForm'
import Heading from '../../../components/Heading'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const ContactPage = async () => {
  // const [submitted, setSubmitted] = useState(false)
  // const [contactFormData, setContactFormData] = useState({
  //   name: '',
  //   email: '',
  //   product: '',
  //   message: '',
  // })

  // const ContactFormSchema = Yup.object().shape({
  //   name: Yup.string().required('Required'),
  //   email: Yup.string().email('Invalid email').required('Required'),
  //   product: Yup.string().required('Required'),
  //   message: Yup.string().required('Required'),
  // })

  const page = await getPage('contact')

  return (
    <>
      <Hero title={page?.title} short />
      <Container size="narrow" className="px-8 text-center">
        <div className="my-16">
          <Heading>{page?.subtitle}</Heading>
          <div className="prose mt-4 max-w-none font-body">
            {documentToReactComponents(page?.description?.json, {})}
          </div>
          <ContactForm />
        </div>
      </Container>
      <HypeStrip
        title={page?.hypeStripTitle}
        buttonLabel={page?.hypeStripButtonLabel}
        buttonUrl={page?.hypeStripButtonUrl}
      />
    </>
  )
}

export default ContactPage
