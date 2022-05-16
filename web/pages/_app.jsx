import App from 'next/app'
import '../styles/global.css'
import client from '../client'
import groq from 'groq'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => {
  // const appProps = await App.getInitialProps(appContext)
  const items = await client.fetch(groq`
      *[_type == "navigation"]
    `)

  return { banana: items }
}

export default MyApp
