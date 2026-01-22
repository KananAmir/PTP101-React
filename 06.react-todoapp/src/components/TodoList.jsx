import TodoItem from "./TodoItem"
import Swal from 'sweetalert2'

const TodoList = ({ todos, setTodos, setSelectedIds }) => {

  const handleDelete = (todoId) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        setTodos((prevTodos) => prevTodos.filter((q) => q.id !== todoId))

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  if (todos.length === 0) {
    return (
      <p>No todo item yet!</p>
    )
  }


  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} setSelectedIds={setSelectedIds}/>
        )
      })}
    </ul>
  )
}

export default TodoList

