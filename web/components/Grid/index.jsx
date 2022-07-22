import Heading from '../Heading'
import Button from '../Button'
import Card from '../Card'

const Grid = ({ title, subtitle, items, ctaText, ctaUrl }) => {
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
      <div className="grid gap-5 lg:grid-cols-3">
        {items.map((item, i) => (
          <Card isLast={i === items.length - 1} {...item} key={`card${i}`} />
        ))}
      </div>
      {ctaText && ctaUrl && (
        <div className="pt-8 text-center">
          <Button href={ctaUrl}>{ctaText}</Button>
        </div>
      )}
    </div>
  )
}

export default Grid
