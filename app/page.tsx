'use client';
import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { RandomFox } from '../components/random-fox';
import { MouseEventHandler} from 'react';

//generate a random function between 1 to 123
const random = () => Math.floor(Math.random() * 123) + 1;

const generateId = () => Math.random().toString(36).substr(2,9);

type ImageItems = {id: string, url:string};

const Home: NextPage = () => {
  const [images, setImages] = useState<Array<ImageItems>>([]);

  const addNewFox : MouseEventHandler<HTMLButtonElement>= (event) => {
    //event.preventDefault();
    //const target = event.target;

    const newImageItem : ImageItems = {
      id : generateId(),
      url: `https://randomfox.ca/images/${random()}.jpg`
    };
    
    setImages([
    ...images,
    newImageItem
    ])
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div>
        <Head>
          <title></title>
          <meta name="description" content="Created by Randall Ch"/>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="text-3xl font-bold underline">Demo Project | React - Typescript</h1>
          <button onClick={() => addNewFox()}>Add new fox</button>
          {images.map(({id, url}) =>(
            <div key={id} className="p-4">
              <RandomFox image={url} alt={`Happy fox`}/>
            </div>
          ))}
        </main>

        <footer>
        </footer>
      </div>

    </main>
  )
}
export default Home;
