import { useDispatch, useSelector } from "react-redux"
import { addTodo, removeTodo, toggleTodo, clearAll } from "../redux/features/todo/todoSlice";
import { useState } from "react";
const Todo = () => {
    const [inputVal, setInputVal] = useState("");
    const todos = useSelector((state) => state.todo.todos)
    const [filter, setFilter] = useState(localStorage.getItem("todoFilter") || "all");
    const [searchTerm, setSearchTerm] = useState("");

    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputVal.trim() === '') return;

        const newTodo = {
            id: Date.now(),
            text: inputVal,
            done: false,
            cretedAt: new Date().toISOString()
        }

        dispatch(addTodo(newTodo))
        setInputVal("");

    }

    const handleDelete = (id) => {
        dispatch(removeTodo(id))
    }

    const handleDone = (id) => {
        dispatch(toggleTodo(id))
    }



    const filteredTodos = todos
        .filter((todo) => {
            switch (filter) {
                case 'completed':
                    return todo.done
                case 'uncompleted':
                    return !todo.done
                case 'all':
                    return true
            }
        })
        .filter((todo) => todo.text.trim().toLowerCase().includes(searchTerm.trim().toLowerCase()))


    console.log(filteredTodos);

    return (
        <div>
            <h2>Todo Example</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" name="" id=""
                    value={inputVal}
                    onChange={(e) => {
                        setInputVal(e.target.value)
                    }} />
                <button type="submit">Add Todo</button>
            </form>

            <div style={{ border: '1px solid', padding: '1rem' }}>
                {
                    todos.length > 0 && <button onClick={() => dispatch(clearAll())}>Clear All</button>
                }

                <select name="" id="" onChange={(e) => {
                    setFilter(e.target.value)
                    localStorage.setItem("todoFilter", e.target.value)
                }}>
                    {/* <option value="" selected disabled>Filter</option> */}
                    <option value="completed">Completed Todos</option>
                    <option value="all">All Todos</option>
                    <option value="uncompleted">Uncompleted Todos</option>
                </select>

                <hr />
                <input type="search" placeholder="search todo.." onChange={(e) => {
                    setSearchTerm(e.target.value)
                }} />

            </div>


            {
                todos.length === 0
                    ?
                    <p>No todos available</p>
                    :
                    <ul>
                        {
                            filteredTodos.map((todo) => {
                                return (
                                    <li key={todo.id}>
                                        <span style={{
                                            textDecoration: todo.done ? 'line-through' : 'none'
                                        }}>{todo.text}
                                            <button onClick={() => { handleDelete(todo.id) }}>delete</button></span>
                                        <button
                                            onClick={() => {
                                                handleDone(todo.id)
                                            }}
                                        >{
                                                todo.done ? 'Undone' : 'Done'
                                            }</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
            }
        </div>
    )
}

export default Todo