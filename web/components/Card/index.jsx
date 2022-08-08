import client from '../../client'
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const Card = ({ title, description, mainImage, slug }) => (
  <Link href={`/blog/${slug.current}`}>
    <a className="rounded-md border border-lightgrey font-body hover:opacity-70">
      <div className="p-4">
        <img
          className="mb-3 rounded-sm border border-lightgrey"
          src={urlFor(mainImage.asset.url)
            .width(1600)
            .height(900)
            .fit('max')
            .auto('format')}
          alt=""
        />
        <p className="font-body text-xl font-bold">{title}</p>
        <p className="">{description}</p>
      </div>
    </a>
  </Link>
)

export default Card
