import React, {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap';
import "./TimerForm.css"
import Timer from './Timer'
import "./Timer-input.css"
export interface TimerObject {
    job: string;
    id: number;
    dateStart: number;
    dateEnd: number;
}

//return todolist wrapped in div, pass task to TimerList when delete button is clicked
interface TimerFormProps {
    todoList: TimerObject[];
    onDelete: (task:TimerObject)=>void

}

const TimerForm = (props: TimerFormProps) => {
    const handleDelete = (todo: TimerObject) =>{
        props.onDelete(todo)
    }
    return (<div className = "todoList">
        {props.todoList.map((todo)=>(
        <div>
        <Timer todo={todo}/>
        </div>
        ))}
        </div>)
    
}
    


export default TimerForm
