import React, {useState, useEffect} from 'react'

const Timer = () =>{
    const [timer, setTimer] = useState(0);
    const [initiate, setInitiate] = useState(false)
    // useEffect(() => {
    //     console.log('CREATED')
    //     let interval = setInterval(()=>{
    //             setTimer(timer => timer+1)
    //         },1000
    //     )

    //     return () => clearInterval(interval)
    // }, [timer])
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
            setInitiate(false)
        }
          
    },[])
return <div><div>{Math.floor(timer/3600)}h</div><div>{Math.floor(timer/60)}min</div><div>{timer%60}s</div></div>
}

export default Timer
