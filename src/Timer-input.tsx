import React, { useState } from 'react';
import {TimerObject}from './TimerForm'
import "./Timer-input.css"

// return input field and start button, pass new task to TimerList when start button is clicked
export interface TimerInputProps {
    placeholderText: string;
    onSubmit: (task: TimerObject) => void;
}


const TimerInput = (props: TimerInputProps) => {
    const [index, setIndex] = useState(0)
    const [text, setText] = useState('')
    const [timer, setTimer] = useState(0)
    var today = Date.now();
    var  new_task: TimerObject={
        job: text,
        id: index,
        dateStart: today,
        dateEnd: today

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