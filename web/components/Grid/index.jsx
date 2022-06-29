import Heading from '../Heading'
import CoverGrid from './CoverGrid'
import StandardGrid from './StandardGrid'

const Grid = ({
  title,
  subtitle,
  items,
  ctaText,
  ctaUrl,
  variant,
  columns,
}) => {
  const GridComponent = variant === 'cover' ? CoverGrid : StandardGrid
  return (
    <div className="relative py-8 lg:py-12">
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <Heading>{title}</Heading>
          {subtitle && (
            <p className="text-gray-500 mx-auto mt-3 max-w-2xl text-xl sm:mt-4">
              {subtitle}
            </p>
          )}
        </div>
        <GridComponent columns={columns} items={items} />
      </div>
      {ctaText && ctaUrl && (
        <div className="p-8 text-center">
          <a
            href={ctaUrl}
            className="border-transparent mt-5 inline-flex items-center justify-center rounded-md border px-5 py-3 text-base font-medium text-black"
          >
            {ctaText}
          </a>
        </div>
      )}
    </div>
  )
}

export default Grid
