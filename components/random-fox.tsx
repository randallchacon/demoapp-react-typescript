//import type { FunctionComponent, FC } from "react"
import { useRef, useEffect, useState } from 'react' ;

type Props = {
    image : string 
    alt : string
};

export const LazyImage = ({image, alt}: Props) : JSX.Element => { //best way to used it
    const node = useRef<HTMLImageElement>(null); //set as null to avoid typescript issues
    const [src, setSrc] = useState(
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=")

    useEffect(() => {
        //new observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                //onIntersection -> console.log
                if(!entry.isIntersecting || !node.current){
                    //console.log("Hey you!");
                    return;
                }
                setSrc(image)
            })
        })
    
        //Observer node
        if(node.current){
            observer.observe(node.current);
        }
    
        //disconnect
        return() => {
            observer.disconnect();
        }
    }, [image]);

    return (
        <img ref={node} width={320} height="auto" className="rounded bg-gray-300" src={src} alt={alt}/>
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