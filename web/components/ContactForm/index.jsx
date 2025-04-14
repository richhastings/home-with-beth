'use client'

import { useState } from 'react'
import Form from './Form'
import SuccessMessage from './SuccessMessage'

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    product: '',
    message: '',
  })

  if (submitted) return <SuccessMessage data={contactFormData} />

  return (
    <Form setSubmitted={setSubmitted} setContactFormData={setContactFormData} />
  )
}

export default ContactForm
