import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, reset, incrementByValue } from "../redux/features/counter/counterSlice"
import { useRef } from "react"
const Counter = () => {

    // const state = useSelector((state) => state)
    // console.log(state);
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const inputRef = useRef()
    
    return (
        <div>
            <h2>
                Counter Component
            </h2>

            <button onClick={()=>{
                dispatch(increment())
            }}>increment</button>
            <span>{count}</span>
            <button onClick={()=>{
                dispatch(decrement())
            }}>decrement</button>
            <button onClick={()=>{
                dispatch(reset())
            }}>reset</button>

            <hr />

            <input type="number" ref={inputRef}/>

            <button onClick={()=>{
                dispatch(incrementByValue(inputRef.current.value ? inputRef.current.valueAsNumber : 0))
            }}>inc by value</button>
        </div>
    )
}

export default Counter