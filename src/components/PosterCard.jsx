export function PosterCard ({img, href}){
    return(
        <a 
            href={href}
            className=""
            >
            <img 
                    src={img}
                    className="break-inside-avoid rounded-[10px] mb-2"
            />
        </a>
    )
}