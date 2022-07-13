import Heading from '../Heading'
import Button from '../Button'
import ShadowWrapper from '../ShadowWrapper'
import Container from '../Container'

const Split = ({ children, heading, ctaUrl, ctaText, imgUrl }) => {
  return (
    <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-16">
      <div className="lg:col-start-2 lg:row-start-1">
        <img
          className="rounded-md border border-lightgrey"
          src={imgUrl || 'http://picsum.photos/800/450'}
          alt="Whitney leaning against a railing on a downtown street"
          width={1600}
          height={900}
        />
      </div>
      <div className="text-center lg:text-left">
        <Heading>{heading}</Heading>
        <div className="prose mx-auto mt-5 mb-5 font-body">{children}</div>
        {ctaUrl && ctaText && <Button href={ctaUrl}>{ctaText}</Button>}
      </div>
    </div>
  )
}

export default Split
