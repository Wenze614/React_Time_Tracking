import {useState} from 'react'
import TimerInput from './Timer-input'
import TimerForm, {TimerObject}from './TimerForm'

function TimerContainer() {
    const [todoList,setTodoList] = useState<TimerObject[]>([])

    const handleSubmit = (task:TimerObject) => {
        const newList = [...todoList, task]
        setTodoList(newList)
    }

    return (
        <div >
            <TimerInput placeholderText="Add Your Task Here..." onSubmit={handleSubmit}/>
            <TimerForm todoList={todoList} />
        </div>
    )
}

export default TimerContainer
