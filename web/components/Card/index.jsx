import client from '../../client'
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import { format } from 'date-fns'
import Image from 'next/image'
// import readingTime from 'reading-time'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const Card = ({ title, mainImage, slug, publishedAt }) => {
  // const time = readingTime(JSON.stringify(bodyRaw)).minutes
  return (
    <Link
      // href={`/blog/${slug.current}`}
      href={`#`}
      className="overflow-hidden rounded-md border border-lightgrey font-body hover:opacity-70"
    >
      <div className="mb-3">
        <Image
          // placeholder="blur"
          // blurDataURL={urlFor(mainImage.asset.url)
          //   .width(1600)
          //   .height(900)
          //   .toString()}
          alt={`Thumbnail relating to an article titled "${title}"`}
          // src={urlFor(mainImage.asset.url).width(1600).height(900).toString()}
          src="http://placehold.it/900"
          width={1600}
          height={900}
          sizes="(max-width: 1024px) calc(100vw - 32px), (max-width:1280px) calc(33vw - 96px), 393px"
        />
      </div>
      <div className="p-4 pt-0">
        <p className="font-body text-xl font-bold">{title}</p>
        <time className="font-body text-sm">
          {/* <span>{format(new Date(publishedAt), 'do MMMM yyyy')}</span> */}
          {/* <span className="px-2">|</span> */}
          {/* <span>{Math.ceil(time)} mins</span> */}
        </time>
      </div>
    </Link>
  )
}

export default Card
