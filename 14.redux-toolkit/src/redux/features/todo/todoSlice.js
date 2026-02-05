import { createSlice } from '@reduxjs/toolkit'


const storedTodos = JSON.parse(localStorage.getItem("todos"))

const initialState = {
    todos: storedTodos ? storedTodos : []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(action);

            // state.todos.push(action.payload)
            state.todos = [...state.todos, action.payload]
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },
        toggleTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, done: !todo.done }
                }
                return todo
            })
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },
        clearAll: (state)=>{
            // state.todos = []
            state.todos.length = 0
            localStorage.setItem("todos", JSON.stringify(state.todos))
        }
    }
})


export const { addTodo, removeTodo, toggleTodo, clearAll } = todoSlice.actions
export default todoSlice.reducer