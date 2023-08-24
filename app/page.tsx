import Image from 'next/image'
import { RandomFox } from '../components/random-fox';

//generate a random function between 1 to 123
const random = () => Math.floor(Math.random() * 123) + 1;

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
          <RandomFox image={`https://randomfox.ca/images/${random()}.jpg`} alt={`Happy fox`}/>
        </main>

        <footer>
        </footer>
      </div>

    </main>
  )
}
