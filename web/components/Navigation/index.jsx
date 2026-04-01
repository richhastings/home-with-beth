import { Disclosure } from '@headlessui/react'
import { HomeIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { primaryLinks } from './links'
import SocialLinks from '../SocialLinks'
import Container from '../Container'
import Link from 'next/link'

const Navigation = ({ background = 'champagne' }) => {
  const backgroundClassMap = {
    transparent: 'absolute z-[1] w-full text-white',
    champagne: 'bg-champagne text-black',
    white: 'bg-white text-black mb-4 sm:mb-8 lg:mb-16',
  }

  const textColorFromBackground = (bg) => {
    if (bg === 'transparent') return 'text-white'

    return 'text-black'
  }

  return (
    <div className={backgroundClassMap[background]}>
      <Container>
        <div className="relative z-[2] flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex flex-1 items-center">
            <div className="flex gap-8 ">
              <Link legacyBehavior href="/">
                <a>
                  <HomeIcon className="block h-6 w-6" />
                </a>
              </Link>
              {/* <Link legacyBehavior href="/portfolio">
                <a className="text-md block font-body font-bold hover:underline">
                  Portfolio
                </a>
              </Link> */}
              <Link legacyBehavior href="/contact">
                <a className="text-md block font-body font-bold hover:underline">
                  Contact
                </a>
              </Link>
            </div>
          </div>
          <div className={`${textColorFromBackground(background)} flex gap-8`}>
            <SocialLinks />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navigation
