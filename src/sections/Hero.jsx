
export function Hero ({children}) {

    return (
        <>
            <div className="overflow-hidden rounded-[10px] relative flex items-center">
                <img className="object-cover w-full h-full" src="src\assets\hero-img.jpg" alt="" />
            
            
                <div className="absolute left-2 md:bottom-12 font-sans">
                    <h1 className="uppercase md:text-5xl text-2xl font-bold">Universidad Tecnologica Nacional</h1>
                    <h2 className="text-xl font-bold">Facultad Regional de Rosario</h2>
                </div>
            </div>

        </>

    )
}