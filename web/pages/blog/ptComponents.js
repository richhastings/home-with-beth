import client from '../../client'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }

      return (
        <Image
          placeholder="blur"
          blurDataURL={urlFor(value.asset).width(1600).height(900).toString()}
          src={urlFor(value.asset).width(1600).height(900).toString()}
          width={1600}
          height={900}
          alt={value.asset.alt}
          sizes="(max-width: 900px) calc(100vw - 32px), 832px"
        />
      )
    },
    gallery: ({ value }) => {
      if (value.display === 'grid') {
        return (
          <div className="gap-8 md:grid md:grid-cols-2">
            {value.images.map((image, i) => {
              const orphanExists = value.images.length % 2 !== 0
              return (
                <div
                  className={`mb-8 md:mb-0 ${
                    i === value.images.length - 1 &&
                    orphanExists &&
                    'md:col-span-2'
                  }`}
                >
                  <Image
                    placeholder="blur"
                    blurDataURL={urlFor(image.asset)
                      .width(1600)
                      .height(900)
                      .toString()}
                    src={urlFor(image.asset).width(1600).height(900).toString()}
                    width={1600}
                    height={900}
                    alt={image.asset.alt}
                    sizes="(max-width: 900px) calc(100vw - 32px), 832px"
                  />
                </div>
              )
            })}
          </div>
        )
      }
      return value.images.map((image) => (
        <Image
          placeholder="blur"
          blurDataURL={urlFor(image.asset).width(1600).height(900).toString()}
          src={urlFor(image.asset).width(1600).height(900).toString()}
          width={1600}
          height={900}
          alt={image.asset.alt}
          sizes="(max-width: 900px) calc(100vw - 32px), 832px"
        />
      ))
    },
  },
}

export default ptComponents