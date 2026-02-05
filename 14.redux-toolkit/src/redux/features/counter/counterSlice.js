import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            console.log("state", state.value);
            console.log("action", action);
            state.value += 1
        },
        decrement: (state)=>{
            state.value -= 1
        },
        incrementByValue: (state, action)=>{
            state.value += action.payload
        },
        reset: (state)=>{
            state.value = 0
        }
    }
})

export const { increment, decrement, incrementByValue, reset } = counterSlice.actions
export default counterSlice.reducer