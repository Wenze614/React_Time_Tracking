import React, {useState, useEffect} from 'react'
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
    const [timer, setTimer] = useState(0)
    setInterval(()=>{
        var new_timer = timer + 1
        setTimer(new_timer)
        console.log(timer)
    },1000
    )
    return (<>
        {props.todoList.map((todo)=>(
        <div key = {todo.id} className = "task-item">
        <div className = "id-content">{todo.id}</div>
        <div className = "job-content">{todo.job}</div>
        <div className = "timer-content">{timer}</div>
        
        <Button variant="outline-light">STOP</Button>
        </div>
        ))}
        </>)
    
}
    


export default TimerForm
