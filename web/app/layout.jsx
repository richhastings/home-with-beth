import Footer from '../components/Footer'
import HeadElements from '../components/HeadElements'
import '../styles/global.css'

export default async function RootLayout({ children }) {
  return (
    <html>
      <HeadElements />
      <body className="flex min-h-screen flex-col justify-between gap-0">
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
