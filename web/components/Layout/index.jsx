import Navigation from '../Navigation'
import Footer from '../Footer'
import { getNavigation } from '../../lib/api'

const Layout = async ({ children, navigationBackground }) => {
  const navigationItems = await getNavigation()
  return (
    <>
      <Navigation items={navigationItems} background={navigationBackground} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
