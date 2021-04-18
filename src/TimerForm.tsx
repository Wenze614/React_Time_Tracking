import React, {useState} from 'react'
import TimerList,{task} from './TimerList'

const TimerForm = (todoList: task[]) => {
    const [todos, setTodos] = useState<task[]>([])
    setTodos(todoList)
    return (
        <div>
            {todos.map((todo) => (
                <div>
                <div>{todo.id}</div>
                <div>{todo.content}</div>
                </div>
            ))}
        </div>
    )
}
    


export default TimerForm
