import { HeaderButton } from "../components/HeaderButton"
import { HeaderNavBar } from "../components/HeaderNavBar"
import { HeaderNavBarMobile } from "../components/HeaderNavBarMobile"

export function Header ({children}) {

    const navBarItems = [
        {
            text: "Institucional",
            subItems: [
                {
                    href: "/",
                    text: "Historia"
                },
                {
                    href: "/",
                    text: "Consejo Directivo"
                },
                {
                    href: "/",
                    text: "Autoridades"
                },
                {
                    href: "/",
                    text: "Relaciones Internacionales"
                },
                {
                    href: "/",
                    text: "Secretarias",
                    subItems: [
                        {
                            href: "/",
                            text: "Académica"
                        },
                        {
                            href: "/",
                            text: "Administrativa"
                        },
                        {
                            href: "/",
                            text: "Asuntos Universitarios"
                        },
                        {
                            href: "/",
                            text: "Ciencia y Tecnología"
                        },
                        {
                            href: "/",
                            text: "Extension Univeritaria"
                        },
                        {
                            href: "/",
                            text: "Planeamiento Institucional"
                        }
                    ]
                },
                {
                    href: "/",
                    text: "Departamentos Academicos",
                    subItems: [
                        {
                            href: "/",
                            text: "Materias Básicas"
                        },
                        {
                            href: "/",
                            text: "Ingeniería Civil"
                        },
                        {
                            href: "/",
                            text: "Ingeniería en Energía Eléctrica"
                        },
                        {
                            href: "/",
                            text: "Ingeniería Mecánica"
                        },
                        {
                            href: "/",
                            text: "Ingeniería Química"
                        },
                        {
                            href: "/",
                            text: "Ingeniería en Sistemas de Información"
                        }
                    ]
                },
                {
                    href: "/",
                    text: "Departamentos Administrativos",
                    subItems: [
                        {
                            href: "/",
                            text: "Dirección de Alumnos"
                        },
                        {
                            href: "/",
                            text: "Dirección de RRHH"
                        },
                        {
                            href: "/",
                            text: "Dirección Financiera"
                        },
                        {
                            href: "/",
                            text: "Ingeniería Mecánica"
                        },
                        {
                            href: "/",
                            text: "Ingeniería Química"
                        },
                        {
                            href: "/",
                            text: "Ingeniería en Sistemas de Información"
                        }
                    ]
                }
            ]
        },
        {
            href: "/",
            text: "Grado",
            subItems: [
                {
                    href: "/",
                    text: "Licencituras"
                },
                {
                    href: "/",
                    text: "Carreras de Ingeniería",
                    subItems: [
                        {
                            href: "/",
                            text: "Ingeniería Civil"
                        },
                        {
                            href: "/",
                            text: "Ingeniería en Energía Eléctrica"
                        },
                        {
                            href: "/",
                            text: "Ingeniería Mecánica"
                        },
                        {
                            href: "/",
                            text: "Ingeniería Química"
                        },
                        {
                            href: "/",
                            text: "Ingeniería en Sistemas de Información"
                        }
                    ]
                },
            ]
        },
        {
            href: "https://dpec.frro.utn.edu.ar/",
            text: "Posgrado y Carreras Cortas" 
        },
        {
            href: "/",
            text: "Investigación",
            subItems: [
                {
                    href: "/",
                    text: "Adscripciones y Becas"
                },
                {
                    href: "/",
                    text: "Proyectos de I+D"
                },
                {
                    href: "/",
                    text: "Carrera del Investigador"
                },
                {
                    href: "/",
                    text: "RIA"
                },
                {
                    href: "/",
                    text: "Centros y Grupos",
                    subItems: [
                        {
                            href: "/",
                            text: "CAIMI"
                        },
                        {
                            href: "/",
                            text: "CIDTA"
                        },
                        {
                            href: "/",
                            text: "OES"
                        },
                        {
                            href: "/",
                            text: "CeDITE"
                        },
                        {
                            href: "/",
                            text: "GESE"
                        },
                        {
                            href: "/",
                            text: "ICMA"
                        },
                        {
                            href: "/",
                            text: "ISI Investiga"
                        }
                    ]
                },
            ] 
        },
        {
            href: "https://seuvt.frro.utn.edu.ar/",
            text: "Extensión" 
        },
        {
            href: "/",
            text: "Info para",
            subItems: [
                {
                    href: "/",
                    text: "Aspirantes a Ingresar"
                },
                {
                    href: "/",
                    text: "Egresados"
                },
                {
                    href: "/",
                    text: "Docentes",
                    subItems: [
                        {
                            href: "/",
                            text: "Autogestión"
                        },
                        {
                            href: "/",
                            text: "Concursos"
                        },
                        {
                            href: "/",
                            text: "Carrera Académica"
                        },
                    ]
                },
                {
                    href: "/",
                    text: "Alumnos",
                    subItems: [
                        {
                            href: "/",
                            text: "Departamento Alumnos"
                        },
                        {
                            href: "/",
                            text: "Becas"
                        },
                        {
                            href: "/",
                            text: "Bolsa de trabajo"
                        },
                        {
                            href: "/",
                            text: "Cátedras Online"
                        },
                        {
                            href: "/",
                            text: "Tutorías"
                        },
                        {
                            href: "/",
                            text: "Bedelía Informa"
                        }, 
                        {
                            href: "/",
                            text: "Autogestión"
                        },
                        {
                            href: "/",
                            text: "Biblioteca"
                        }
                    ]
                }
            ]  
        }
    ]

    return (
        <>
            <header 
                className="pt-6 pb-14">
                    <div className="container mx-auto flex flex-row justify-between relative">

                        <div className="flex mx-auto md:ml-0 lg:justify-normal">
                            <a 
                                href="/"                               
                                aria-label="Ir a la pagina principal de inicio">
                                <img className="lg:h-20 md:h-16 h-12" src="/assets/utn-logo.png" alt=""></ img>
                            </a>
                        </div>                       

                        <div className="flex flex-row gap-x-4 items-center">
                            <HeaderButton href={"https://frro.cvg.utn.edu.ar/" }>
                                Catedras Online
                            </HeaderButton>

                            <HeaderButton href={"https://mail.frro.utn.edu.ar/" }>
                                Webmail
                            </HeaderButton>
                        
                            <HeaderNavBarMobile navBarItems={navBarItems}/>

                        </div>
                                
                        <HeaderNavBar navBarItems={navBarItems}/>

                    </div>
                </header>            

        </>

        
    )
}