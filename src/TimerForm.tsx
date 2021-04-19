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

}

const TimerForm = (props: TimerFormProps) => {

    return (<div className = "todoList">
        {props.todoList.map((todo)=>(
        <div key = {todo.id} className = "task-item">
        <div className = "id-content">{todo.id}</div>
        <div className = "job-content">{todo.job}</div>
        <Timer/>
        
        <button className = "start-button" >Delete</button>
        </div>
        ))}
        </div>)
    
}
    


export default TimerForm
