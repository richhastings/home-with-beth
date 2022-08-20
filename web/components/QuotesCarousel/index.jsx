import Heading from '../Heading'
import Flickity from 'react-flickity-component'

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
          <div className="w-full">
            <div className="mx-auto w-full max-w-[600px] text-center">
              <p className="mb-2 font-alt text-4xl">
                &lsquo; {item.body} &rsquo;
              </p>
              <p className="font-body">
                {item.name}, {item.location}
              </p>
            </div>
          </div>
        ))}
      </Flickity>
    </>
  )
}

export default QuotesCarousel
