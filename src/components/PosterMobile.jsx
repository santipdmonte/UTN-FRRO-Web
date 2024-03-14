import "./posterMobileCard.css"

import { PosterMobileCard } from "./PosterMobileCard" 

export function PosterMobile ({postersCard = []}){
    return(

        <div className="posterContent">
            <div className="slider">
                <div className="slide-track">
                    {postersCard.map((card, index) => (
                        <PosterMobileCard
                            key={index} 
                            img={card.img}
                            href={card.href}/>
                    ))}
                    {postersCard.map((card, index) => (
                        <PosterMobileCard
                            key={index} 
                            img={card.img}
                            href={card.href}/>
                    ))}
                </div>
            </div>
        </div>
    )
}



// import React, { useRef, useEffect } from "react";

// export function PosterMobile({ img, href, key }) {
//   const sliderRef = useRef(null);
//   const slideTrackRef = useRef(null);

//   useEffect(() => {
//     const slides = slideTrackRef.current.children;
//     const cloneSlides = Array.from(slides).map((slide) =>
//       slide.cloneNode(true)
//     );

//     slideTrackRef.current.append(...cloneSlides);
//   }, []);

//   return (
//     <a href={href} key={key} className="slider" ref={sliderRef}>
//       <div className="slide-track" ref={slideTrackRef}>
//         {postersCard.map((card, index) => (
//             <PosterMobileCard
//                 key={index} 
//                 img={card.img}
//                 href={card.href}/>
//         ))}
//         {/* Aquí se clonarán los slides adicionales */}
//       </div>
//     </a>
//   );
// }

