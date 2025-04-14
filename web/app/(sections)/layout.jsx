import { getNavigation } from '../../lib/api'
import Navigation from '../../components/Navigation'

export const metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}

export default async function RootLayout({ children }) {
  const navigationItems = await getNavigation()
  return (
    <>
      <Navigation items={navigationItems} background="champagne" />
      {children}
    </>
  )
}
