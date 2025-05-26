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
    <Disclosure as="nav">
      {({ open }) => (
        <div className={open ? 'bg-black' : backgroundClassMap[background]}>
          {open && <div className="fixed inset-0 z-[1] bg-black opacity-50" />}
          <Container>
            <div className="relative z-[2] flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className={`inline-flex items-center justify-center ${
                    open ? 'text-white' : textColorFromBackground(background)
                  }`}
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block">
                  <div className="flex gap-8 ">
                    <Link legacyBehavior href="/">
                      <a>
                        <HomeIcon className="block h-6 w-6" />
                      </a>
                    </Link>
                    {primaryLinks &&
                      primaryLinks.length > 0 &&
                      primaryLinks.map((item) => (
                        <Link legacyBehavior key={item.label} href={item.url}>
                          <a className="text-md block font-body font-bold hover:underline">
                            {item.label}
                          </a>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
              <div
                className={`${
                  open ? 'text-white' : textColorFromBackground(background)
                } flex gap-8`}
              >
                <SocialLinks />
              </div>
            </div>
          </Container>
          <Disclosure.Panel className="absolute left-0 right-0 z-10 bg-black transition-all sm:hidden">
            <div className="px-4 py-2 pb-3">
              <div className="space-y-2">
                <div>
                  <Link legacyBehavior href="/">
                    <a className="mx-auto block w-full text-center">
                      <div className="mx-auto w-6">
                        <HomeIcon className="block h-6 text-white" />
                      </div>
                    </a>
                  </Link>
                </div>
                {primaryLinks &&
                  primaryLinks.map((item, i) => (
                    <div key={i} className="text-center">
                      <Link legacyBehavior href={item.url}>
                        <a
                          className={`block w-full text-center font-body text-white`}
                        >
                          {item.label}
                        </a>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  )
}

export default Navigation
