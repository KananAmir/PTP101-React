import { useState } from "react";
import type { Todo } from "../types/todo";


interface TodoFormProps {
    onAddTodo: (todo: Todo) => void;
}

const TodoForm = ({ onAddTodo }: TodoFormProps) => {
    const [todoText, setTodoText] = useState<string>("")
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            const newTodo: Todo = {
                id: Date.now(),
                text: todoText.trim(),
                isCompleted: false
            }

            onAddTodo(newTodo)
            setTodoText("")
        }}>
            <input type="text" placeholder="enter todo here.." value={todoText} onChange={(e) => {
                setTodoText(e.target.value)
            }} />
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoForm