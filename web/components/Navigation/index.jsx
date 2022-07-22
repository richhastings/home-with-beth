import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { HomeIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import { primaryLinks, secondaryLinks } from './links'
import SocialLinks from '../SocialLinks'
import Container from '../Container'

const Navigation = ({ dark, overlayed }) => {
  const wrapperClasses = overlayed ? 'absolute z-[1] w-full' : 'mb-4 md:mb-8'
  const textColorClasses = dark ? 'text-black' : 'text-white'
  return (
    <Disclosure as="nav" className={`${wrapperClasses} ${textColorClasses}`}>
      {({ open }) => (
        <>
          <Container>
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="text-gray-400 hover:bg-gray-700 inline-flex items-center justify-center rounded-md p-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                    <a className="" href="/">
                      <HomeIcon className="block h-6 w-6" />
                    </a>
                    {primaryLinks &&
                      primaryLinks.length > 0 &&
                      primaryLinks.map((item) => (
                        <a
                          key={item.label}
                          href={item.url}
                          className="text-md block font-body font-bold hover:underline"
                          // aria-current={item.current ? 'page' : undefined}
                        >
                          {item.label}
                        </a>
                      ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-8">
                <SocialLinks />
              </div>
            </div>
          </Container>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {primaryLinks &&
                primaryLinks.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 ',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navigation
