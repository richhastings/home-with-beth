import Heading from '../Heading'
import { useRouter } from 'next/router'

const HypeStrip = () => {
  const { pathname } = useRouter()
  const isServicesPage = pathname === '/services'
  const title = isServicesPage ? 'Want to get started?' : 'Want to know more?'
  const ctaText = isServicesPage ? 'Contact me!' : 'View services'
  const ctaUrl = isServicesPage ? '/contact' : '/services'
  return (
    <div className="bg-champagne">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <Heading>{title}</Heading>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md">
            <a
              href={ctaUrl}
              className="border-transparent bg-indigo-600 hover:bg-indigo-700 inline-flex items-center justify-center rounded-md border px-5 py-3 text-base font-medium text-black"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HypeStrip
