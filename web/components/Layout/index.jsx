// import Navigation from '../Navigation'
// import Footer from '../Footer'

const Layout = ({ children, overlayedNavigation }) => (
  <div className="flex min-h-screen flex-col justify-between">
    <div>
      {/* <Navigation overlayed={overlayedNavigation} /> */}
      <main>{children}</main>
    </div>
    {/* <Footer /> */}
  </div>
)

export default Layout
