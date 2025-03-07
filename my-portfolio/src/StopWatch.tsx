import { useState, useEffect } from "react"

function StopWatch() {
    const [time_display, setTimeDisplay] = useState("00:00:00")
    const [time, setTime] = useState(0);
    const [time_running, setTimeRunning] = useState(true)
    
    useEffect(() => {
        document.title = `${time_display}`
    }, [time_display])

    useEffect(() => {
        if (time_running) {
            const interval = setInterval(() => {
                setTime(prevState => {
                    const newTime = prevState + 1
                    setTimeDisplay(formatTime(newTime))
                    return newTime
                })
            }, 1000)

            return () => clearInterval(interval)
        }
    }, [time_running])


    function formatTime(seconds: number) {
        let hr = Math.floor(seconds / 3600)
        let min = Math.floor((seconds % 3600) / 60)
        let secs = seconds % 60

        return `${hr.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }

    let stopTime = () => setTimeRunning(false)
    let resumeTime = () => setTimeRunning(true)
    function resetTime() {
        setTimeDisplay("00:00:00");
        setTimeRunning(false)
        setTime(0)
    }

    return (
        <div className="stopwatch-container">

            <h1>{time_display}</h1>

            <div className="button-container">
                <button onClick={stopTime}>Stop</button>
                <button onClick={resumeTime}>Resume</button>
                <button onClick={resetTime}>Reset</button>
            </div>
        </div>
    )
}

export default StopWatch