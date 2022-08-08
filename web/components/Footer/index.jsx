import SocialLinks from '../SocialLinks'
import Link from 'next/link'

const navigation = [
  {
    label: 'Terms & Cnditions',
    url: '/terms-conditions',
  },
]

const Footer = () => {
  return (
    <footer className=" bg-black text-black">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 text-center text-white sm:px-6 lg:px-8">
        <nav className="mb-4" aria-label="Footer">
          {navigation.map((item) => (
            <div key={item.label} className="px-5 py-2">
              <Link href={item.url}>
                <a className="text-gray-500 hover:text-gray-900 text-base">
                  {item.label}
                </a>
              </Link>
            </div>
          ))}
        </nav>
        <SocialLinks />
        <p className="text-gray-400 mt-8 text-center text-base">
          &copy; {new Date().getFullYear()} Home with Beth. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
