function Button( {children, ...props}){
    return (
        <button 
        className="px-4 py-8 font-semibold uppercase text-black bg-amber-400 rounded-s-md hover:bg-amber-600 "
        {...props}
        > {children} </button>
    )
}
export default Button