import React from 'react'
import { AppProps } from 'next/app'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <html lang='en'>
      <Component {...pageProps} />
    </html>
  )
}

export default App
