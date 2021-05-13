import {useAppSelector} from './app/hook'
import {selectSavedTimer} from './features/timer/timerSlice'
import { Record } from './Record'
import "./TimerList.css"
const TimerList = () => {
    const todoList = useAppSelector(selectSavedTimer)

    return <div className = "timer-list">
                {todoList.map((todo)=>(
                    <Record todo={todo}/>
                ))}
            </div>
}

export default TimerList