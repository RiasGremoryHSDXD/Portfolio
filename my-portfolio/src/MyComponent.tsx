import { useState } from "react";

function MyComponent() {
    const [foods, setFoods] = useState<string[]>([]);
    const [newFood, setNewFood] = useState(""); // Stores the input value

    const handleInputChange = (event:any) => {
        setNewFood(event.target.value); // Updates the input value state
    }

    const handleAddFood = () => {
        
        if(validatedInputIsAlphabet(newFood) && !data_isAllWhiteSpace(newFood))
        {
            setFoods(prevState => [...prevState, newFood]);
            setNewFood("");
        }
        else
        {
            alert(newFood.length)
            // alert('Only the alphabet and space are allowed.')
        }
    }

    const data_isAllWhiteSpace = (check_value:string) =>
    {
        return /^\s+$/.test(check_value)
    }

    
    const validatedInputIsAlphabet = (check_value:string) => {
        return /^[a-zA-Z\s]+$/.test(check_value)
    }

    const count_current_item = () => {
        return foods.length;
    }

    return (
        <div className="main_cointainer">
            <div className="center">
                <p>Buy list Food:</p>
                <ul>
                    {foods.map((food, index) => (
                        <li key={index}>{food}</li>
                    ))}
                </ul>
                <p>Current item count: {count_current_item()}</p>
                <input type="text" value={newFood} onChange={handleInputChange} className="wew"/><br />
                <button onClick={handleAddFood}>Add Food</button>
                </div>
        </div>
    );
}

export default MyComponent;
