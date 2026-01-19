import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    console.log('Counter component rendered!');
    return (
        <div>
            <button onClick={()=>{
                // setCount(count + 1)
                // setCount(count + 1)
                // setCount(count + 1)

                // setCount((prevCount)=> prevCount + 1)
                // setCount((prevCount)=> prevCount + 1)
                setCount((prevCount)=> prevCount + 1)
            }}>increment</button>
            <span>{count}</span>
            <button onClick={()=>{
                setCount((prevCount) => prevCount - 1)
            }}>decrement</button>

        </div>
    )
}

export default Counter

// hooks: useState, useEffect, useContext, useReducer, useRef, custom hooks 