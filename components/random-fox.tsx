//import type { FunctionComponent, FC } from "react"
import { useRef} from 'react' ;

type Props = {
    image : string 
    alt : string
};

export const RandomFox = ({image, alt}: Props) : JSX.Element => { //best way to used it
    const node = useRef<HTMLImageElement>(null); //set as null to avoid typescript issues
    
    return (
        <img ref={node} width={320} height="auto" className="rounded" src={image} alt={alt}/>
    );
};

// export const RandomFox = () => {
//     return <img/>
// }

// export const RandomFox : FunctionComponent = () => {
//     return <img/>
// }

// export const RandomFox : FC = () => {
//     return <img/>
// }