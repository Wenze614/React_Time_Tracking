import React, { useState } from 'react';
import {task} from './TimerList'

export interface TimerInputProps {
    placeholderText: string;
    onSubmit: (task: task) => void;
}


const TimerInput = (props: TimerInputProps) => {
    const [index, setIndex] = useState(0)
    const [text, setText] = useState('')
    var new_task: task = {
        id: index,
        content: text
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