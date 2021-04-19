import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import "./TimerForm.css"

export interface TimerObject {
    job: string;
    id: number;
    elapsedTime: number;
    dateStart: number;
    dateEnd: number;
}


interface TimerFormProps {
    todoList: TimerObject[];
}

const TimerForm = (props: TimerFormProps) => {
    console.log(props.todoList)
    return (<>
        {props.todoList.map((todo)=>(
        <div key = {todo.id} className = "task-item">
        <div className = "id-content">{todo.id}</div>
        <div className = "job-content">{todo.job}</div>
        <div className = "timer-content">{todo.elapsedTime}</div>
        <Button variant="outline-light">STOP</Button>
        </div>
        ))}
        </>)
    
}
    


export default TimerForm
