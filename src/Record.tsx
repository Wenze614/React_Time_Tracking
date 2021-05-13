import {TimerObject}from './features/timer/timerSlice'

interface RecordProps {
    todo : TimerObject
}
export const Record = (props:RecordProps) => {
    return <div>
            <p>{props.todo.job}</p>
            <p>{props.todo.counter}</p>
        </div>
}