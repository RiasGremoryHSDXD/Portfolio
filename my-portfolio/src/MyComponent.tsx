import { useState } from "react";

type Car = {
    year: number;
    maker: string;
    model: string;
};

function MyComponent()
{
    const [car, setCars] = useState<Car[]>([]);
    const [carYear, setYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setModel] = useState("");

    function handleAddCar(){

        const newCar: Car = {
            year: carYear,
            maker: carMake,
            model: carModel 
        }

        setCars(prevState => [...prevState, newCar]);
        setYear(new Date().getFullYear());
        setCarMake("");
        setModel("");

    }

    function handleRemoveCar(index:number){
        setCars(prevState => prevState.filter((_, i) => i !== index));
    }

    function handleChangeYear(event:any){
        console.log(typeof event.target.value)
        setYear(event.target.value)
    }

    function handleMakeChange(event:any){
        setCarMake(event.target.value)
    }

    function handleModelChange(event:any){
        setModel(event.target.value)
    }
    return(
        <div>
            <h2>List of Car Object</h2>

            <ul>
                {car.map((car_element, index) =>
                <li key={index} onClick={() => handleRemoveCar(index)}>
                    {car_element.year} {car_element.maker} {car_element.model}
                </li>)}
            </ul>

            <input type="number" value={carYear} onChange={handleChangeYear}/><br />
            <input type="text" value={carMake} onChange={handleMakeChange}
                    placeholder="Enter car make"/><br />
            <input type="text" value={carModel} onChange={handleModelChange}
                    placeholder="Enter car model"/><br />
            <button onClick={handleAddCar}>Add Car</button>

        </div>
    )
}

export default MyComponent