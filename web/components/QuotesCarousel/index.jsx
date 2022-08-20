import Heading from '../Heading'
import Flickity from 'react-flickity-component'

export const Quote = ({ name, location, body }) => (
  <div className="w-full">
    <div className="mx-auto w-full max-w-2xl text-center">
      <p className="mb-2 font-alt text-2xl md:text-4xl">“ {body} ”</p>
      <p className="font-body">
        {name}, {location}
      </p>
    </div>
  </div>
)

const QuotesCarousel = ({ items }) => {
  return (
    <>
      <div className="mb-8 text-center">
        <Heading>Testimonials</Heading>
      </div>
      <Flickity
        options={{
          prevNextButtons: false,
          pageDots: true,
          autoPlay: 5000,
          wrapAround: true,
        }}
      >
        {items.map((item) => (
          <Quote {...item} />
        ))}
      </Flickity>
    </>
  )
}

export default QuotesCarousel
