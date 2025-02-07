import { useState } from "react"

function Counter()
{
    let [count, setCount] = useState(0);

    const increse_count = () => setCount(count = count + 1)
    const decrease_count = () => setCount(count = count - 1)
    const reset_count = () => setCount(0)
    
    return(
        <div className="container">
            <h2>{count} </h2>
            <div className="button_container">
                <button onClick={decrease_count}>Minus count</button>
                <button onClick={reset_count}>Reset button</button>
                <button onClick={increse_count}>Add count</button>
            </div>
        </div>
    )
}

export default Counter