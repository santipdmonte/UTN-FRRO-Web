export function CareerTab ({children, selected, onClick }) {
    return (
        <button             
            className={`py-1.5 px-3 font-medium rounded-lg duration-200 text-gray-500 hover:text-white  hover:bg-accent   
            ${selected ? 'shadow-sm bg-accent text-white pointer-events-none' : ''}`}
            onClick={onClick}>
            {children}
        </button>
    )
}