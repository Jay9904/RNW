import React, { useState, useEffect } from "react";

export default function Effect() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(10);

    function handleCo() {
        setCount(count + 1);
    }
    function handleDa() {
        setData(data + 10);
    }
    // when we change the state data use effect render;
    // use effect render every time when when dom reload if depemdency don't use; 
    useEffect(() => { console.log("Run") }, [data]);

    return <>
        <p>Count : {count}</p>
        <p>Count : {data}</p>
        <button onClick={handleCo}>Count Change</button >
        <button onClick={handleDa}>Data Change</button >
    </>
}