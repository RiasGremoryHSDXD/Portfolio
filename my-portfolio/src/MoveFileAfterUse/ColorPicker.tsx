import { useState } from "react"

function ColorPicker()
{
    const [color, setColor] = useState("#FFFFFF")

    let handleColorChange = (event:any) =>
    {
        setColor(event.target.value)
    }
    return(
        <div className="color_picker_container">
            <h1>Color Picker</h1>
            <div className="color_display" style={{backgroundColor:color}}>
            </div>
            <p>Selected Color: {color}</p>
            <label>Select a color:</label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    )
}

export default ColorPicker