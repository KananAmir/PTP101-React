import React from 'react'

const Input = ({ type, placeholder, label }) => {
    return (
        <div>
            <label htmlFor="">{label}</label>
            <input type={type} placeholder={placeholder} />
        </div>
    )
}

export default Input 