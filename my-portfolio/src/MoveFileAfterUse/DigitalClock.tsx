import { useState, useEffect } from "react"

function DigitalClock()
{
    const [time, setTime] = useState(new Date());

    useEffect(() =>
    {
        document.title = `${time.toLocaleTimeString()}`
        const interval = setInterval(() => 
        {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(interval)
    }, [time])

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{time.toLocaleTimeString()}</span>
            </div>
        </div>
    )
}

export default DigitalClock