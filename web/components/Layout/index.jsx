import Navigation from '../Navigation'
import Footer from '../Footer'
import Container from '../Container'
import HypeStrip from '../HypeStrip'

const Layout = ({
  children,
  darkNavigation,
  overlayedNavigation,
  size,
  hero,
}) => (
  <div className="flex min-h-screen flex-col justify-between">
    <div>
      <Navigation dark={darkNavigation} overlayed={overlayedNavigation} />
      {hero && <div className="mb-4 md:mb-16">{hero}</div>}
      <Container size={size}>
        <main className="mb-4 space-y-4 md:mb-16 md:space-y-16">
          {children}
        </main>
      </Container>
      <HypeStrip />
    </div>
    <Footer />
  </div>
)

export default Layout
