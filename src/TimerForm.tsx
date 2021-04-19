import React, {useState} from 'react'


export interface TimerObject {
    job: string;
    id: number;
    dateStart: Date;
    dateEnd: Date;
}


interface TimerFormProps {
    todoList: TimerObject[];
}

const TimerForm = (props: TimerFormProps) => {
    return (<>
        {props.todoList.map((todo)=>(
        <div>
        <div>{todo.job}</div>
        <div>{todo.dateStart}</div>
        </div>
        ))}
        </>)
    
}
    


export default TimerForm
