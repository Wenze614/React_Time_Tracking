import React, {useState} from 'react'
import TimerInput from './Timer-input'
import TimerForm, {TimerObject}from './TimerForm'



function TimerList() {
    const [todoList,setTodoList] = useState<TimerObject[]>([])

    const handleSubmit = (task:TimerObject) => {
        const newList = [task, ...todoList]
        setTodoList(newList)
    }
    const handleDelete = (task:TimerObject) => {
        var newList = todoList.filter((todo)=>{return todo.id != task.id })
        setTodoList(newList)
    }
    return (
        <div>
            <TimerInput placeholderText="Add Your Task Here..." onSubmit={handleSubmit}/>
            <TimerForm todoList={todoList} onClick={handleDelete}/>
        </div>
    )
}

export default TimerList
