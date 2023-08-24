import Image from 'next/image'
import { RandomFox } from '../components/random-fox';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div>
        <head>
          <title></title>
          <meta />
          <link rel="stylesheet" href="" />
        </head>

        <main>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <RandomFox/>
        </main>

        <footer>
        </footer>
      </div>

    </main>
  )
}
