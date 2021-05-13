import {useAppSelector} from './app/hook'
import {selectTimer} from './features/timer/timerSlice'
import { Record } from './Record'
import "./TimerList.css"
const TimerList = () => {
    const todoList = useAppSelector(selectTimer)

    return <div className = "timer-list">
                {todoList.map((todo)=>(
                    <Record todo={todo}/>
                ))}
            </div>
}

export default TimerList