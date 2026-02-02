import { useReducer, useRef } from "react";


const initialState = { count: 0 };

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    INC_BY_VALUE: 'inc_by_value',
    RESET: 'reset'
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 };
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 };
        case ACTIONS.INC_BY_VALUE:
            return { count: state.count + action.payload };
        case ACTIONS.RESET:
            return initialState
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const inputRef = useRef(null)
    return (
        <div>
            <button onClick={() => {
                dispatch({
                    type: ACTIONS.INCREMENT,
                })
            }}>inc</button>

            <span>{state.count}</span>

            <button onClick={() => {
                dispatch({
                    type: ACTIONS.DECREMENT,
                })
            }}>dec</button>

            <button onClick={() => {
                dispatch({
                    type: ACTIONS.RESET,
                })
            }}>reset</button>
            <hr />

            <input type="number" ref={inputRef} />
            <button onClick={()=>{
                dispatch({
                    type: ACTIONS.INC_BY_VALUE,
                    payload: inputRef.current.valueAsNumber
                })
            }}>inc by value</button>
        </div>
    )
}

export default Counter