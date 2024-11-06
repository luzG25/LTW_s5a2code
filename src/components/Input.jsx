function Input({label, ...props}) {
      
let classesDoLabel = "block text-xs font-bold uppercase text-stone-300"

return (
    <p>
        <label className={classesDoLabel}>
            {label}
        </label>
        <input
            className="w-full px-3 py-2"
            {...props}
        ></input>
    </p>
)


}
export default Input;