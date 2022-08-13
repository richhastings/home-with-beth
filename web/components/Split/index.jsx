import Heading from '../Heading'
import Button from '../Button'

const Split = ({ children, heading, ctaUrl, ctaText, imgComponent }) => {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-16">
      <div className="mb-8 text-center md:mb-0  md:text-left">
        <Heading>{heading}</Heading>
        <div className="prose mx-auto my-4 font-body">{children}</div>
        {ctaUrl && ctaText && <Button href={ctaUrl}>{ctaText}</Button>}
      </div>
      {imgComponent && (
        <div className="md:col-start-2 md:row-start-1">
          <div className="overflow-hidden rounded-md border border-lightgrey">
            {imgComponent}
          </div>
        </div>
      )}
    </div>
  )
}

export default Split
