import { useEffect } from 'react';
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
    const [disabled, setDisabled] = useState(true)
    var  new_task: TimerObject={
        job: text,
        id: index,
        status: false,
        counter: 0,
        ifFinished:false,
    }
    const onClick = () => {
        props.onSubmit(new_task);
        setText('');
        var new_index = index + 1
        setIndex(new_index)
    }   
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        var value = e.target.value
        setText(value)
    }
    useEffect(()=>{
        if(text!=""){
            if(text.replace(/\s+/g,'')!="")
            {
                setDisabled(false)
            }
        }
        else
        {
            setDisabled(true)
        }
    },[text])
    return (
            <div className = "input-area">
            <input  className = "input-field" placeholder={props.placeholderText} value={text} onChange={ onChange} />
            <button  className = "start-button" onClick={() => onClick()} disabled={disabled}>Start</button>
            </div>
        )
};

export default TimerInput;