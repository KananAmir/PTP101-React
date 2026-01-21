import { useState } from "react"
import Increment from "./Increment"
import Decrement from "./Decrement"
import Reset from "./Reset"
import IncrementByValue from "./IncrementByValue"

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((prevState) => prevState + 1)
    }
    const decrement = () => {
        setCount((prevState) => prevState - 1)
    }
    // const reset = () => {
    //     setCount(0)
    // }


    return (
        <div>
            <Increment increment={increment} />
            <span>{count}</span>
            <Decrement decrement={decrement} />
            <Reset setCount={setCount} />
            <hr />
            <IncrementByValue setCount={setCount} />
        </div>
    )
}

export default Counter

// hooks: useState, useEffect, useContext, useReducer, useRef, custom hooks 