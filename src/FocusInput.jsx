import React, { useRef, useState } from 'react'

const FocusInput = () => {
    const focusInputText = useRef(null);
    const [text, setText] = useState("");

    const inputText = () => {
        focusInputText.current.focus();
    }

    const clearText = () => {
        setText("");
    }
    return (
        <div>
            <h2>1.FocusInput</h2>
            <input type='text' placeholder='Enter your text' ref={focusInputText} value={text} onChange={(e) => setText(e.target.value)} /> <br />
            <button type='submit' onClick={inputText}>Submit</button>
            <button onClick={clearText}>Clear</button>
        </div>
    )
}

export default FocusInput