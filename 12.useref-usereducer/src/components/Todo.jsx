import React, { act, useReducer } from 'react'



const initialState = {
    todos: [],
    inputValue: ''
}

const reducer = (state, action) => {
    console.log(action);
    console.log(state);


    switch (action.type) {
        case 'SET_INPUT_VALUE':

            return {
                ...state,
                inputValue: action.payload
            }
        case 'ADD_TODO':
            // const newTodo = {
            //     id: Date.now(),
            //     text: action.payload,
            //     done: false
            // }
            return {
                ...state,
                todos: [...state.todos, {
                    id: Date.now(),
                    text: action.payload,
                    done: false
                }],
                inputValue: ''
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter((t) => t.id !== action.payload)
            }
        default: return state;
    }
}

const Todo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(state);

        if (state.inputValue.trim() === '') return;


        dispatch({
            type: 'ADD_TODO',
            payload: state.inputValue
        })
    }





    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter todo...'
                    value={state.inputValue}
                    onChange={(e) => {
                        dispatch({
                            type: 'SET_INPUT_VALUE',
                            payload: e.target.value
                        })

                    }} />
                <button type='submit'>Add Todo</button>
            </form>
            <hr />
            {state.todos.length === 0
                ?
                <p>No todos yet!</p>
                :
                <ul>
                    {
                        state.todos.map(todo => {
                            return <li key={todo.id}>
                                {todo.text}
                                <button onClick={() => {
                                    dispatch({
                                        type: 'DELETE_TODO',
                                        payload: todo.id
                                    })
                                }}>delete</button>
                            </li>
                        })
                    }
                </ul>
            }

        </div>
    )
}

export default Todo