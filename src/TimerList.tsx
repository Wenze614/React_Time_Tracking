import React, {useState} from 'react'
import TimerInput from './Timer-input'
import TimerForm, {TimerObject}from './TimerForm'

//store the whole task list, and functions to add/delete task from it
function TimerList() {
    const [todoList,setTodoList] = useState<TimerObject[]>([])

    const handleSubmit = (task:TimerObject) => {
        const newList = [...todoList, task]
        setTodoList(newList)
    }
    const handleDelete = (task:TimerObject) => {
        var newList = todoList.filter((todo)=>{return todo.id != task.id })
        setTodoList(newList)
    }
    return (
        <div>
            <TimerInput placeholderText="Add Your Task Here..." onSubmit={handleSubmit}/>
            <TimerForm todoList={todoList} onDelete={handleDelete}/>
        </div>
    )
}

export default TimerList
