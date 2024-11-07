function Input ({label, Error, ...props}) {

    let classesDoLabel = "block text-xs font-bold uppercase text-stone-300 my-4";
    let classesDoInput = `px-3 py-2 border rounded-md ${
    Error ? 'border-red-500 bg-red-100' : 'border-stone-300'
  }`;

  return (
    <p>
        <label className={classesDoLabel}>
            {label}
        </label>
        <input className={classesDoInput} {...props}/>
        {Error && (
        <p className="text-xs text-red-500 mt-1">This field is required or invalid.</p>
      )}
    </p>
  )
}

export default Input;