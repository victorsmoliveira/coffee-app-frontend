function FormInput({
    label,
    id,
    type,
    value,
    onChange,
    min,
    max,
    step,
    className,
    inputClassName,
}) {
    return (
        <div className={`md:flex md:items-center mb-6 ${className}`}>
            <div className="md:w-1/2">
                <label
                    className="block text-gray-900 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor={id}
                >
                    {label}
                </label>
            </div>
            <div className="md:w-1/2 flex items-center">
                <input
                    className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ${inputClassName}`}
                    id={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    min={min}
                    max={max}
                    step={step}
                />
                {type === "range" && <span className="ml-2">{value}</span>}
            </div>
        </div>
    );
}

export default FormInput;