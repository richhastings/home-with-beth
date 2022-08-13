/* This example requires Tailwind CSS v2.0+ */
import Container from '../Container'
import Heading from '../Heading'
import { LocationMarkerIcon } from '@heroicons/react/outline'
import { CakeIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/outline'
import { BriefcaseIcon } from '@heroicons/react/outline'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import client from '../../client'
import imageUrlBuilder from '@sanity/image-url'

const IconMap = {
  briefcase: BriefcaseIcon,
  cake: CakeIcon,
  house: HomeIcon,
  map: LocationMarkerIcon,
}

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const PricingBlock = ({ title, bodyRaw, mainImage, price }) => {
  const formattedPrice =
    title === 'Interior design' ? `Prices from £${price}` : `£${price}`
  return (
    <div className="rounded-md border border-lightgrey bg-champagne/25 p-8">
      <Heading>
        {title}
        <div className="prose font-body font-bold">{formattedPrice}</div>
      </Heading>
      <div className="items-center justify-between lg:flex">
        <div className="order-2 my-4 w-full overflow-hidden rounded-md border border-lightgrey lg:my-0 lg:ml-8 lg:max-w-[400px]">
          <Image
            placeholder="blur"
            blurDataURL={urlFor(mainImage.asset.url)
              .width(1600)
              .height(1600)
              .toString()}
            src={urlFor(mainImage.asset.url)
              .width(1600)
              .height(1600)
              .toString()}
            width={1600}
            height={1600}
            sizes="(max-width:1024px) calc(100vw - 32px), 400px"
          />
        </div>
        <div className="order-1">
          <div className="prose mt-4 max-w-none font-body">
            <PortableText value={bodyRaw} />
          </div>
        </div>
      </div>
    </div>
  )
}

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
