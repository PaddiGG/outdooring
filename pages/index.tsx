import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Outdooring</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-6xl font-bold">When Outdooring</h1>
        <h2 className="text-2xl text-gray-500">
          This app shows when it is not too{' '}
          <span className="font-semibold">rainy βοΈ</span> or{' '}
          <span className="font-semibold">windy π¬</span> for your{' '}
          <span className="font-semibold">outdoor activities π΄ββοΈπΆββοΈ</span>
        </h2>
      </main>
    </div>
  )
}

export default Home
