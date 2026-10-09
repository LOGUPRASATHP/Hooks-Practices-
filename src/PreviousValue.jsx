import React, { useState, useRef, useEffect } from 'react'

const PreviousValue = () => {
    const [counter, setCounter] = useState(0);
    const prevCounter = useRef(0);
    useEffect(() => {
        prevCounter.current = counter;
    }, [counter])
    return (
        <div>
            <h2>Current : {counter}</h2>
            <h2>Previous : {prevCounter.current}</h2>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    )
}

export default PreviousValue