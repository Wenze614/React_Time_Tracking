import React, {useState} from 'react'
import {task} from './TimerList'

const TimerForm = (todoList: task[]) => {
    return (
        <div>
            {todoList.map((todo) => {<div><div>{todo.id}</div><div>{todo.content}</div></div>})}
        </div>
    )
}
    


export default TimerForm
