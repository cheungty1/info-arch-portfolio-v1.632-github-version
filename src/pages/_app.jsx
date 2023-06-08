// Import Components
import '@/styles/scss/main.scss'
import { Fragment } from 'react';
import Head from 'next/head';
import Script from 'next/script'
import Layout from '@/components/layout';

// Function for App - Contains Google Analytics Tags, Wrap Component in Layout
// More info on Nextjs - Custom App = https://nextjs.org/docs/pages/building-your-application/routing/custom-app
function App({ Component, pageProps }) {
  return (
    <Fragment>
      {/* GA TAGS */}
      <Script 
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics-script"
        strategy="afterInteractive"
        >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}

export default App;