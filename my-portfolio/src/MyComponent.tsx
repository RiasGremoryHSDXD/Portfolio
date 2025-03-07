import { useState, useEffect, useRef } from "react"

function MyComponent() {

    let inputRef1 = useRef<HTMLInputElement>(null)
    let inputRef2 = useRef<HTMLInputElement>(null)
    let inputRef3 = useRef<HTMLInputElement>(null)

    function handleInputRef1()
    {
        inputRef1.current!.style.backgroundColor = "yellow";
        inputRef2.current!.style.backgroundColor = "";
        inputRef3.current!.style.backgroundColor = "";
    }

    function handleInputRef2()
    {
        inputRef1.current!.style.backgroundColor = "";
        inputRef2.current!.style.backgroundColor = "yellow";
        inputRef3.current!.style.backgroundColor = "";
    }

    function handleInputRef3()
    {
        inputRef1.current!.style.backgroundColor = "";
        inputRef2.current!.style.backgroundColor = "";
        inputRef3.current!.style.backgroundColor = "yellow";
    }
    return (
        <div>

            <button onClick={handleInputRef1}>Click Me!</button>
            <input ref={inputRef1}></input>

            <button onClick={handleInputRef2}>Click Me!</button>
            <input ref={inputRef2}></input>
            
            <button onClick={handleInputRef3}>Click Me!</button>
            <input ref={inputRef3}></input>
        </div>
    )
}

export default MyComponent