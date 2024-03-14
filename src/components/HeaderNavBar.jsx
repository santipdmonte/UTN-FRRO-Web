import './headerNavBar.css';
import { HeaderNavBarItem } from './HeaderNavBarItem';

export function HeaderNavBar ({ navBarItems }){

    return (
        <nav 
            className="bg-slate-100 absolute w-[95%] mx-auto right-0 left-0 -bottom-[86px] 
            shadow-custom1 h-16 rounded-[10px] hidden lg:flex lg:items-center lg:justify-between lg:px-[50px] z-10">

             <ul className="flex">
                {navBarItems.map((item, index) => (
                    <li key={index}>  
                   
                        { item.subItems? (
                            <>
                                                       
                            <div className="relative text-white">
                                
                                <HeaderNavBarItem                                   
                                    isLastOne={index === navBarItems.length - 1}
                                    >
                                        {item.text}
                                </ HeaderNavBarItem>
                                

                                <ul className="dropdown hidden absolute left-0 top-[100%] z-10 ">
                                    <div className='rounded-[10px] p-5 mt-8 top-10 flex flex-row gap-12
                                        backdrop-blur-2xl border 
                                        animate-fade-in-down animate-duration-normal'>
                                        
                                        {item.subItems? (
                                            <>

                                            <div className='flex flex-col gap-2 w-[160px]'>
                                                {item.subItems.map((subItem, index) => (
                                                    
                                                    <>                                                    
                                                    {subItem.subItems? null : (
                                                        <a 
                                                            key={index} 
                                                            href="" 
                                                            className='font-bold hover:text-accent
                                                                hover:scale-105 transition-all duration-200 ease-in-out'>
                                                                {subItem.text}
                                                        </a>
                                                    )}                                                    
                                                    </> 

                                                ))}
                                            </div>
                                                                                       
                                            {item.subItems.map((subItem, index) => (
                                                
                                                <>
                                                {subItem.subItems? (
                                                <li href="" className='font-bold'>{subItem.text}
                                                    <ul className='pl-2 font-normal'>
                                                        {subItem.subItems.map((subItem, index) => (
                                                            <li className='w-[170px] hover:text-accent pt-2
                                                                hover:scale-105 transition-all duration-200 ease-in-out'>
                                                                <a href="/">{subItem.text}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>   
                                                ) : null}
                                                </> 

                                            ))}
                                            </>
                                        ) : null}
                                                                               
                                    </div>
                                </ul>
                            </div>

                            </>
                            ) : 
                            
                            
                            <HeaderNavBarItem
                            href={item?.href}
                            isLastOne={index === navBarItems.length - 1}
                            >
                                {item.text}
                            </ HeaderNavBarItem>
                        }

                    </li>
                ))}
            </ul>

        </nav>
    )
}