import Layout from '../../components/Layout'
import Heading from '../../components/Heading'
import Button from '../Button'

const Error = () => {
  return (
    <Layout navigationBackground="white" size="narrow" noHype>
      <div className="text-center">
        <div className="mb-12">
          <Heading>Error! Page not found.</Heading>
        </div>
        <Button href="/">Go back to the homepage</Button>
      </div>
    </Layout>
  )
}

export default Error
