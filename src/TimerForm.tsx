import React, {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap';
import "./TimerForm.css"
import Timer from './Timer'

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

    return (<>
        {props.todoList.map((todo)=>(
        <div key = {todo.id} className = "task-item">
        <div className = "id-content">{todo.id}</div>
        <div className = "job-content">{todo.job}</div>
        <Timer/>
        
        <Button variant="outline-light">STOP</Button>
        </div>
        ))}
        </>)
    
}
    


export default TimerForm
