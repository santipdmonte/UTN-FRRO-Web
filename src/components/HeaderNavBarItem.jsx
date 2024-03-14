export function HeaderNavBarItem ({children, href, isLastOne}){

    return (
        <>
        {href? (
            
            <a 
            href= { href } 
            aria-label={`Redirección a ${children}`}
            className={"px-4 text-accent hover:underline transition-all duration-300" + (isLastOne ? "" : " border-r")} >
            { children }
        </a>
        ):(
            <p 
            href= { href } 
            aria-label={`Redirección a ${children}`}
            className={"px-4 text-accent cursor-default" + (isLastOne ? "" : " border-r")} 
            >{ children }</p>
        )}
        
        </>            
    )
    
}