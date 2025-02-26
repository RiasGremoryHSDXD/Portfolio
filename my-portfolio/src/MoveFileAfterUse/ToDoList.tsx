import { useState } from "react"

function ToDoList()
{
    const [task, setTask] = useState<string[]>(["Eat Breakfast", "Take a shower", "Walk a dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event:any)
    {
        setNewTask(event.target.value)
    }

    function addTask()
    {
        if(newTask.trim() !== "")
        {
            setTask(prevState => [...prevState, newTask]);
            setNewTask("")
        }
    }

    function deleteTask(index:number)
    {
        setTask(prevState => prevState.filter((_, i) => i !== index))
    }

    function moveTaskUp(index:number)
    {
        if(index > 0)
        {
            const updateTask = [...task];
            [updateTask[index], updateTask[index - 1]] = [updateTask[index - 1], updateTask[index]]
            setTask(updateTask)
        }
    }

    function moveTaskDown(index:number)
    {
        if([...task].length - 1 != index)
        {
            const updateTask = [...task];
            [updateTask[index + 1], updateTask[index]] = [updateTask[index], updateTask[index + 1]]
            setTask(updateTask)
        }
    }

    return(
        <div className="to-do-list">
            <h2>To-Do-List</h2>
            <input 
                type="text"
                value={newTask} 
                placeholder="Enter a task..."
                onChange={handleInputChange}/>

            <button className="add-button"
                    onClick={addTask}>Add Task</button>


            <ol>
                {task.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}
                    </span>
                    <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                    <button className="move-button" onClick={() => moveTaskUp(index)}>👆</button>
                    <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
                </li>)}
            </ol>
        </div>
    )
}

export default ToDoList