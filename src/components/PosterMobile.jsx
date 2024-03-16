import "./posterMobileCard.css"

import { PosterMobileCard } from "./PosterMobileCard" 

export function PosterMobile ({postersCard = []}){
    return(

        <div className="posterContent">
            <div className="slider">
                <div className="slide-track ">
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
