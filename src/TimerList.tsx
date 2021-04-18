import React, {useState} from 'react'
import TimerInput from './Timer-input'

interface task {
    id: number;
    content: string
}
function TimerList() {
    const [todoList,setTodoList] = useState(String[])

    const onSubmit = (text: String) => {
        const newList = [text, ...todoList]
        setTodoList(newList)
    }
    return (
        <div>
            <TimerInput/>
        </div>
    )
}

export default TimerList
