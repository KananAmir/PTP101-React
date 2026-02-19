import { useState } from "react"
import Decrement from "./Decrement"
import Increment from "./Increment"
import IncByValue from "./IncByValue"

const Counter2 = () => {
    const [count, setCount] = useState<number>(0)

    const increment = () => {
        setCount((c) => c + 1)
    }

    const decrement = () => {
        setCount((c) => c - 1)
    }

    const incrementByvalue = (value: number): void => {
        console.log("   value: ", value);
        
        setCount((c) => c + value)
    }

    return ( 
        <div>

            <Increment onIncrement={increment} />
            <span>{count}</span>
            <Decrement onDecrement={decrement} />
            <hr />
            <IncByValue onIncrementByValue={incrementByvalue} />

        </div>
    )
}

export default Counter2