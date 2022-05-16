import Navigation from '../Navigation'

const Layout = ({ navItems, children }) => (
  <>
    <Navigation items={navItems} />
    {children}
  </>
)

export default Layout
