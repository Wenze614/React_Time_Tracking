import React, {useState, useEffect} from 'react'
import "./Timer.css"
const Timer = () =>{
    const [timer, setTimer] = useState(0);
    const [initiate, setInitiate] = useState(false)
    useEffect(()=>{
        console.log(timer)
    
    },[timer])   
    useEffect(() => {
        if (!initiate)
        {
            let myInterval = setInterval(() => {
                setTimer(timer => timer+1)
            },1000)
            console.log(timer)
            setInitiate(true)
        }
          
    },[])
return <div className = "timer-content" >{Math.floor(timer/3600)}h-{Math.floor(timer/60)}min-{timer%60}s</div>
}

export default Timer
