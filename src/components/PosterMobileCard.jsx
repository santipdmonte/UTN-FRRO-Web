import "./posterMobileCard.css"

export function PosterMobileCard ({img, href}){
    return(
        <a 
            href={href}
            className="flex lg:w-[200px] w-[150px] items-center m-[10px]
            hover:scale-110 transition-transform duration-300 ease-in-out 
            rounded-[10px] relative overflow-hidden"
            >
            <div className="absolute inset-0 rounded-[10px] overflow-hidden backdrop-blur-2xl">
                <img
                    src={img}
                    className="w-full h-full object-cover blur-md"
                />
            </div>
            <img 
            src={img}
            className="w-full  drop-shadow-xl"/>
        </a>

        
    )
}
