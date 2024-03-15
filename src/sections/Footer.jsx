export function Footer() {
    const footerNavs = [
        {
            label: "Company",
            items: [
                {
                    href: '/',
                    name: 'Partners'
                },
                {
                    href: '/',
                    name: 'Blog'
                },
                {
                    href: '/',
                    name: 'Team'
                },
                {
                    href: '/',
                    name: 'Careers'
                },
            ],
        },
        {
            label: "Resources",
            items: [
                {
                    href: '/',
                    name: 'contact'
                },
                {
                    href: '/',
                    name: 'Support'
                },
                {
                    href: '/',
                    name: 'Docs'
                },
                {
                    href: '/',
                    name: 'Pricing'
                },
            ],
        },
        {
            label: "About",
            items: [
                {
                    href: '/',
                    name: 'Terms'
                },
                {
                    href: '/',
                    name: 'License'
                },
                {
                    href: '/',
                    name: 'Privacy'
                },
                {
                    href: '/',
                    name: 'About US'
                },
            ]
        }
    ]
    
    return (
        <footer className="text-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="gap-6 justify-between md:flex">
                <div className="flex-1">
                    <div className="max-w-xs flex flex-col">
                        <img src="/assets/utn-logo.png" className="w-32" />
                        <p className="leading-relaxed mt-2 text-[15px] font-bold">
                            Facultad Regional Rosario
                        </p>
                        <p className="leading-relaxed mt-2 text-[15px]">
                            Universidad Tecnológica Nacional
                        </p>
                        <p className="leading-relaxed mt-2 text-[15px]">
                            CONTACTOS: ZEBALLOS 1341 - S2000BQA - ROSARIO
                        </p>
                        <p className="leading-relaxed mt-2 text-[15px]">
                            0341 - 4481871  
                        </p>
                        <a href="/" className="font-bold hover:text-accent-secondary hover:underline transition-all duration-300 ease-in-out">Teléfonos directos e Internos</a> 
                    </div>
                </div>
                <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-4"
                                key={idx}
                            >
                                <h4 className="text-accent font-bold">
                                    { item.label }
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <a 
                                                href={el.href}
                                                className="hover:text-accent-secondary transition-all duration-300 ease-in-out"
                                            
                                            >
                                                { el.name }
                                            </a>
                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                </div>
            </div>
            <div className="mt-8 py-6 border-t items-center sm:flex">
                <div className="mt-4 sm:mt-0">
                Copyright &copy; 2024 UTN-FRRO. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    )
}
    