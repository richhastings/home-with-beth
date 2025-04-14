import { Formik, Form as FormikForm } from 'formik'
import * as Yup from 'yup'
import Button from '../Button'
import Field from '../Field'
import sendMail from '../../lib/email'

const Form = ({ setSubmitted, setContactFormData }) => {
  const ContactFormSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    product: Yup.string().required('Required'),
    message: Yup.string().required('Required'),
  })
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        product: 'Inspire me!',
        message: '',
      }}
      x
      validationSchema={ContactFormSchema}
      onSubmit={async (values) => {
        sendMail(values)
        // if (response.status === 200) {
        setSubmitted(true)
        setContactFormData(values)
        // }
      }}
    >
      {({ errors, values }) => (
        <FormikForm className="my-12 text-left">
          <div className="my-4 grid grid-cols-3 gap-4">
            <Field name="name" label="First name" />
            <Field type="email" name="email" label="Email address" />
            <Field type="select" name="product" label="Enquiry" />
            <Field type="textarea" name="message" label="Message" />
          </div>

          <p className="mb-4 font-body text-[#f00]">
            {Object.keys(errors).length !== 0 &&
              `Please fill in the following fields: ${Object.keys(errors)}`}
          </p>
          <Button onClick={() => sendMail()}>Send Message</Button>
        </FormikForm>
      )}
    </Formik>
  )
}

export default Form
