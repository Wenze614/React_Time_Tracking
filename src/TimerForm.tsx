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
    console.log(props.todoList)
    return (<>
        {props.todoList.map((todo)=>(
        <div >
        <div>{todo.job}</div>
        <div>{todo.dateStart.toString()}</div>
        </div>
        ))}
        </>)
    
}
    


export default TimerForm
