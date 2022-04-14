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
        <Header title="Welcome to Clement's demo page on Netlify!" />
        <p className="description">
          This file (pages/index.js) is written in Next.js and hosted on Netlify. <br> Below are some demos on services on free tier, enjoy!</code>
        </p>
        <p><a href="https://calm-dusk-95826.herokuapp.com/db">Backend implemented on node.js hosted on Heroku, returning data from PostgreSQL</a></p>
        <p><a href="https://pn0a9jqeab.execute-api.ap-southeast-1.amazonaws.com/test/transactions?transactionId=5&type=PURCHASE&amount=500">Serverless API call - AWS API Gateway to Lambda</a></p>

        
        
        

      </main>

      <Footer />
    </div>
  )
}
