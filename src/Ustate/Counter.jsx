import React, {useState} from "react"

export default function Counter(){
     
    const[count, setCount] = useState(0)

    return(
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(c => c-1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(c => c+1)}>Increment</button>

            {/* ' c' means the PREVIOUS STATE of "count" */}
        </div>
    )
}