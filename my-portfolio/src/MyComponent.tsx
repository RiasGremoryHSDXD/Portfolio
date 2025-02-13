import { useState } from "react"

function MyComponent()
{
    const [car_details, setCar_details] = useState({year: 2024, make: 'Ford', model: 'Mustang'})

    let handleYearChange = (event:any) => setCar_details(c => ({...c, year: event.target.value})) 
    let handleMakeChange = (event:any) => setCar_details(c => ({...c, make: event.target.value}))
    let handleModelChange = (event:any) => setCar_details(c => ({...c, model: event.target.value}))
                      
    return(
        <div>
            <p>
                You're favorite car is: {car_details.year} {car_details.make} {car_details.model}
            </p>

            <input type="number" value={car_details.year} onChange={handleYearChange}/> <br/>
            <input type="text" value={car_details.make} onChange={handleMakeChange}/> <br />
            <input type="text" value={car_details.model} onChange={handleModelChange} /> <br />
        </div>
    )
}

export default MyComponent