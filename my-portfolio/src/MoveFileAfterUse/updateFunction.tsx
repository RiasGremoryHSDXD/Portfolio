import { useState } from "react"

function updateFunction()
{
    const [count, setCount] = useState(0)
    
    let addCount = () =>
    {
        setCount(count => count + 1)
    }

    let resetButton = () =>
    {
        setCount(0)
    }

    let subtractCount = () =>
    {
        setCount(c => c - 1)
    }
    return(
        <div>
            <h2>Current Count: {count}</h2>
            <button onClick={addCount}>Add</button>
            <button onClick={resetButton}>Reset</button>
            <button onClick={subtractCount}>Subtract</button>
        </div>
    )
}

export default updateFunction