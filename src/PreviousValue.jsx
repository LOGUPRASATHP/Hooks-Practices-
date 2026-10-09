import React, { useState, useRef, useEffect } from 'react'

const PreviousValue = () => {
    const [counter, setCounter] = useState(0);
    const prevCounter = useRef(0);
    useEffect(() => {
        prevCounter.current = counter;
    }, [counter])
    return (
        <div>
            <h2>2.PreviousValue</h2>
            <h4>Current : {counter}</h4>
            <h4>Previous : {prevCounter.current}</h4>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    )
}

export default PreviousValue