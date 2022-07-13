import Heading from '../Heading'
import CoverGrid from './CoverGrid'
import StandardGrid from './StandardGrid'
import Button from '../Button'
import Container from '../Container'

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
    <div>
      {title && (
        <div className="mb-4 text-center md:mb-16">
          <Heading>{title}</Heading>
          {subtitle && (
            <p className="mx-auto mt-3 max-w-2xl text-xl">{subtitle}</p>
          )}
        </div>
      )}
      <GridComponent columns={columns} items={items} />
      {ctaText && ctaUrl && (
        <div className="pt-8 text-center">
          <Button href={ctaUrl}>{ctaText}</Button>
        </div>
      )}
    </div>
  )
}

export default Grid
