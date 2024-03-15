import { HeaderButton } from './HeaderButton'

export function CareerContent({ value, selectedTab, previousTab}) {
    
    console.log("Selected Tab: "+typeof(selectedTab)+"| ValueId:"+typeof(value.id));
    return(
        <div 
            className={`text-xs leading-normal ${selectedTab === value.id ? 'py-6 ' : 'py-6 hidden'}
            ${previousTab > selectedTab ? 'sm:animate-slide-in-left animate-duration-slower' : 'sm:animate-slide-in-right animate-duration-slower'}`}>
            <h2 className="text-4xl font-bold pb-4">{value.name}</h2>                   
            <div className="flex justify-between flex-col md:flex-row">
                <div className="w-full md:w-3/5 pb-5">
                    <p className="text-lg">{value.description}</p>
                    <button 
                        href={value.href}
                        className='mt-[1.9rem] text-base bg-accent hover:bg-accent-tertiary text-white  py-2 px-4 rounded-[20px]
                        hover:scale-105 transition-all duration-300 ease-in-out 
                        '>
                        Saber mas sobre {value.name}
                    </button>
                </div>
                <div className="w-full md:w-2/5">
                    <img className="mx-auto lg:mx-0 max-w-full h-auto" 
                    src={value.ilustration} alt={`Ilustracion en referencia a ${value.name}`}/>
                </div>
            </div>
        </div>
    )
}