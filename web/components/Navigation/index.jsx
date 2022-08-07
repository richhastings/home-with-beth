import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { HomeIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import { primaryLinks, secondaryLinks } from './links'
import SocialLinks from '../SocialLinks'
import Container from '../Container'
import Link from 'next/link'

const Navigation = ({ background = 'champagne' }) => {
  const backgroundClassMap = {
    transparent: 'absolute z-[1] w-full text-white',
    champagne: 'bg-champagne text-black',
    white: 'bg-white text-black mb-4 sm:mb-8 lg:mb-16',
  }
  return (
    <Disclosure as="nav" className={`${backgroundClassMap[background]}`}>
      {({ open }) => (
        <>
          <Disclosure.Panel className="bg-black transition-all sm:hidden">
            <div className="flex items-center justify-between space-y-1 px-4 py-2 pb-3">
              <Link href="/">
                <a>
                  <HomeIcon className="block h-6 w-full text-white" />
                </a>
              </Link>
              {primaryLinks &&
                primaryLinks.map((item) => (
                  <Link href={item.url}>
                    <a className={`font-body text-white`}>{item.label}</a>
                  </Link>
                ))}
            </div>
          </Disclosure.Panel>
          <Container>
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="text-gray-400 hover:bg-gray-700 inline-flex items-center justify-center rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                    <Link href="/">
                      <a>
                        <HomeIcon className="block h-6 w-6" />
                      </a>
                    </Link>
                    {primaryLinks &&
                      primaryLinks.length > 0 &&
                      primaryLinks.map((item) => (
                        <Link key={item.label} href={item.url}>
                          <a className="text-md block font-body font-bold hover:underline">
                            {item.label}
                          </a>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-8">
                <SocialLinks />
              </div>
            </div>
          </Container>
        </>
      )}
    </Disclosure>
  )
}

export default Navigation
