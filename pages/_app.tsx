import type { AppProps } from 'next/app'
import '../styles/globals.css'
import '../styles/prism-ghcolors.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
