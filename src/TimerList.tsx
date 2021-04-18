import React, {useState} from 'react'
import TimerInput from './Timer-input'

export interface task {
    id: number;
    content: string
}
function TimerList() {
    const [todoList,setTodoList] = useState<task[]>([])

    const onSubmit = (text: task) => {
        const newList = [text, ...todoList]
        setTodoList(newList)
    }
    return (
        <div>
            <TimerInput placeholderText="Add Your Task Here..." onSubmit={onSubmit}/>
        </div>
    )
}

export default TimerList
