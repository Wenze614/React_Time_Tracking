import React, { useState } from 'react';

interface TimerInputProps {

}

const TimerInput = (props: TimerInputProps) => {

    const [text, setText] = useState('')

    const onClick = () => {
        window.alert(text);
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