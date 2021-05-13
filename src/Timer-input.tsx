import { useState } from 'react';
import {TimerObject}from './features/timer/timerSlice'
import "./Timer-input.css"
export interface TimerInputProps {
    placeholderText: string;
    onSubmit: (task: TimerObject) => void;
}


const TimerInput = (props: TimerInputProps) => {
    const [index, setIndex] = useState(0)
    const [text, setText] = useState('')
    var  new_task: TimerObject={
        job: text,
        id: index,
        status: false,
        counter: 0,
        ifFinished:false
    }
    const onClick = () => {
        props.onSubmit(new_task);
        setText('');
        var new_index = index + 1
        setIndex(new_index)
    }   

    return (
            <div className = "input-area">
            <input  className = "input-field" placeholder={props.placeholderText} value={text} onChange={(e) => setText(e.target.value)} />
            <button  className = "start-button" onClick={() => onClick()}>Start</button>
            </div>
        )
};

export default TimerInput;