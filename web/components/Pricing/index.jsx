/* This example requires Tailwind CSS v2.0+ */
import Heading from '../Heading'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import client from '../../client'
import imageUrlBuilder from '@sanity/image-url'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Stack from '../Stack'

// function urlFor(source) {
//   return imageUrlBuilder(client).image(source)
// }

const PricingBlock = ({ title, description, price }) => {
  const formattedPrice =
    title === 'Interior design' ? `Prices from £${price}` : `£${price}`
  return (
    <div className="mx-auto max-w-7xl rounded-md border border-lightgrey bg-champagne/25 p-8">
      <Heading>
        {title}
        <div className="prose font-body font-bold">{formattedPrice}</div>
      </Heading>
      <div className="items-center justify-between lg:flex">
        <div className="order-2 my-4 mx-auto w-full max-w-[720px] overflow-hidden rounded-md border border-lightgrey lg:my-0 lg:ml-8 lg:w-[400px] lg:shrink-0">
          {/* <Image
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
          /> */}
        </div>
        <div className="prose order-1 font-body">
          {documentToReactComponents(description.json, {})}
          {/* <div className="prose mt-4 max-w-none font-body">
            <PortableText value={bodyRaw} />
          </div> */}
        </div>
      </div>
    </div>
  )
}

const Pricing = ({ services }) => {
  return (
    <Stack gap={8} className="px-8">
      {services.map((service) => (
        <PricingBlock {...service} />
      ))}
    </Stack>
  )
}

export default Pricing
