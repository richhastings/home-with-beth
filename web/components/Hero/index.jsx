import { ArrowDownIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import Image from 'next/image'
import Heading from '../Heading'

const Hero = ({ title, subtitle, short, imgKey }) => {
  const imgUrl = `/images/${imgKey}.webp`
  const mobileImgUrl = `/images/${imgKey}-mobile.webp`
  return (
    <div
      className={classNames(
        'relative  text-center sm:overflow-hidden',
        short
          ? 'h-20 bg-champagne pb-4 sm:pt-8 sm:pb-12 md:h-40 lg:h-48'
          : 'h-screen'
      )}
    >
      {imgKey && (
        <div className="relative h-full bg-[#000]">
          <div className="absolute inset-0 hidden opacity-50 md:block">
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
          <div className="absolute inset-0 opacity-50 md:hidden">
            <Image
              placeholder="blur"
              blurDataURL={mobileImgUrl}
              layout="fill"
              objectFit="cover"
              sizes="100vw"
              src={mobileImgUrl}
              alt="A beautiful curated home."
            />
          </div>
        </div>
      )}
      <div
        className={`absolute top-1/2 z-[1] flex w-full -translate-y-1/2 flex-col items-center justify-center ${
          imgKey && 'text-white'
        }`}
      >
        <div>
          <Heading size={imgKey ? 'xl' : 'lg'}>{title}</Heading>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-lg text-center font-alt text-xl font-bold text-white sm:mt-6 sm:max-w-3xl sm:text-2xl lg:text-4xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {imgKey && (
        <a
          href="#content"
          className="absolute bottom-32 left-1/2 translate-x-[-50%] text-white"
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
