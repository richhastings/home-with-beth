import Heading from '../Heading'
import ShadowWrapper from '../ShadowWrapper'
import client from '../../client'
import imageUrlBuilder from '@sanity/image-url'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const CoverGrid = ({ items, columns = '3' }) => {
  const columnsClassMap = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
  }

  // trigger deploy

  return (
    <div className={`grid gap-5 ${columnsClassMap[columns]}`}>
      {items.map((item) => (
        <a
          href={`/project/${item.slug.current}`}
          key={item.title}
          className="group relative block overflow-hidden rounded"
        >
          <img
            className="rounded-md"
            src={urlFor(item.mainImage.asset.url)
              .width(900)
              .height(900)
              .fit('max')
              .auto('format')}
          />
          <div
            className="absolute inset-0 aspect-1 rounded bg-[#000]/50 transition-all ease-in-out group-hover:bg-[#000]/75"
            aria-hidden="true"
          />
          <div className="absolute inset-0 z-[1] flex items-center justify-center p-8 text-center text-white">
            <Heading size="sm">{item.title}</Heading>
          </div>
        </a>
      ))}
    </div>
  )
}

export default CoverGrid
