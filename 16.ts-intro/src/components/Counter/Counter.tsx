import { useState } from "react"
import Decrement from "./Decrement"
import Increment from "./Increment"
import Reset from "./Reset"

const Counter = () => {

    const [count, setCount] = useState<number>(0)
    return (
        <div> 
            <Increment setCount={setCount} count={count} />
            <h2>{count}</h2>
            <Decrement setCount={setCount}/>
            <br />
            <Reset setCount={setCount}/>
        </div>
    )
}

export default Counter