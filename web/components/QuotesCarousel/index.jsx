'use client'

import Button from '../Button'
import Heading from '../Heading'
import Flickity from 'react-flickity-component'

export const Quote = ({ author, shortText }) => (
  <div className="w-full">
    <div className="mx-auto w-full max-w-2xl text-center">
      <p className="mb-2 font-alt text-2xl md:text-4xl">“ {shortText} ”</p>
      <p className="font-body">{author}</p>
    </div>
  </div>
)

const QuotesCarousel = ({ items }) => {
  return (
    <div>
      <Heading className="mb-8 text-center">Testimonials</Heading>
      <Flickity
        options={{
          prevNextButtons: false,
          pageDots: true,
          autoPlay: 5000,
          wrapAround: true,
        }}
      >
        {items.map((item, i) => (
          <Quote key={i} {...item} />
        ))}
      </Flickity>
      <div className="mt-16 text-center">
        <Button href="/testimonials">View all testimonials</Button>
      </div>
    </div>
  )
}

export default QuotesCarousel
