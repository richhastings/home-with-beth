/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon } from '@heroicons/react/solid'
import Container from '../Container'
import Heading from '../Heading'
import { LocationMarkerIcon } from '@heroicons/react/outline'
import { CakeIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/outline'
import { BriefcaseIcon } from '@heroicons/react/outline'
import { PortableText } from '@portabletext/react'

const IconMap = {
  briefcase: BriefcaseIcon,
  cake: CakeIcon,
  house: HomeIcon,
  map: LocationMarkerIcon,
}

const PricingBlock = ({ title, bodyRaw, mainImage, price }) => (
  <div className="items-center justify-between rounded-md border border-lightgrey bg-champagne/25 p-8 lg:flex">
    <div>
      <Heading>
        {title}
        <div className="prose font-body font-bold">{price}</div>
      </Heading>
      <div className="prose mt-5 font-body">
        <PortableText value={bodyRaw} />
      </div>
    </div>
    <div className="ml-16 flex max-w-[400px] flex-shrink-0 overflow-hidden rounded-md">
      <img src={mainImage.asset.url} />
    </div>
  </div>
)

const Pricing = ({ services, additionalServices }) => {
  return (
    <>
      {services.map((service) => (
        <PricingBlock {...service} />
      ))}
      <Container size="narrow">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2">
          {additionalServices.map((additionalService) => {
            const Icon = IconMap[additionalService.icon]
            return (
              <div className="text-center">
                <div className="mb-2">
                  <span className="inline-flex items-center justify-center rounded-md bg-lightestgrey p-3">
                    <Icon className="h-6 w-6 text-black" aria-hidden="true" />
                  </span>
                </div>
                <div className="prose font-body">
                  <h3>{additionalService.title}</h3>
                  <p>{additionalService.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </>
  )
}

export default Pricing
