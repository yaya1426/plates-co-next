import '../styles/globals.css'
//Added Bootstrap styles
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }: AppProps) {

  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
