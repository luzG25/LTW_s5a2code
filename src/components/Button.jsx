function Button({ children, variant, ...props }) {
    const variantStyle = variant === 'signIn'
      ? "bg-yellow-500 text-black font-bold hover:bg-yellow-600" 
      : "bg-blue-600 text-white hover:bg-blue-700";              
  
    return (
      <button
        className={`px-4 py-2 font-semibold uppercase rounded-xl transition-colors duration-200 ${variantStyle}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  
  export default Button;