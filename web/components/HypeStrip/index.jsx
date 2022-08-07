import Heading from '../Heading'
import { useRouter } from 'next/router'
import Button from '../Button'

const HypeStrip = () => {
  const { pathname } = useRouter()
  const isServicesPage = pathname === '/services'
  const title = isServicesPage ? 'Want to get started?' : 'Want to know more?'
  const ctaText = isServicesPage ? 'Contact me!' : 'View services'
  const ctaUrl = isServicesPage ? '/contact' : '/services'
  return (
    <div className="bg-champagne text-center md:text-left">
      <div className="md:mx-none mx-auto max-w-7xl py-6 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:py-16 lg:px-8">
        <Heading>{title}</Heading>
        <div className="mx-auto mt-4 md:mx-0 md:mt-0 md:flex-shrink-0">
          <div className="inline-flex rounded-md md:mr-4">
            <Button href={ctaUrl}>{ctaText}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HypeStrip
