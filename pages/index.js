import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Clement's app on Netlify!" />
        <p className="description">
          Get started by editing Clement's <code>pages/index.js</code>
        </p>
        <p className="herokuTest">
          const res= await fetch('alm-dusk-95826.herokuapp.com/db')
        </p>

      </main>

      <Footer />
    </div>
  )
}
