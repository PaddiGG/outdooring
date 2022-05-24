import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>When Outdooring</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container flex w-full flex-1 flex-col items-center space-y-4 px-20 text-center">
        <h1 className="text-6xl font-bold">When Outdooring</h1>
        <h2 className="text-2xl text-gray-500">
          This app shows when it is not too{' '}
          <span className="font-semibold">rainy ☔️</span> or{' '}
          <span className="font-semibold">windy 🌬</span> for your{' '}
          <span className="font-semibold">outdoor activities 🚴‍♀️🚶‍♂️</span>
        </h2>
      </main>
    </div>
  )
}

export default Home
