export default function (req, res) {
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 587,
    host: 'smtp.ionos.co.uk',
    auth: {
      user: 'hello@homewithbeth.co.uk',
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailData = {
    from: `hello@homewithbeth.co.uk`,
    to: 'hello@homewithbeth.co.uk',
    replyTo: `${req.body.email}`,
    subject: `Contact form enquiry from ${req.body.name}`,
    html: `<div>You have a new contact form enquiry:<br /><hr />Name: ${req.body.name}<br />Email: ${req.body.email}<br />Subject: ${req.body.product}<br />Message: ${req.body.message}</div>`,
  }

  transporter.sendMail(mailData, function (err) {
    if (err) {
      console.log(err)
      res.statusCode = 500
      res.end()
    } else {
      res.statusCode = 200
      res.end()
    }
  })
}
