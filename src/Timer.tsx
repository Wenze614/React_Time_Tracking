import React, {useState, useEffect} from 'react'
import "./Timer.css"

//start and return a new timer
const Timer = () =>{
    const [timer, setTimer] = useState(0);
    useEffect(() => {
        
            setInterval(() => {
                setTimer(timer => timer+1)
            },1000)
    },[])

    return (
    <div className = "timer-content" >
        <span className = "important-numbers">{Math.floor(timer/3600)}</span>h-
        <span className = "important-numbers">{Math.floor(timer/60)}</span>min-
        <span className = "important-numbers">{timer%60}</span>s</div>
    )
}

export default Timer
