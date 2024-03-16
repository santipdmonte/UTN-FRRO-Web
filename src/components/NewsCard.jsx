export function NewsCard ({title = '', description = '', img, href}){
    return(
        <a 
            href={href}>
            <div className="bg-gray-400 break-inside-avoid rounded-[10px] mb-5 drop-shadow-2xl 
            md:hover:scale-105 transition-all duration-300 ease-in-out">
                <img 
                        src={img}
                        alt={title}
                        className="rounded-t-[10px]"
                />
                <div className="p-2 px-3 bg-slate-200 rounded-b-[10px] text-[#222]">
                    <h3 className="text-xl">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                </div>
            </div>
        </a>
    )
}