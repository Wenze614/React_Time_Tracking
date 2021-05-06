import {useState, useEffect} from 'react'
import "./Timer.css"
import {TimerObject}from './features/timer/timerSlice'
import {useAppDispatch } from './app/hook'
import {pauseTimer} from './features/timer/timerSlice'
const Timer = (props:{todo: TimerObject}) =>{
    const [timer, setTimer] = useState(0);
    const [isDeleted, setIsDeleted] = useState(false)
    const dispatch = useAppDispatch()
    const isPaused = props.todo.status
    useEffect(() => {
        if (isPaused === false){
            const id = setInterval(() => {
                setTimer(timer => timer+1)
            },1000)
            return ()=>clearInterval(id)
        }
    },[isPaused])

    return  (
                <div >
                {isDeleted ? (null) : (
                <div key = {props.todo.id} className = "task-item">
                    <div className = "job-content">{props.todo.job}</div>
                    <div className = {!isPaused ? "timer-content":"timer-content paused"} >
                        <span className = "important-numbers">{Math.floor(timer/3600)}</span>h &nbsp;
                        <span className = "important-numbers">{Math.floor(((timer%3600))/60)}</span>min &nbsp;
                        <span className = "important-numbers">{timer%60}</span>s</div>
                            {!isPaused ?
                                (<button className="activate-button" onClick={()=>dispatch(pauseTimer(props.todo.id))}>Pause</button>)
                                :
                                (<button className="activate-button" onClick={()=>console.log("na")}>Resume</button>)
                            }
                    <button className="delete-button" onClick={()=>setIsDeleted(true)}>X</button>
                </div>
                )
            }
            </div>
    )
    
}

export default Timer
