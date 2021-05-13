import {useState, useEffect} from 'react'
import "./Timer.css"
import {TimerObject}from './features/timer/timerSlice'
import {useAppDispatch } from './app/hook'
import {pauseTimer, resumeTimer, deleteTimer, saveTimer, saveCounter} from './features/timer/timerSlice'
interface TimerProps {
    todo: TimerObject
}
const Timer = (props:TimerProps) =>{
    const dispatch = useAppDispatch()
    const isPaused = props.todo.status
    const [counter, setCounter] = useState(0)
    // const [id, setID] = useState<ReturnType<typeof setInterval>>()
    // // var id : ReturnType<typeof setInterval>
    // useEffect(() => {
    //     if (isPaused === false){
    //         setID( setInterval(() => {
    //             dispatch(addCounter(this_ID))
    //         },1000))
    //         return () => {clearInterval(id!)}
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[isPaused])

    useEffect(() => {
        if (isPaused === false){
            const id = setInterval(() => {
                setCounter(counter => counter+1)
            }, 1000)
            return () => {clearInterval(id)}
        }
    }, [isPaused])
    return  (<div key = {props.todo.id} className = "task-item">
                    <button className="save-button" onClick={()=>{dispatch(saveTimer(props.todo.id));dispatch(saveCounter({id:props.todo.id,counter:counter}))}}>√</button>
                    <div className = "job-content">{props.todo.job}</div>
                    <div className = {!isPaused ? "timer-content":"timer-content paused"} >
                        <span className = "important-numbers">{Math.floor(counter/3600)}</span>h &nbsp;
                        <span className = "important-numbers">{Math.floor(((counter%3600))/60)}</span>min &nbsp;
                        <span className = "important-numbers">{counter%60}</span>s</div>
                            {!isPaused ?
                                (<button className="activate-button" onClick={()=>dispatch(pauseTimer(props.todo.id))}>Pause</button>)
                                :
                                (<button className="activate-button" onClick={()=>dispatch(resumeTimer(props.todo.id))}>Resume</button>)
                            }
                    <button className="delete-button" onClick={()=>{dispatch(deleteTimer(props.todo.id))}}>X</button>
                </div>
               
    )
    
}

export default Timer
