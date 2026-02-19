import { useEffect, useState } from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import type { Todo } from "../types/todo"
import { getDataFromLocalStorage, setDataToLocalStorage } from "../utils"

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>(
    getDataFromLocalStorage('todos')
  )


  const addTodo = (todo: Todo) => {
    
    setTodos((prevTodos) => [...prevTodos, todo])

    // setDataToLocalStorage('todos', [...todos, todo])
  } 

  const deleteTodo = (id: number | string) => {
    const updatefTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatefTodos)
    // setDataToLocalStorage('todos', updatefTodos)
  }
 
  const toggleTodo = (id: number | string) => {

    const updatedTodos = todos.map((todo)=>{
      if(todo.id !== id) return todo
      return {
        ...todo, isCompleted: !todo.isCompleted
      }
    }) 
 
    setTodos(updatedTodos)
    // setDataToLocalStorage('todos', updatedTodos)

    
  }

  useEffect(()=>{
    setDataToLocalStorage('todos', todos)
  }, [todos])
 
   
  return (
    <div>

      <TodoForm onAddTodo={addTodo} />
      <hr />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} onToggleTodo={toggleTodo} />
    </div>
  )
}

export default TodoApp
