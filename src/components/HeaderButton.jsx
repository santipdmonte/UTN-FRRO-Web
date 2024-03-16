export function HeaderButton ({children, href}) {
    return(
        <a href={ href } className="hidden md:flex items-center">
            <button 
                className="bg-white  text-accent font-bold hover:bg-accent hover:text-white py-2 px-4 rounded-[20px]
                 transition-all duration-300 ease-in-out
                hover:scale-110">
                { children }
            </button>
        </a>
    )
}