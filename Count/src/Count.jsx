import React, { useState } from "react";

const Count = () =>{
 
    let [count, setCount] = useState(0)

    const Increment = () =>{
        setCount(count + 1)
    }

    const Decrement = () =>{
        setCount(count - 1)
    }


    return <div>
        <h1>Count</h1>
        <h2>{count}</h2>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
    </div>
}

export default Count;