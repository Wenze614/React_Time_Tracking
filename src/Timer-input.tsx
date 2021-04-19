import React, { useState } from 'react';
import {TimerObject}from './TimerForm'

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
        <React.Fragment>
            <input placeholder={props.placeholderText} value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => onClick()}>Start</button>
        </React.Fragment>
    )
};

export default TimerInput;