import {useEffect} from 'react'
import "./Timer.css"
import {TimerObject}from './features/timer/timerSlice'
import {useAppDispatch } from './app/hook'
import {pauseTimer, resumeTimer, deleteTimer, addCounter} from './features/timer/timerSlice'
const Timer = (props:{todo: TimerObject}) =>{
    const dispatch = useAppDispatch()
    const isPaused = props.todo.status
    const this_ID = props.todo.id
    useEffect(() => {
        if (isPaused === false){
            const id = setInterval(() => {
                dispatch(addCounter(this_ID))
            },1000)
            return ()=>clearInterval(id)
        }
    },[isPaused])

    return  (<div key = {props.todo.id} className = "task-item">
                    <div className = "job-content">{props.todo.job}</div>
                    <div className = {!isPaused ? "timer-content":"timer-content paused"} >
                        <span className = "important-numbers">{Math.floor(this_ID/3600)}</span>h &nbsp;
                        <span className = "important-numbers">{Math.floor(((this_ID%3600))/60)}</span>min &nbsp;
                        <span className = "important-numbers">{this_ID%60}</span>s</div>
                            {!isPaused ?
                                (<button className="activate-button" onClick={()=>dispatch(pauseTimer(props.todo.id))}>Pause</button>)
                                :
                                (<button className="activate-button" onClick={()=>dispatch(resumeTimer(props.todo.id))}>Resume</button>)
                            }
                    <button className="delete-button" onClick={()=>dispatch(deleteTimer(props.todo.id))}>X</button>
                </div>
               
    )
    
}

export default Timer
