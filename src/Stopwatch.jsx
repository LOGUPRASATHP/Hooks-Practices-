import React, { useState, useRef } from 'react'

const Stopwatch = () => {
    const [seconds, setSeconds] = useState(0);
    const timerRef = useRef(null);
    const start = () => {
        timerRef.current = setInterval(() => {
            setSeconds((previousSecond) => previousSecond + 1);
        }, 1000);
    }
    
    const pause = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
    }

    const reset = () => {
        setSeconds(0);
    }

    return (
        <div>
            <h2>3.Stopwatch</h2>
            <h4>Seconds : {seconds}</h4>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Stopwatch