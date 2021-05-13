import {TimerObject}from './features/timer/timerSlice'

interface RecordProps {
    todo : TimerObject
}
export const Record = (props:RecordProps) => {
    return <p>{props.todo.job}</p>
}