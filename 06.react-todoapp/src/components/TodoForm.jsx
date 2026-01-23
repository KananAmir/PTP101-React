import { useState } from "react"
import { nanoid } from 'nanoid'
import Swal from "sweetalert2"

const TodoForm = ({ todos, setTodos }) => {
  const [todoText, setTodoText] = useState('')
  const [error, setError] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!todoText.trim()) {
      setError(true)
      return;
    }

    const newTodo = {
      id: nanoid(),
      text: todoText,
      completed: false
    }

    // console.log(newTodo);

    //first version
    // todos.push(newTodo)
    // setTodos([...todos])


    // second version
    setTodos([...todos, newTodo])

    //third
    // setTodos((prev)=>[...prev, newTodo])

    setError(false)
    setTodoText('')

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your todo added successfully!",
      showConfirmButton: false,
      timer: 1000,
    });
  }
  return (
    <form onSubmit={handleSubmit} id="todoForm">
      <input
        className="todo-input"
        type="text"
        placeholder="enter ur todo here.."
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
      <button type="submit">Add Todo</button>

      {error && (<p className="error-message">input can not be empty!</p>)}
    </form>
  )
}

export default TodoForm 