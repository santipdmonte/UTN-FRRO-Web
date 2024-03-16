import { useState } from 'react';
import { HeaderButton } from './HeaderButton';

export function HeaderNavBarMobile ({ navBarItems }){

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return (
        <>

        <nav className={`mnav border-primary fixed w-[300px] top-0 h-screen 
        shadow-2xl lg:hidden transition-all duration-300 z-20 
        backdrop-blur-2xl border-r
        ${isMenuOpen? 'left-0' : '-left-[300px]'}`}>
            
            <button 
            onClick={toggleMenu}
            type="button"
            className="mnav__close-btn bg-primary w-8 h-8 relative -right-full
            top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg transition-all">
                <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h15M1 7h15M1 13h15"
                    />
                </svg>
            </button>

            
            <div className="px-4 flex flex-col gap-y-12 h-full">

                <div className="flex mx-auto md:ml-0 lg:justify-normal">
                    <a 
                        href="/"                               
                        aria-label="Ir a la pagina principal de inicio">
                        <img className="lg:h-20 md:h-16 h-12 drop-shadow-xl" src="/assets/utn-logo.png" alt=""></ img>
                    </a>
                </div>

                <div className='flex flex-row gap-2'>
                    <a 
                        href="https://mail.frro.utn.edu.ar/"
                        className="bg-white mx-auto text-accent font-bold hover:bg-accent hover:text-white py-2 px-4 rounded-[20px]
                        transition-all duration-300 ease-in-out
                        hover:scale-110">
                        Webmail
                    </a>
                    <a 
                        href="https://frro.cvg.utn.edu.ar/"
                        className="bg-white mx-auto text-accent font-bold hover:bg-accent hover:text-white py-2 px-4 rounded-[20px]
                    transition-all duration-300 ease-in-out
                    hover:scale-110">
                    Catedras Online
                    </a>                   
                </div>

                <ul className="flex flex-col gap-y-5 text-white">
                    {navBarItems.map((item, index) => (
                        <li>
                            {item.text}
                        </li>
                    ))}
                </ul>

                

            </div>
            
        </nav>
        </>
    );
}