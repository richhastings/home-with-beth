import Heading from '../Heading'
import { CameraIcon } from '@heroicons/react/solid'

const Split = ({ children, heading, ctaUrl, ctaText, imgUrl }) => {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl py-4 px-4 sm:py-8 sm:px-6 lg:py-16 lg:px-8">
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-16">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                <img
                  className="rounded-lg object-cover object-center"
                  src={imgUrl || 'http://picsum.photos/800/450'}
                  alt="Whitney leaning against a railing on a downtown street"
                  width={1600}
                  height={900}
                />
              </div>
            </div>
          </div>
          <div className="mt-8 text-center lg:mt-0 lg:text-left">
            <Heading>{heading}</Heading>
            <div className="prose mx-auto mt-5 font-body">{children}</div>
            {ctaUrl && ctaText && (
              <a
                href={ctaUrl}
                className="border-transparent mt-5 inline-flex items-center justify-center rounded-md border px-5 py-3 text-base font-medium text-black"
              >
                {ctaText}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Split
