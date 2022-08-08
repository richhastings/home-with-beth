import { ArrowDownIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import Heading from '../Heading'

const Hero = ({ title, subtitle, short, imgUrl }) => {
  const [hasScrolled, setHasScrolled] = useState(false)

  const removeScrollListener = () => {
    setHasScrolled(true)
    window.removeEventListener('scroll', removeScrollListener)
  }

  useEffect(
    () => window && window.addEventListener('scroll', removeScrollListener)
  )

  return (
    <div
      className={classNames(
        'relative bg-champagne text-center sm:overflow-hidden',
        short ? 'pb-4 sm:pt-8 sm:pb-12' : 'h-screen'
      )}
    >
      {imgUrl && (
        <div className="absolute inset-0 bg-black">
          <img
            className="h-full w-full object-cover opacity-50"
            src={imgUrl}
            alt="A beautiful curated home."
          />
        </div>
      )}
      <div
        className={`relative flex h-full flex-col items-center justify-center ${
          imgUrl && 'text-white'
        }`}
      >
        <div>
          <Heading size="lg">{title}</Heading>
          {subtitle && (
            <p className="mx-auto mt-6 max-w-lg text-center font-body text-xl font-bold text-white sm:max-w-3xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {imgUrl && !hasScrolled && (
        <div className="absolute bottom-4 left-1/2 translate-x-[-50%] text-white">
          <div className="animate-bounce">
            <ArrowDownIcon width={32} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Hero
