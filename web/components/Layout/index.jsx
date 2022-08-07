import Navigation from '../Navigation'
import Footer from '../Footer'
import Container from '../Container'
import HypeStrip from '../HypeStrip'

const Layout = ({ children, navigationBackground, size, hero }) => (
  <div className="flex min-h-screen flex-col justify-between">
    <div>
      <Navigation background={navigationBackground} />
      {hero && <div className="mb-8 md:mb-16">{hero}</div>}
      <Container size={size}>
        <main className="mb-8 space-y-8 md:mb-16 md:space-y-16">
          {children}
        </main>
      </Container>
      <HypeStrip />
    </div>
    <Footer />
  </div>
)

export default Layout
