import React, { useState, createContext } from 'react'
import Component2 from './Component2';

export default function UseContext() {
    const [user, setUser] = useState("Ankita");
    const UserContext = createContext();

    return (
        <UserContext.Provider value={user}>
            <>
                <h1 className='text-center fw-bolder '>Use Context</h1>
                <h4 className='text-center text-light'>User name : {user}</h4>
                <Component2 />
            </>
        </UserContext.Provider>
    )
}
