import TimerInput from './Timer-input'
import TimerForm from './TimerForm'
import {TimerObject}from './features/timer/timerSlice'
import {useAppDispatch, useAppSelector} from './app/hook'
import {addTimer, selectTimer} from './features/timer/timerSlice'
function TimerContainer() {
    const dispatch = useAppDispatch()
    const todoList = useAppSelector(selectTimer)

    const handleSubmit = (task:TimerObject) => {
        dispatch(addTimer(task))
    }

    return (
        <div >
            <TimerInput placeholderText="Add Your Task Here..." onSubmit={handleSubmit}/>
            <TimerForm todoList={todoList} />
        </div>
    )
}

export default TimerContainer
