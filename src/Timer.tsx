import React, {useState, useEffect} from 'react'
import "./Timer.css"
import { TimerObject } from './TimerForm';

//start and return a new timer
const Timer = (props:{todo: TimerObject}) =>{
    const [timer, setTimer] = useState(0);
    const [isDeleted, setIsDeleted] = useState(false)
    useEffect(() => {
        
            setInterval(() => {
                setTimer(timer => timer+1)
            },1000)
    },[])

    return  (<>{isDeleted
            ?
            (
                <div></div>
            )
            :
            ( 
        <div key = {props.todo.id} className = "task-item">
        <div className = "id-content">{props.todo.id}</div>
        <div className = "job-content">{props.todo.job}</div>
        <div className = "timer-content" >
        <span className = "important-numbers">{Math.floor(timer/3600)}</span>h-
        <span className = "important-numbers">{Math.floor(timer/60)}</span>min-
        <span className = "important-numbers">{timer%60}</span>s</div>
        <button onClick={()=>setIsDeleted(true)}>Delete_test</button>
        </div>
            )
            
        }
        </>
    )
}

export default Timer
