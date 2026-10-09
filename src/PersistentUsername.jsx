import React, { useState, useEffect } from 'react'

const PersistentUsername = () => {
    const [userName, setUserName] = useState(localStorage.getItem("userName") || "");
    useEffect(() => {
        localStorage.setItem("userName", userName)
    }, [userName])
    return (
        <div>
            <input type='text' placeholder='Enter UserName' value={userName} onChange={(e) => setUserName(e.target.value)} />
            <h2>UserName: {userName} </h2>
        </div>
    )
}

export default PersistentUsername