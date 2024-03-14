import {NewsCard} from "../components/NewsCard";
import { PosterCard } from "../components/PosterCard";
import { PosterMobile } from "../components/PosterMobile";

const postersCard = [
    {
        img: "/assets/posters/posters1.png",
        href: "/"
    },
    {
        img: "/assets/posters/posters2.png",    
        href: "/" 
    },
    {
        img: "/assets/posters/posters3.png",    
        href: "/" 
    },
    {
        img: "/assets/posters/posters4.jpg",    
        href: "/" 
    },
    {
        img: "/assets/posters/posters5.jpg",    
        href: "/" 
    },
    {
        img: "/assets/posters/posters6.png",    
        href: "/" 
    }
]

const newsCard = [
    {
        title: "Examen onSET - UTN DAAD 2024",
        description: "El Área de Relaciones Internacionales, dependiente de la Secretaría de Asuntos",
        img: "/assets/news/news-img1.jpeg",
        href: "/"
    },
    {
        title: "Mesas de Exámenes Ing. en Energía Eléctrica - Febrero - Marzo 2024",
        description: "Alumnos de la Carrera de Ing. en Energía Eléctrica. Se les informa las ...",
        img: "/assets/news/news-img2.jpeg",    
        href: "/" 
    },
    {
        title: "Felices Fiestas y Próspero Año Nuevo 2024!",
        img: "/assets/news/news-img3.png",    
        href: "/" 
    },
    {
        title: "Jornada: Socializando la experiencia de escribir la tesis",
        description: "Especialización y Maestría en docencia universitaria UTN FRRo",
        img: "/assets/news/news-img4.jpeg",    
        href: "/" 
    },
    {
        title: "Reunión UTN - Ministerio de Educación de Santa Fe",
        description: "El pasado lunes 22/01/2024, nuestro decano, Ing. Rubén Ciccarelli",
        img: "/assets/news/news-img5.jpg",    
        href: "/" 
    },
    {
        title: "Se completó otra edición de la Formación FullStack",
        description: "En el marco del Convenio entre la UTN",
        img: "/assets/news/news-img6.jpg",    
        href: "/" 
    }
]


export function News (){
    return(
        <>
            <section className="my-10">
                <h2 className="bold text-5xl pb-4">UTN Noticias</h2>

                <article className="flex">
                    <PosterMobile postersCard={postersCard}/>
                </article>

                <div className="grid gap-10 md:p-5">

                    <article className="columns-1 gap-5 sm:columns-3 md:columns-4 lg:columns-5 ">
                        {newsCard.map((card, index) => (
                            <NewsCard
                                key={index} 
                                title={card.title}
                                description={card.description}
                                img={card.img}
                                href={card.href}/>
                        ))}
                    </article>

                    <article className=" hidden columns-1 sm:col-span-2 md:col-span-1 mx-auto">
                        {postersCard.map((card, index) => (
                            <PosterCard
                                key={index} 
                                img={card.img}
                                href={card.href}/>
                        ))}
                    </article>
                    
                </div>   
            </section>
        </>

    )
}