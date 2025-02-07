import {useState} from "react";

function MyComponent()
{
    let [name, setName] = useState("");
    let [age, setAge] = useState(0);
    let [isEmployee, setEmployee] = useState(false);

    const updateName = (name:string) => setName(name)
    const updateAge = () => setAge(preAge => preAge + 1 )
    const updateEmployee = () => setEmployee(!isEmployee)

    const resetData = () => 
    {
        setName('')
        setAge(0)
        setEmployee(false)
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={() => updateName('James Christopher C. Tagupa')}>Set name</button>

            <p>Count Clicked: {age}</p>
            <button onClick={updateAge}>Set name</button>

            <p>Employee Status: {isEmployee ? 'True' : 'False'}</p>
            <button onClick={updateEmployee}>Toggle Employee Status</button>

            <br />
            <button onClick={resetData}>Reset Data</button>
        </div>
    );
}

export default MyComponent