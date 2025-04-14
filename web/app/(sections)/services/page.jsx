import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Container from '../../../components/Container'
import Heading from '../../../components/Heading'
import Hero from '../../../components/Hero'
import HypeStrip from '../../../components/HypeStrip'
import Layout from '../../../components/Layout'
import Pricing from '../../../components/Pricing'
// import Pricing from '../../components/Pricing'
import { getAllServices, getPage } from '../../../lib/api'

const ServicesPage = async () => {
  const page = await getPage('services')
  const services = await getAllServices()
  return (
    <>
      <Hero short title={page?.title} />
      <Container size="narrow" className="px-8 text-center">
        <div className="my-16">
          <Heading>{page?.subtitle}</Heading>
          <div className="prose mt-4 max-w-none font-body">
            {documentToReactComponents(page?.description?.json, {})}
          </div>
        </div>
      </Container>
      <Pricing services={services} />
      <HypeStrip
        title={page?.hypeStripTitle}
        buttonLabel={page?.hypeStripButtonLabel}
        buttonUrl={page?.hypeStripButtonUrl}
      />
    </>
  )
}

export default ServicesPage
