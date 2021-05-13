import {TimerObject}from './features/timer/timerSlice'
import './Record.css'
interface RecordProps {
    todo : TimerObject
}
export const Record = (props:RecordProps) => {
    const counter = props.todo.counter
    return <div className = "record-item">
                <div className = "job-content record">{props.todo.job}</div>
                    <div className = "timer-content record" >
                        <span className = "important-numbers">{Math.floor(counter/3600)}</span>h &nbsp;
                        <span className = "important-numbers">{Math.floor(((counter%3600))/60)}</span>min &nbsp;
                        <span className = "important-numbers">{counter%60}</span>s</div>
         </div>
}