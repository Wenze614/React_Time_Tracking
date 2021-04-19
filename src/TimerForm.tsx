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


interface TimerFormProps {
    todoList: TimerObject[];
    onClick: (task:TimerObject)=>void

}

const TimerForm = (props: TimerFormProps) => {
    const onclick = (todo: TimerObject) =>{
        props.onClick(todo)
    }
    return (<div className = "todoList">
        {props.todoList.map((todo)=>(
        <div key = {todo.id} className = "task-item">
        <div className = "id-content">{todo.id}</div>
        <div className = "job-content">{todo.job}</div>
        <Timer/>
        
        <button className = "start-button" onClick={() => onclick(todo)} >Delete</button>
        </div>
        ))}
        </div>)
    
}
    


export default TimerForm
