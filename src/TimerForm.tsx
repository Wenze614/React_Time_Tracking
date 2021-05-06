import "./TimerForm.css"
import Timer from './Timer'
import "./Timer-input.css"
import {TimerObject}from './features/timer/timerSlice'

interface TimerFormProps {
    todoList: TimerObject[];
}

const TimerForm = (props: TimerFormProps) => {

    return (
            <div className = "todoList">
                {props.todoList.map((todo)=>(
                    <Timer todo={todo}/>
                ))}
            </div>
        )
}

export default TimerForm
