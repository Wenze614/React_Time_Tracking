import React, {useState, useEffect, isValidElement} from 'react'
import "./Timer.css"
import { TimerObject } from './TimerForm';

//start and return a new timer
const Timer = (props:{todo: TimerObject}) =>{
    const [timer, setTimer] = useState(0);
    const [isDeleted, setIsDeleted] = useState(false)
    const [isActivate,setActivate] = useState(true)
    useEffect(() => {
        if (isActivate){
            const id = setInterval(() => {
                setTimer(timer => timer+1)
            },1000)
            return ()=>clearInterval(id)
        }
    },[isActivate])

    return  (<>{isDeleted
            ?
            (
                <div></div>
            )
            :
            ( 
        <div key = {props.todo.id} className = "task-item">
        {/* <div className = "id-content">{props.todo.id}</div> */}
        <div className = "job-content">{props.todo.job}</div>
        <div className = {isActivate ? "timer-content":"timer-content paused"} >
        <span className = "important-numbers">{Math.floor(timer/3600)}</span>h &nbsp;
        <span className = "important-numbers">{Math.floor(((timer%3600))/60)}</span>min &nbsp;
        <span className = "important-numbers">{timer%60}</span>s</div>
        {isActivate
        ?
        (<button className="activate-button" onClick={()=>setActivate(false)}>Pause</button>)
        :
        (<button className="activate-button" onClick={()=>setActivate(true)}>Resume</button>)
        }
        <button className="delete-button" onClick={()=>setIsDeleted(true)}>X</button>
        </div>
            )
            
        }
        </>
    )
}

export default Timer
