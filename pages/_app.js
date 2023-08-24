import { Fragment } from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
          <Head>
         
          </Head>
          <Component {...pageProps} />
    </Fragment>
        
      
  )
}

export default MyApp
