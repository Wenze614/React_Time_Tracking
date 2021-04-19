import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import "./TimerForm.css"
import Timer from 'react-compound-timer'
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
    console.log(props.todoList)
    return (<>
        {props.todoList.map((todo)=>(
        <div key = {todo.id} className = "task-item">
        <div className = "id-content">{todo.id}</div>
        <div className = "job-content">{todo.job}</div>
        <Timer
                initialTime={0}
                >
                {() => (
                <React.Fragment>
                <Timer.Hours /> hours
                <Timer.Minutes /> minutes
                <Timer.Seconds /> seconds
                </React.Fragment>
                )}
        </Timer>
        <Button variant="outline-light">STOP</Button>
        </div>
        ))}
        </>)
    
}
    


export default TimerForm
