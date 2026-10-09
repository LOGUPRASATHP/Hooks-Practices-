import React, { useState, useEffect } from 'react'

const PersistentUsername = () => {
    const [userName, setUserName] = useState(localStorage.getItem("userName") || "");
    useEffect(() => {
        localStorage.setItem("userName", userName)
    }, [userName])
    return (
        <div>
            <h2>5.PersistentUsername</h2>
            <input type='text' placeholder='Enter UserName' value={userName} onChange={(e) => setUserName(e.target.value)} />
            <h4>UserName: {userName} </h4>
        </div>
    )
}

export default PersistentUsername