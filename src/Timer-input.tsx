import React, { useState } from 'react';

interface TimerInputProps {
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
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => onClick()}>Start</button>
        </React.Fragment>
    )
};

export default TimerInput;