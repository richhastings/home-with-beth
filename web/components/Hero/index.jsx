import { ArrowDownIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Heading from '../Heading'

const Hero = ({ title, subtitle, short, imgUrl }) => {
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
        <div className="relative h-full bg-[#000]">
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
          <Heading size={imgUrl ? 'xl' : 'lg'}>{title}</Heading>
          {subtitle && (
            <p className="mx-auto mt-6 max-w-lg text-center font-alt text-xl font-bold text-white sm:max-w-3xl sm:text-2xl lg:text-4xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {imgUrl && (
        <a
          href="#content"
          className="absolute bottom-16 left-1/2 translate-x-[-50%] text-white"
        >
          <div className="animate-bounce">
            <ArrowDownIcon width={32} />
          </div>
        </a>
      )}
      <div id="content" />
    </div>
  )
}

export default Hero
