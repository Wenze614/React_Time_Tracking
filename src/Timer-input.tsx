import React, { useState } from 'react';


export interface TimerInputProps {
    placeholderText: string;
    onSubmit: (text: string) => void;
}

const TimerInput = (props: TimerInputProps) => {

    const [text, setText] = useState('')

    const onClick = () => {
        props.onSubmit(text);
        setText('');
    }   

    return (
        <React.Fragment>
            <input placeholder={props.placeholderText} value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => onClick()}>Start</button>
        </React.Fragment>
    )
};

export default TimerInput;