import type { FunctionComponent, FC } from "react"

//generate a random function between 1 to 123
const random = () => Math.floor(Math.random() * 123) + 1;

export const RandomFox = (): JSX.Element => { //best way to used it
    const image = `https://randomfox.ca/images/${random()}.jpg`; //alt 96

    return <img width={320} height="auto" className="rounded" src={image}/>
}

// export const RandomFox = () => {
//     return <img/>
// }

// export const RandomFox : FunctionComponent = () => {
//     return <img/>
// }

// export const RandomFox : FC = () => {
//     return <img/>
// }