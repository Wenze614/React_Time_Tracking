import React, {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap';
import "./TimerForm.css"
import "./Timer-input.css"
import "./Timer.css"
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
    const [timer, setTimer] = useState(0);
    const handleDelete = (todo: TimerObject) =>{
        props.onDelete(todo)
    }
    useEffect(() => {
        
            setInterval(() => {
                setTimer(timer => timer+1)
            },1000)
    },[])
    return (<div className = "todoList">
        {props.todoList.map((todo)=>(
        <div key = {todo.id} className = "task-item">
        <div className = "id-content">{todo.id}</div>
        <div className = "job-content">{todo.job}</div>
        <div className = "timer-content" >
        <span className = "important-numbers">{Math.floor(timer/3600)}</span>h-
        <span className = "important-numbers">{Math.floor(timer/60)}</span>min-
        <span className = "important-numbers">{timer%60}</span>s</div>
        <button className = "start-button" onClick={() => handleDelete(todo)} >Pause</button>
        <button className = "start-button" onClick={() => handleDelete(todo)} >Resume</button>
        <button className = "start-button" onClick={() => handleDelete(todo)} >Delete</button>
        </div>
        ))}
        </div>)
    
}
    


export default TimerForm
