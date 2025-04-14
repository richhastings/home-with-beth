// const sendMail = async (values) => {
//   await fetch('https://api.resend.com/emails', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${process.env.RESEND_KEY}`,
//     },
//     body: JSON.stringify({
//       from: `hello@homewithbeth.co.uk`,
//       to: 'hello@homewithbeth.co.uk',
//       subject: `Contact form enquiry from ${values.name}`,
//       replyTo: `${values.email}`,
//       html: `<div>You have a new contact form enquiry:<br /><hr />Name: ${values.name}<br />Email: ${values.email}<br />Subject: ${values.product}<br />Message: ${values.message}</div>`,
//     }),
//   })
//   console.log('Email sent!')
// }

// export default sendMail

'use server'

import { Resend } from 'resend'

const sendMail = (values) => {
  let key = process.env.RESEND_KEY
  key = 're_PuActCGZ_2umFqRKNMVtXSjazEtDvBLVt'
  const resend = new Resend(key)

  resend.emails.send({
    from: `hello@homewithbeth.co.uk`,
    to: 'hello@homewithbeth.co.uk',
    subject: `Contact form enquiry from ${values.name}`,
    reply_to: `${values.email}`,
    html: `<div>You have a new contact form enquiry:<br /><hr />Name: ${values.name}<br />Email: ${values.email}<br />Subject: ${values.product}<br />Message: ${values.message}</div>`,
  })
}

export default sendMail
