import Heading from '../Heading'
import Button from '../Button'

const Split = ({
  children,
  heading,
  ctaUrl,
  ctaText,
  imgComponent,
  reversed,
}) => {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-16">
      <div
        className={`mb-8 text-center md:mb-0 md:text-left ${
          reversed ? `md:col-start-2` : ``
        }`}
      >
        <Heading>{heading}</Heading>
        <div className="prose mx-auto my-4 font-body">{children}</div>
        {ctaUrl && ctaText && <Button href={ctaUrl}>{ctaText}</Button>}
      </div>
      {imgComponent && (
        <div className={reversed ? `md:col-start-1 md:row-start-1` : ``}>
          <div className="overflow-hidden rounded-md border border-lightgrey">
            {imgComponent}
          </div>
        </div>
      )}
    </div>
  )
}

export default Split
