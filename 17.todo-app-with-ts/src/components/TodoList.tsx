import type { Todo } from "../types/todo"

interface TodoListProps {
    todos: Todo[];
    onDeleteTodo: (id: number | string) => void;
    onToggleTodo: (id: number | string) => void;
}
 
const TodoList = ({ todos, onDeleteTodo, onToggleTodo }: TodoListProps) => {

    if (todos.length === 0) {
        return (
            <div style={{
                color: 'red'
            }}> 
                No todos yet!
            </div>
        )
    }


    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <input type="checkbox" onChange={()=>onToggleTodo(todo.id)} checked={todo.isCompleted}/>
                    <span style={{
                        textDecoration: todo.isCompleted ? 'line-through' : 'none',
                        color: todo.isCompleted ? 'gray' : 'black'
                    }}>{todo.text}</span>
                    <button style={{ color: 'red' }}
                        onClick={() => onDeleteTodo(todo.id)}
                    >delete</button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList