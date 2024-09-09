export default function ButtonAddCarrinho({className,onClick, values}) {
    return (
        <button 
        className={className}
        onClick={onClick}>
            {values}
        </button>
    )
}