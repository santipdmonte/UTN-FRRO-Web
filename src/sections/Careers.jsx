import { useState } from "react";
import { CareerTab } from "../components/CareerTab";
import { CareerContent } from "../components/CareerContent";

const tabItems =[ 
    {
        id: 1, 
        name: "Ing. en Sistemas",
        ilustration: "src/assets/career/sistemas.svg",
        href: "/",
        description: "Se ocupa del diseño (desarrollo creativo de una idea), implementación (idea que se materializa), organización y control de la información requerida por organismos públicos y privados. En esta ingeniería convergen diversos campos de conocimiento: matemática, programación, gestión de datos, software, hardware y redes. También se ocupa de estudios de factibilidad, presupuestación, dirección de cómo realizamos el diseño propuesto y proyectos vinculados con los sistemas de información de una organización."},
    {
        id: 2,
        name: "Ing. Quimica",
        ilustration: "src/assets/career/quimica.svg",
        href: "/",
        description: "Es la rama de la ingeniería que se dedica al estudio, síntesis, desarrollo, diseño, operación y optimización de todos aquellos procesos industriales que producen cambios físicos, químicos y/o bioquímicos en los materiales. En términos generales podemos decir que la INGENIERÍA QUÍMICA es la aplicación de la, química, la física, la biología y la matemática, al proceso de convertir materias primas o productos químicos en productos útiles o de mayor valor. La industria química es muy importante en la economía de muchos países y, de hecho, muchos avances recientes en dispositivos electrónicos, médicos y de mejora ambiental, surgen a partir de innovaciones desarrolladas por ingenieras/os químicas."},
    {
        id: 3,
        name: "Ing. Mecanica",
        ilustration: "src/assets/career/mecanica.svg",
        href: "/",
        description: "Es un campo muy amplio de la ingeniería que implica el uso de los principios de la física para el análisis, diseño, fabricación y mantenimiento de los sistemas mecánicos. Tradicionalmente, ha sido la rama de la Ingeniería que mediante la aplicación de los principios físicos ha permitido la creación de dispositivos útiles, como utensilios y máquinas. Los ingenieros/as mecánicos usan principios como el calor, la fuerza y la conservación de la masa y de la energía para analizar sistemas físicos, estáticos y dinámicos, contribuyendo a diseñar objetos. La INGENIERÍA MECÁNICA es la rama de las máquinas, equipos e instalaciones teniendo siempre en mente aspectos ecológicos y económicos para el beneficio de la sociedad."},
    {
        id: 4,
        name: "Ing. Electronica",
        ilustration: "src/assets/career/electronica.svg",
        href: "/",
        description: "Es el arte de solucionar los problemas que afectan a las personas en un tiempo y lugar determinados. Atento a este espíritu, la INGENIERÍA ELECTRÓNICA resuelve problemas de la sociedad relacionados con las comunicaciones, la informática, el control de procesos, la automatización, la robótica, el transporte, la medicina y otras aplicaciones necesarias para la mejora de la calidad de vida de las personas y del medio ambiente en general. También se ocupa de tareas tales como estudios de factibilidad (se puede hacer o no), presupuestación (cuánto cuesta), dirección (cómo realizamos el diseño propuesto) y toda otra actividad vinculada con la realización de sistemas electrónicos."},
    {
        id: 5,
        name: "Ing. Civil",
        ilustration: "src/assets/career/civil.svg",
        href: "/",
        description: "civil Tab"}
]

export function Careers (){

    const [selectedTab, setSelectedTab] = useState(tabItems[0].id);
    const [previousTab, setPreviousTab] = useState(tabItems[0].id);

    const handleTabChange = (newTab) => {
        setPreviousTab(selectedTab); 
        setSelectedTab(newTab); 
    };

    return (

        <section className="departments section my-4">
            <h2 className="bold text-5xl pb-4">Carreras</h2>                
                <div
                    className="max-w-screen-xl mt-2 px-4 md:px-8 bg-slate-200 rounded-[10px] text-[#222] p-6 items-center"
                    value={selectedTab}>
                    <div
                        className="hidden gap-x-3 py-1 overflow-x-auto px-px text-sm sm:flex"
                        aria-label="Manage your account">

                        {tabItems.map((item) => (
                            <CareerTab
                                key={item.id}
                                value={item}
                                selected={selectedTab === item.id}
                                onClick={() => handleTabChange(item.id)}>

                                {item.name}

                            </CareerTab>
                        ))}

                    </div>

                    <div className="relative text-gray-500 sm:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="#ffffff"
                            className="pointer-events-none w-5 h-5 absolute right-2 inset-y-0 my-auto">

                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"/>

                        </svg>

                        <select
                            value={selectedTab}
                            className=" text-sm rounded-lg block w-full appearance-none p-2.5 bg-accent border-accent-secondary 
                            text-white focus:ring-accent-tertiary focus:border-accent-tertiary"
                            onChange={(e) => setSelectedTab(e.target.value)}>

                            {tabItems.map((item) => (
                                <option key={item.id} idx={item.id}>
                                {item.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {tabItems.map((item) => (
                        <CareerContent 
                            key={item.id}
                            value={item}
                            previousTab={previousTab}
                            selectedTab={selectedTab}>                       
                        </CareerContent>
                    ))}

                </div>
        </section>

        
      );

}