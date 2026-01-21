import React, { useState } from 'react'

const IncrementByValue = ({ setCount }) => { 
    const [inputValue, setInputValue] = useState(0) 


    const handleIncrementByValue = ()=>{
        setCount((prevState)=> prevState + inputValue)
    }
    return (
        <>
            <input type="number" name="" id="" onChange={(e)=>{setInputValue(e.target.valueAsNumber)}}/>
            <button onClick={handleIncrementByValue}>increment by value</button>
        </>
    ) 
}

export default IncrementByValue 