const SuccessMessage = ({ data }) => (
  <div className="min-h-[200px] text-center">
    <div className="prose mt-4 max-w-none font-body">
      <p>Thank you for contacting me, I'll be in touch soon!</p>
      <p>
        <strong>Name</strong> <br />
        {data?.name}
      </p>
      <p>
        <strong>Email</strong> <br />
        {data?.email}
      </p>
      <p>
        <strong>Product</strong> <br />
        {data?.product}
      </p>
      <p>
        <strong>Message</strong> <br />
        {data?.message}
      </p>
    </div>
  </div>
)

export default SuccessMessage
