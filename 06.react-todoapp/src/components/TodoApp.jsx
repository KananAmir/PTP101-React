import { useState } from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import ClearAll from "./ClearAll"

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [selectedIds, setSelectedIds] = useState([])
  const handleDeleteSelectedTodos = () => {

    setTodos((prevTodos) => prevTodos.filter((todo) => !selectedIds.includes(todo.id)))
    setSelectedIds([])
  }
  return (
    <div className="todo-app">
      <TodoForm todos={todos} setTodos={setTodos} />
      <hr />
      {/* {todos.length !== 0 && <ClearAll setTodos={setTodos}/>} */}
      <div className="btns">
        <ClearAll setTodos={setTodos} todos={todos} />
        <button className="delete-selected-btn" disabled={selectedIds.length === 0 ? true : false} onClick={handleDeleteSelectedTodos}>Delete Selected Todos</button>
      </div>
      <hr />
      <TodoList todos={todos} setTodos={setTodos} setSelectedIds={setSelectedIds} />
    </div>
  )
}

export default TodoApp
