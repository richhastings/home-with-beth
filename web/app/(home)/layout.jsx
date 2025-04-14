import Navigation from '../../components/Navigation'
import { getNavigation } from '../../lib/api'

export default async ({ children }) => {
  const navigationItems = await getNavigation()
  return (
    <>
      <Navigation items={navigationItems} background="transparent" />
      {children}
    </>
  )
}
