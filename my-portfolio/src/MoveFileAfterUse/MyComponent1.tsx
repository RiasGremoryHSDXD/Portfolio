import { useEffect, useState } from "react"

function MyComponent()
{
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        console.log("EVENT LISTENER ADDED")

        return () => {
            window.removeEventListener('resize', handleResize);
            console.log("EVENT LISTENER REMOVE")
        }
    }, [])

    useEffect(() => {
        document.title = `${width} ❌ ${height}`
    }, [width, height])

    function handleResize()
    {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return(
        <div>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
        </div>
    )
}

export default MyComponent