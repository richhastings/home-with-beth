import { ArrowDownIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import Image from 'next/image'
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
        'relative  text-center sm:overflow-hidden',
        short
          ? 'h-20 bg-champagne pb-4 sm:pt-8 sm:pb-12 md:h-40 lg:h-48'
          : 'h-screen'
      )}
    >
      {imgUrl && (
        <div className="relative h-full bg-black">
          <div className="absolute inset-0  opacity-50">
            <Image
              placeholder="blur"
              blurDataURL={imgUrl}
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 156.25vh, 100vw"
              src={imgUrl}
              alt="A beautiful curated home."
            />
          </div>
        </div>
      )}
      <div
        className={`absolute top-1/2 z-[1] flex w-full -translate-y-1/2 flex-col items-center justify-center ${
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
        <div className="absolute bottom-16 left-1/2 translate-x-[-50%] text-white">
          <div className="animate-bounce">
            <ArrowDownIcon width={32} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Hero
