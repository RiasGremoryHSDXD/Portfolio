import { useState } from "react";

function MyComponent() {
    const [foods, setFoods] = useState([""]);
    const [newFood, setNewFood] = useState(""); // Stores the input value

    const handleInputChange = (event:any) => {
        setNewFood(event.target.value); // Updates the input value state
    }

    const handleAddFood = () => {
        setFoods(prevState => [...prevState, newFood]); // Add new food
        setNewFood(""); // Clear input field after adding
    }

    return (
        <div>
            <p>Current Food:</p>
            <ul>
                {foods.map((food, index) => (
                    <li key={index}>{food}</li>
                ))}
            </ul>

            <input type="text" value={newFood} onChange={handleInputChange} /><br />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}

export default MyComponent;
