import React, { useEffect, useState } from "react";
import './Timer.css'
const Timer = ()=>{
    const [time, setTime] = useState(0)
    const [start, setStart] = useState(false)
    const [timerId, setTimerId] = useState(0);
    useEffect(()=>{
        let intervalid = null
        if(start){
            intervalid = setInterval(()=>{
                setTime(prev=>prev+=1)
            },1000)
            setTimerId(intervalid)
        }
        else{
            clearInterval(timerId)
        }
    },[start])
    const reset = ()=>{
        setTime(0)
    }
    return (
        <>
            <div className="main">
                <div className="timer">{time}</div>
                <div className="control">
                    <button className="start" onClick={()=>{setStart(true)}}>Start</button>
                    <button className="stop" onClick={()=>{setStart(false)}}>Stop</button>
                    <button className="reset" onClick={reset}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Timer