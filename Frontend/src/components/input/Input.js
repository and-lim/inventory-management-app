import React from 'react'

const Input = (props) => {
    const {name,type,id,value,onChange,placeholder} = props
    return (
        <input
            id={id}
            name={name}
            type={type}
            autoComplete="email"
            required
            className="relative shadow-3xl block w-full rounded-t-md border-2 border-black py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input