import Heading from '../Heading'
import Button from '../Button'
import ShadowWrapper from '../ShadowWrapper'
import Container from '../Container'

const Split = ({ children, heading, ctaUrl, ctaText, imgUrl }) => {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-16">
      <div className="mb-8 text-center md:mb-0  md:text-left">
        <Heading>{heading}</Heading>
        <div className="prose mx-auto my-4 font-body">{children}</div>
        {ctaUrl && ctaText && <Button href={ctaUrl}>{ctaText}</Button>}
      </div>
      <div className="md:col-start-2 md:row-start-1">
        <img
          className="mb-4 rounded-md border border-lightgrey sm:mb-0"
          src={imgUrl || 'http://picsum.photos/800/450'}
          alt="Whitney leaning against a railing on a downtown street"
          width={1600}
          height={900}
        />
      </div>
    </div>
  )
}

export default Split
