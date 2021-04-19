import React, {useState, useEffect} from 'react'

const Timer = () =>{
    const [timer, setTimer] = useState(0);
    
    useEffect(() => {
        console.log('CREATED')
        let interval = setInterval(()=>{
                setTimer(timer => timer+1)
            },1000
        )

        return () => clearInterval(interval)
    }, [timer])
    return <div>{timer}s</div>
}

export default Timer
