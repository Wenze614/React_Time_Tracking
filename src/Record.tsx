import {TimerObject}from './features/timer/timerSlice'
import './Record.css'
interface RecordProps {
    todo : TimerObject
}
export const Record = (props:RecordProps) => {
    const counter = props.todo.counter
    return <div className = "record-item">
                <div className = "record-job">{props.todo.job}</div>
                    <div className = "record-time" >
                        <span className = "record-time-number">{Math.floor(counter/3600)}</span>h &nbsp;
                        <span className = "record-time-number">{Math.floor(((counter%3600))/60)}</span>min &nbsp;
                        <span className = "record-time-number">{counter%60}</span>s</div>
         </div>
}